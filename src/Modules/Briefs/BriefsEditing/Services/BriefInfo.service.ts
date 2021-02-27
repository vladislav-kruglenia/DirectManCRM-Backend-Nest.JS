import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Brief, BriefDocument } from '../MongooseShemas/BriefInfo.shema';
import { Model } from 'mongoose';
import { BriefInfoType } from '../Types/BriefInfo.type';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BriefInfoService {
  constructor(
    @InjectModel(Brief.name) private briefInfoModel: Model<BriefDocument>,
  ) {}

  async getBrief(id: string):Promise<BriefInfoType> {
    try{
      let brief = await this._getBriefModel(id);
      const {briefId, briefType, questions} = brief;
      return {briefId, briefType, questions}

    } catch (e) {
      console.log(e);
      throw new HttpException('Server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async createNewBrief(briefInfo: BriefInfoType) {
    try {
      let brief = new this.briefInfoModel;
      const briefId = uuidv4();
      brief.briefId = briefId;
      BriefInfoService._transformRequireData(brief, briefInfo);
      await brief.save();
      return {
        message: "Brief is created.",
        briefId
      }
    } catch (e) {
      console.log(e);
      throw new HttpException('Server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async editBriefInfo(briefInfo: BriefInfoType) {
    try {
      let brief = await this._getBriefModel(briefInfo.briefId);
      BriefInfoService._transformRequireData(brief, briefInfo);
      await brief.save();
      return {
        message: "Brief edited.",
          briefId: brief.briefId
      }
    } catch (e) {
      console.log(e);
      throw new HttpException('Server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

  async deleteBrief(briefId: string){
    try{
      const brief = await this._getBriefModel(briefId);
      brief.delete()
    } catch (e) {
      console.log(e);
      throw new HttpException('Server error.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  private async _getBriefModel(briefId: string): Promise<BriefDocument> {
    return this.briefInfoModel.findOne({ briefId });
  }

  private static _transformRequireData(brief: BriefDocument, briefInfo: BriefInfoType) {
    brief.briefType = briefInfo.briefType;
    brief.questions = briefInfo.questions;
  }
}