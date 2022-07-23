import { IsNotEmpty } from "class-validator";

export class UpdateEntryDto {
  @IsNotEmpty()
  instrument: string;

  @IsNotEmpty()
  buyAt: Date;

  @IsNotEmpty()
  sellAt: Date;

  @IsNotEmpty()
  strategy: string;

  entryPrice: number;

  targetPrice: number;

  exitPrice: number;

  stopLossPrice: number;

  quantity: number;

  profit: number;

  profitPercentage: number;

  @IsNotEmpty()
  emotionAtEntry: string;

  @IsNotEmpty()
  emotionAtExit: string;

  @IsNotEmpty()
  tradeLearnings: string;

  @IsNotEmpty()
  tradeMistakes: string;

  tradeRating: number;
}
