import { Module } from '@nestjs/common';
import { TariffsEditingController } from './TariffsEditing.controller';
import { TariffsEditingProvider } from './TariffsEditing.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './Shemas/Orders.shema';
import { Tariffs_Info, TariffsInfoSchema } from './Shemas/TariffsInfo.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Order.name, schema: OrderSchema },
    { name: Tariffs_Info.name, schema: TariffsInfoSchema },
  ])],
  controllers: [TariffsEditingController],
  providers: [TariffsEditingProvider],
})
export class TariffsEditingModule {
}