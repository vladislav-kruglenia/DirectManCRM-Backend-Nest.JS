import { Controller, Get } from '@nestjs/common';
import { ProcessOrderProvider } from './processOrder.provider';


@Controller()
export class ProcessOrderController {
  constructor(private processOrderProvider: ProcessOrderProvider){}

  @Get('/saveOrderInfo')
  saveOrderInfo ():string {
    return this.processOrderProvider.saveOrderInfo()
  }

  @Get('/editTariffsInfo')
  editTariffsInfo ():string {
    return this.processOrderProvider.editTariffsInfo()
  }

  @Get('/getTariffsInfo')
  getTariffsInfo ():string {
    return this.processOrderProvider.getTariffsInfo()
  }
}
