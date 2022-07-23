import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

import baseConfig from "./config/base-config";
import { validate } from "./config/config-validation";
import ormConfig, { dbConfig } from "./config/orm-config";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { DiaryModule } from "./diary/diary.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [baseConfig, ormConfig],
      validate,
    }),
    TypeOrmModule.forRoot(dbConfig),
    DiaryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
