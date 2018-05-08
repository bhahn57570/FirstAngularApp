  export class Hero {
    id: number;
    name: string;
  }

export class HeroModel {

  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string
  ) {  }

}

export interface Flyer { canFly: boolean; }

export const SOLDIERS = [
  { name: 'Windstorm', canFly: true },
  { name: 'Bombasto', canFly: false },
  { name: 'Magneto', canFly: false },
  { name: 'Tornado', canFly: true }
]; 