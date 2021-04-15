import { ErrorHandler, Injectable, Injector } from '@angular/core';
//import { LogService } from '@app/core/log/log.service';
import { LogService } from './logging.service';


@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(private logService: LogService) {
    super();
  }

  public handleError(error) {

    let message = error.message ? error.message : error.toString();

    if (error.status) {
      error = new Error(message);
    }
    this.logService.logError(message);


  }

}
