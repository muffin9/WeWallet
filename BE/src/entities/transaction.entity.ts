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
  Income,
  Expenditure,
  Transfer,
}

export enum PaymentMethodType {
  Cash,
  CheckCard,
  CreditCard,
  KakaoPay,
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'enum',
    enum: TransactionType,
    default: TransactionType.Expenditure,
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
    default: PaymentMethodType.CheckCard,
  })
  @IsOptional()
  payment_method: string;

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
