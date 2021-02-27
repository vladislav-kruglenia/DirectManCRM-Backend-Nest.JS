import { Module } from '@nestjs/common';
import { BriefsTemplatesModule } from './BriefsTemplates/BriefsTemplates.module';
import { BriefsEditingModule } from './BriefsEditing/BriefsEditing.module';

@Module({
  imports: [BriefsTemplatesModule, BriefsEditingModule]
})
export class BriefsModule {}