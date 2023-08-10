import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'total_price',
    default: 0,
  })
  totalPrice: number;

  @Column({
    name: 'use_price',
    default: 0,
  })
  usePrice: number;

  @Column()
  month: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
