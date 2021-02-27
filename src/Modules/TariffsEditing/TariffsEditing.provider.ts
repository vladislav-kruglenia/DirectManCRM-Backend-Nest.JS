import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './Shemas/Orders.shema';
import { Model } from 'mongoose';
import { SaveOrderInfoDto } from './DTO/SaveOrderInfoDto.types';
import { Tariffs_Info, TariffsInfoDocument } from './Shemas/TariffsInfo.schema';
import { EditTariffsInfoDto, TariffInfoID } from './DTO/EditTariffsInfoDto.types';

@Injectable()
export class TariffsEditingProvider {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
    @InjectModel(Tariffs_Info.name) private tariffsInfoModel: Model<TariffsInfoDocument>,
  ) {}

  async saveOrderInfo(saveOrderInfoDto: SaveOrderInfoDto) {
    let {userId, nameProject, directionsAndTariffs} = saveOrderInfoDto;
    try {
      let order = await this.orderModel.findOne({userId});
      if (order) {
        order.nameProject = nameProject;
        order.directionsAndTariffs = directionsAndTariffs;
      } else {
        order = new this.orderModel(saveOrderInfoDto)
      }
      await order.save();
    } catch (e) {
      console.log(e);
      throw new HttpException("Server error.", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async editTariffsInfo(editTariffsInfoDto: EditTariffsInfoDto) {
    const ID = TariffInfoID.ID;
    try {
      let tariffsInfo = await this.tariffsInfoModel.findOne({ID});
      if (tariffsInfo) {
        tariffsInfo.directionsAndTariffs = editTariffsInfoDto.directionsAndTariffs;
      } else {
        tariffsInfo = new this.tariffsInfoModel({
          ...editTariffsInfoDto,
          ID,
        })
      }
      await tariffsInfo.save();
    } catch (e) {
      console.log(e);
      throw new HttpException("Server error.", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  async getTariffsInfo() {
    const ID = TariffInfoID.ID;
    try {
      let tariffsInfo = await this.tariffsInfoModel.findOne({ID});
      if (tariffsInfo) {
        return {
          message: "Tariffs information sent.",
          tariffsInfo: tariffsInfo.directionsAndTariffs
        }
      } else {
        return new HttpException("Server error.", HttpStatus.INTERNAL_SERVER_ERROR);
      }
    } catch (e) {
      console.log(e);
      throw new HttpException("Server error.", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}