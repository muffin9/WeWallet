import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'session' })
export class SessionEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  refreshToken: string;

  @Column()
  email: string;
}
