import { Injectable } from '@nestjs/common';
import { SaveBriefTemplateDTO } from './Types/Controllers.dto';
import { BriefInfoService } from './Services/BriefInfo.service';

@Injectable()
export class BriefsEditingProvider {
  constructor(
    private briefInfoService: BriefInfoService,
  ){}

  async saveBriefInfo(saveBriefInfoDTO: SaveBriefTemplateDTO) {
    let {briefInfo} = saveBriefInfoDTO;
    if(briefInfo.briefId === null){
      return this.briefInfoService.createNewBrief(briefInfo)
    } else {
      return this.briefInfoService.editBriefInfo(briefInfo)
    }
  }

  async getBrief(id: string) {
    return this.briefInfoService.getBrief(id);
  }

  async deleteBrief(id: string) {
    await this.briefInfoService.deleteBrief(id)
  }
}