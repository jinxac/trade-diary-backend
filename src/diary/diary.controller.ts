import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { DiaryService } from "./diary.service";
import { CreateEntryDto } from "./dto/create-entry.dto";
import { UpdateEntryDto } from "./dto/update-entry.dto";

@Controller({
  version: "1",
  path: "diary",
})
export class DiaryController {
  constructor(private readonly diaryService: DiaryService) {}

  @Post()
  async create(@Body() createEntryDto: CreateEntryDto) {
    return this.diaryService.create(createEntryDto);
  }

  @Get()
  async findAll() {
    return this.diaryService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.diaryService.findOne(id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateEntryDto: UpdateEntryDto
  ) {
    return this.diaryService.update(id, updateEntryDto);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.diaryService.delete(id);
  }
}
