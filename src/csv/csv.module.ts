import { Module } from '@nestjs/common';
import { CsvController } from './csv.controller';
import { CsvService } from './csv.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CSV } from './entities/csv.entity';

@Module({
  imports:[TypeOrmModule.forFeature([CSV])],
  controllers: [CsvController],
  providers: [CsvService]
})
export class CsvModule {}
