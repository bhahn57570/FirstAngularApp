import { Component, OnInit } from '@angular/core';

import { Brand } from './brand';
import { BrandsService } from './brands.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  providers: [ BrandsService ],
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  brands: Brand[];
  editBrand: Brand; // the brand currently being edited

  constructor(private brandsService: BrandsService) { }

  ngOnInit() {
    this.getBrands();
  }

  getBrands(): void {
    this.brandsService.getBrands()
      .subscribe(brands => this.brands = brands);
  }

  add(name: string): void {
    this.editBrand = undefined;
    name = name.trim();
    if (!name) { return; }

    // The server will generate the id for this new brand
    const newBrand: Brand = { name } as Brand;
    this.brandsService.addBrand(newBrand)
      .subscribe(brand => this.brands.push(brand));
  }

  delete(brand: Brand): void {
    this.brands = this.brands.filter(h => h !== brand);
    this.brandsService.deleteBrand(brand.id).subscribe();
    /*
    // oops ... subscribe() is missing so nothing happens
    this.brandsService.deleteBrand(brand.id);
    */
  }

  edit(brand) {
    this.editBrand = brand;
  }

  search(searchTerm: string) {
    this.editBrand = undefined;
    if (searchTerm) {
      this.brandsService.searchBrands(searchTerm)
        .subscribe(brands => this.brands = brands);
    }
  }

  update() {
    if (this.editBrand) {
      this.brandsService.updateBrand(this.editBrand)
        .subscribe(brand => {
          // replace the brand in the brands list with update from server
          const ix = brand ? this.brands.findIndex(h => h.id === brand.id) : -1;
          if (ix > -1) { this.brands[ix] = brand; }
        });
      this.editBrand = undefined;
    }
  }
}
