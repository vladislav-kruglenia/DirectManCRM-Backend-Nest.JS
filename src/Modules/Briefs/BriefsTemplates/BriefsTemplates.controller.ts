import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SaveBriefInfoDTO } from './Types/BriefsTemplatesControllers.dto';
import { BriefsTemplatesProvider } from './BriefsTemplates.provider';

@Controller()
export class BriefsTemplatesController{
  constructor(
    private templatesEditingProvider: BriefsTemplatesProvider
  ){}

  @Get('/getBriefTemplate/:id')
  getBriefTemplate(@Param('id') id: string){
    return this.templatesEditingProvider.getBriefTemplate(id)
  }

  @Post('/editBriefTemplate')
  saveBriefTemplate(@Body() saveBriefInfoDTO: SaveBriefInfoDTO){
    return this.templatesEditingProvider.saveBriefInfoTemplate(saveBriefInfoDTO)
  }

  @Delete('/deleteBriefTemplate/:id')
  deleteBriefTemplate(@Param('id') id: string){
    return this.templatesEditingProvider.deleteBriefTemplate(id)
  }
}