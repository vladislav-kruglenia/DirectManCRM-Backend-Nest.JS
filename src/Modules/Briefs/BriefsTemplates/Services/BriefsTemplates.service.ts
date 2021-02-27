import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brief_Template, BriefTemplateDocument } from '../MongooseShemas/BriefTemplate.shema';
import { Model } from 'mongoose';
import { BriefTemplateType } from '../Types/BriefTemplateType';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BriefsTemplatesService {
  constructor(
    @InjectModel(Brief_Template.name) private briefInfoModel: Model<BriefTemplateDocument>,
  ) {}

  async getBriefTemplate(id: string):Promise<BriefTemplateType> {
    try{
      let brief = await this._getBriefTemplateModel(id);
      const {briefTemplateId, questions, briefName, assessesTypes} = brief;
      return {briefTemplateId, questions,  briefName, assessesTypes}

    } catch (e) {
      console.log(e);
      throw new HttpException('Server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createNewBriefTemplate(briefInfo: BriefTemplateType) {
    try {
      let brief = new this.briefInfoModel;
      const briefTemplateId = uuidv4();
      brief.briefTemplateId = briefTemplateId;
      this._transformRequireData(brief, briefInfo);
      await brief.save();
      return {
        message: "Brief template is created.",
        briefTemplateId
      }
    } catch (e) {
      console.log(e);
      throw new HttpException('Server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async editBriefTemplate(briefInfo: BriefTemplateType) {
    try {
      const {briefTemplateId} = briefInfo;
      let brief = await this._getBriefTemplateModel(briefTemplateId);
      this._transformRequireData(brief, briefInfo);
      await brief.save();
      return {
        message: "Brief template edited.",
        briefTemplateId
      }
    } catch (e) {
      console.log(e);
      throw new HttpException('Server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  async deleteBriefTemplate(briefId: string){
    try{
      const brief = await this._getBriefTemplateModel(briefId);
      brief.delete()
    } catch (e) {
      console.log(e);
      throw new HttpException('Server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async _getBriefTemplateModel(briefTemplateId: string): Promise<BriefTemplateDocument> {
    return this.briefInfoModel.findOne({ briefTemplateId });
  }

  private _transformRequireData(brief: BriefTemplateDocument, briefInfo: BriefTemplateType) {
    const {questions, assessesTypes, briefName} = briefInfo;
    brief.questions = questions;
    brief.assessesTypes = assessesTypes;
    brief.briefName = briefName;
  }
}