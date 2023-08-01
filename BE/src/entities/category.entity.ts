import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image_url: string;

  public toModel() {
    return {
      id: this.id,
      name: this.name,
      image_url: this.image_url,
    };
  }
}
