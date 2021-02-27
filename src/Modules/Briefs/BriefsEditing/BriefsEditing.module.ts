import { Module } from '@nestjs/common';
import { BriefsEditingController } from './BriefsEditing.controller';
import { BriefsEditingProvider } from './BriefsEditing.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { Brief, BriefSchema } from './MongooseShemas/BriefInfo.shema';
import { BriefInfoService } from './Services/BriefInfo.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Brief.name, schema: BriefSchema },
    ]),
  ],
  controllers: [BriefsEditingController],
  providers: [BriefsEditingProvider, BriefInfoService],
})
export class BriefsEditingModule {
}