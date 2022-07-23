import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Diary } from "./diary.entity";
import { DiaryRepository } from "./diary.repository";
import { CreateEntryDto } from "./dto/create-entry.dto";
import { UpdateEntryDto } from "./dto/update-entry.dto";

@Injectable()
export class DiaryService {
  private readonly logger = new Logger(DiaryService.name);

  constructor(
    @InjectRepository(Diary) private diaryRepository: DiaryRepository
  ) {}

  async create(createEntryDto: CreateEntryDto): Promise<object> {
    const entry: Diary = this.diaryRepository.create(createEntryDto);

    try {
      await this.diaryRepository.insert(entry);
      return {
        ok: true,
        message: `Saved entry ${entry.id}`,
      };
    } catch (error) {
      this.logger.error(`error while saving the entry ${error.message}`, error);
      throw new InternalServerErrorException(`Entry could not be saved`);
    }
  }

  async findAll(): Promise<Diary[]> {
    return this.diaryRepository.find();
  }

  async findOne(id: string): Promise<Diary> {
    return this.diaryRepository.findOne(id);
  }

  async delete(id: string) {
    const result = await this.diaryRepository.delete({ id });
    return {
      ok: true,
      message: `Rows affected ${result.affected}`,
    };
  }

  async update(id: string, updateEntryDto: UpdateEntryDto) {
    const entry: Diary = this.diaryRepository.create(updateEntryDto);
    const result = await this.diaryRepository.update({ id: id }, entry);
    return {
      ok: true,
      message: `Rows affected ${result.affected}`,
    };
  }
}
