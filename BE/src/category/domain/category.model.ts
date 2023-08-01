export type CategoryConstructorInput = {
  id: number;
  name: string;
  image_url: string;
};

export class CategoryModel {
  private readonly id: number;
  private name: string;
  private image_url: string;

  constructor(input: CategoryConstructorInput) {
    this.id = input.id;
    this.name = input.name;
    this.image_url = input.image_url;
  }

  public getProperties() {
    return {
      id: this.id,
      name: this.name,
      image_url: this.image_url,
    };
  }
}
