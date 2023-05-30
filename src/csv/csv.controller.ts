import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CsvService } from './csv.service';

@Controller('csv')
export class CsvController {
  constructor(private readonly csvService: CsvService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async uploadCsv(@UploadedFile() file) {
    return await this.csvService.processCsv(file);
  }
}
