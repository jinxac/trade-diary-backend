import { IsNotEmpty } from "class-validator";

export class CreateEntryDto {
  @IsNotEmpty()
  instrument: string;

  @IsNotEmpty()
  buyAt: Date;

  @IsNotEmpty()
  sellAt: Date;

  @IsNotEmpty()
  strategy: string;

  @IsNotEmpty()
  entryPrice: number;

  @IsNotEmpty()
  targetPrice: number;

  exitPrice: number;

  @IsNotEmpty()
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
