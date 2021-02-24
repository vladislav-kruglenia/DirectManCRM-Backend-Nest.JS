import { Body, Controller, Get, Post } from '@nestjs/common';
import { TariffsEditingProvider } from './TariffsEditing.provider';
import { SaveOrderInfoDto } from './DTO/SaveOrderInfoDto.types';
import { EditTariffsInfoDto } from './DTO/EditTariffsInfoDto.types';

@Controller()
export class TariffsEditingController {
  constructor(private tariffsEditing:TariffsEditingProvider){}

  @Post('/saveOrderInfo')
  saveOrderInfo(@Body() saveOrderInfoDto: SaveOrderInfoDto) {
    return this.tariffsEditing.saveOrderInfo(saveOrderInfoDto);
  }

  @Post('/editTariffs')
  editTariffsInfo(@Body() editTariffsInfoDto: EditTariffsInfoDto) {
    return this.tariffsEditing.editTariffsInfo(editTariffsInfoDto);
  }

  @Get('/getTariffsInfo')
  getTariffsInfo() {
    return this.tariffsEditing.getTariffsInfo();
  }


}