import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DiaryController } from "./diary.controller";
import { Diary } from "./diary.entity";
import { DiaryService } from "./diary.service";

@Module({
  imports: [TypeOrmModule.forFeature([Diary])],
  controllers: [DiaryController],
  providers: [DiaryService],
})
export class DiaryModule {}
