import { Injectable } from '@nestjs/common';


@Injectable()
export class ProcessOrderProvider {
  saveOrderInfo ():string {
    return 'saveOrder'
  }

  editTariffsInfo ():string {
    return 'editTariffsInfo'
  }

  getTariffsInfo ():string {
    return 'getTariffsInfo'
  }
}