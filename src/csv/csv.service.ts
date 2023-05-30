import { Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import * as csvParser from 'csv-parser';
import { Pool } from 'pg';
import { CSV } from './entities/csv.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CsvService {
    constructor(@InjectRepository(CSV) private readonly csvRepository: Repository<CSV>) {
    }

    async processCsv(file: Express.Multer.File) {
        // const pool = new Pool({
        //     user: 'postgres',
        //     host: 'localhost',
        //     database: 'nestDB',
        //     password: 'vraj',
        //     port: 5432, // default PostgreSQL port
        // });

        const csvContent = file.buffer.toString("utf-8");
        // console.log(csvContent);
        const rows = csvContent.split("\n");
        rows.splice(0, 1)

        for (let i = 0; i < rows.length; i++) {
            const row = (rows[i].split(";"));
            const user = new CSV();
            user.username = row[0];
            user.identifier = Number(row[1]);
            user.first_name = row[2];
            user.last_name = row[3];
            await this.csvRepository.save(user);
        }

        // await pool.end();

        return { message: 'CSV file processed successfully.',columnCount:rows[0].split(";").length };
    }
}
