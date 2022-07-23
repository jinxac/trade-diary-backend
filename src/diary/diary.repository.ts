import { Logger } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { Diary } from "./diary.entity";

@EntityRepository(Diary)
export class DiaryRepository extends Repository<Diary> {
  private readonly logger = new Logger(DiaryRepository.name);
}
