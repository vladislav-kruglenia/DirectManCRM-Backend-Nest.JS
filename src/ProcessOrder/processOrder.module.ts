import { Module } from '@nestjs/common';
import { ProcessOrderController } from './processOrder.controller';
import { ProcessOrderProvider } from './processOrder.provider';


@Module({
  controllers: [ProcessOrderController],
  providers: [ProcessOrderProvider]
})
export class ProcessOrderModule {}