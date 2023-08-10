import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IsOptional, IsString } from 'class-validator';
import { UserModel } from '@/user/domain/user.model';
import { PROVIDER } from '@/user/domain/vo/provider';

export enum Provider {
  Local,
  Google,
  Kakao,
}

@Entity()
export class User {
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

  @Column({ nullable: true })
  @IsOptional()
  is_admin: boolean;

  @Column({ nullable: true })
  @IsOptional()
  is_active: boolean;

  @Column({ type: 'enum', enum: Provider, default: Provider.Local })
  provider: Provider;

  @Column({ type: Date, name: 'created_at' })
  createdAt: Date;

  @Column({ type: Date, nullable: true, name: 'updated_at' })
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
