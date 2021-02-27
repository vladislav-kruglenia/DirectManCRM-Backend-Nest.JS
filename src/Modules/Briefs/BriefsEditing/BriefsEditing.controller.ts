import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SaveBriefTemplateDTO } from './Types/Controllers.dto';
import { BriefsEditingProvider } from './BriefsEditing.provider';

@Controller()
export class BriefsEditingController{
  constructor(
    private briefsEditingService: BriefsEditingProvider
  ){}

  @Get('/getBrief/:id')
  getBrief(@Param('id') id: string){
    return this.briefsEditingService.getBrief(id)
  }

  @Post('/editBriefInfo')
  saveBriefInfo(@Body() saveBriefInfoDTO: SaveBriefTemplateDTO){
    return this.briefsEditingService.saveBriefInfo(saveBriefInfoDTO)
  }

  @Delete('/deleteBrief/:id')
  deleteBrief(@Param('id') id: string){
    return this.briefsEditingService.deleteBrief(id)
  }
}