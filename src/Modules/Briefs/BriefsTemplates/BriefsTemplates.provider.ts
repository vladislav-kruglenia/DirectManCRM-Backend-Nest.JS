import { Injectable } from '@nestjs/common';
import { SaveBriefInfoDTO } from './Types/BriefsTemplatesControllers.dto';
import { BriefsTemplatesService } from './Services/BriefsTemplates.service';

@Injectable()
export class BriefsTemplatesProvider {
  constructor(
    private briefInfoService: BriefsTemplatesService,
  ){}

  async saveBriefInfoTemplate(saveBriefInfoDTO: SaveBriefInfoDTO) {
    let {briefTemplate} = saveBriefInfoDTO;
    if(briefTemplate.briefTemplateId === null){
      return this.briefInfoService.createNewBriefTemplate(briefTemplate)
    } else {
      return this.briefInfoService.editBriefTemplate(briefTemplate)
    }
  }

  async getBriefTemplate(id: string) {
    return this.briefInfoService.getBriefTemplate(id);
  }

  async deleteBriefTemplate(id: string) {
    await this.briefInfoService.deleteBriefTemplate(id)
  }
}