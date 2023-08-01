export type SubCategoryConstructorInput = {
  id: number;
  name: string;
  category_id: number;
};

export class SubCategoryModel {
  private readonly id: number;
  private name: string;
  private category_id: number;

  constructor(input: SubCategoryConstructorInput) {
    this.id = input.id;
    this.name = input.name;
    this.category_id = input.category_id;
  }

  public getProperties() {
    return {
      id: this.id,
      name: this.name,
      category_id: this.category_id,
    };
  }
}
