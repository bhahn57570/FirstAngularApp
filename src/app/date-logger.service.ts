/* tslint:disable:one-line*/
import { Injectable }    from '@angular/core';

import { Logger} from './logger.service';

@Injectable()
export class DateLoggerService extends Logger
{
  logInfo(msg: any)  { super.logInfo("Date logger " + stamp(msg)); }
  logDebug(msg: any) { super.logInfo(stamp(msg)); }
  logError(msg: any) { super.logError(stamp(msg)); }
}

function stamp(msg: any) { return msg + ' at ' + new Date(); }
