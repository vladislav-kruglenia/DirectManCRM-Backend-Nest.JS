import { Module } from '@nestjs/common';
import { BriefsTemplatesController } from './BriefsTemplates.controller';
import { BriefsTemplatesProvider } from './BriefsTemplates.provider';
import { MongooseModule } from '@nestjs/mongoose';
import { BriefsTemplatesService } from './Services/BriefsTemplates.service';
import { Brief_Template, BriefTemplateSchema } from './MongooseShemas/BriefTemplate.shema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Brief_Template.name, schema: BriefTemplateSchema },
    ]),
  ],
  controllers: [BriefsTemplatesController],
  providers: [BriefsTemplatesProvider, BriefsTemplatesService],
})
export class BriefsTemplatesModule {
}