import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsOptional, IsString } from 'class-validator';
import { UserModel } from '@/user/domain/user.model';
import { PROVIDER } from '@/user/domain/vo/provider';

export enum Provider {
  Local,
  Google,
  Kakao,
}

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickname: string;

  @Column()
  email: string;

  @Column({ nullable: true })
  @IsOptional()
  @IsString()
  password: string;

  @Column({
    default: false,
  })
  @IsOptional()
  is_admin: boolean;

  @Column({
    default: false,
  })
  @IsOptional()
  is_active: boolean;

  @Column()
  provider: string;

  @Column({ type: Date })
  createdAt: Date;

  @Column({ type: Date, nullable: true })
  updatedAt: Date;

  public toModel() {
    return new UserModel({
      id: this.id,
      provider: PROVIDER[this.provider],
      email: this.email,
      password: this.password,
      nickname: this.nickname,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    });
  }
}
