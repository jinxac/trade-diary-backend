import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
} from "typeorm";

@Entity()
export class Diary {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({
    type: "varchar",
    name: "instrument",
  })
  instrument: string;

  @CreateDateColumn({
    type: "timestamp",
    name: "buy_at",
  })
  buyAt: Date;

  @CreateDateColumn({
    type: "timestamp",
    name: "sell_at",
  })
  sellAt: Date;

  @Column({
    type: "varchar",
    name: "strategy",
  })
  strategy: string;

  @Column({
    type: "numeric",
    name: "entry_price",
  })
  entryPrice: number;

  @Column({
    type: "numeric",
    name: "target_price",
  })
  targetPrice: number;

  @Column({
    type: "numeric",
    name: "quantity",
  })
  quantity: number;

  @Column({
    type: "numeric",
    name: "exit_price",
    nullable: true,
  })
  exitPrice: number;

  @Column({
    type: "numeric",
    name: "stop_loss_price",
  })
  stopLossPrice: number;

  @Column({
    type: "numeric",
    name: "profit",
    nullable: true,
  })
  profit: number;

  @Column({
    type: "numeric",
    name: "profit_percentage",
    nullable: true,
  })
  profitPercentage: number;

  @Column({
    type: "varchar",
    name: "emotion_at_entry",
  })
  emotionAtEntry: string;

  @Column({
    type: "varchar",
    name: "emotion_at_exit",
    nullable: true,
  })
  emotionAtExit: string;

  @Column({
    type: "varchar",
    name: "emotion_at_stop_loss",
    nullable: true,
  })
  emotionAtStopLoss: string;

  @Column({
    type: "varchar",
    name: "trade_learnings",
    nullable: true,
  })
  tradeLearnings: string;

  @Column({
    type: "varchar",
    name: "trade_mistakes",
    nullable: true,
  })
  tradeMistakes: string;

  @Column({
    type: "numeric",
    name: "trade_rating",
    nullable: true,
  })
  tradeRating: number;
}
