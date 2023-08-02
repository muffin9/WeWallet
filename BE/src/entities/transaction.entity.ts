import { IsOptional } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
import { Category } from './category.entity';
import { SubCategory } from './subCategory.entity';

export enum TransactionType {
  INCOME = 'INCOME',
  EXPENDITURE = 'EXPENDITURE',
  TRANSFER = 'TRANSFER',
}

export enum PaymentMethodType {
  CASH = 'CASH',
  CREDIT_CARD = 'CREDIT_CARD',
  CHECK_CARD = 'CHECK_CARD',
  KAKAO_PAY = 'KAKAO_PAY',
  TOSS = 'TOSS',
  PAYCO = 'PAYCO',
  POINT = 'POINT',
  ETC = 'ETC',
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TransactionType,
    default: TransactionType.EXPENDITURE,
  })
  type: TransactionType;

  @Column()
  @IsOptional()
  account: string;

  @Column()
  price: number;

  @Column({
    type: 'enum',
    enum: PaymentMethodType,
    default: PaymentMethodType.CHECK_CARD,
  })
  @IsOptional()
  payment_method: string;

  @Column()
  date: Date;

  @Column()
  @IsOptional()
  memo: string;

  @Column({ type: Date })
  createdAt: Date;

  @Column({ type: Date, nullable: true })
  updatedAt: Date;

  @Column()
  is_budget: boolean;

  @Column()
  is_fixed: boolean;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @ManyToOne(() => SubCategory)
  @JoinColumn({ name: 'subCategory_id' })
  subCategory: SubCategory;
}
