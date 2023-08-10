import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({
    name: 'image_url',
  })
  imageUrl: string;

  public toModel() {
    return {
      id: this.id,
      name: this.name,
      imageUrl: this.imageUrl,
    };
  }
}
