export class UpdateProductDto {
  readonly name?: string;
  readonly price?: number;
  readonly currency?: string;
  readonly categories?: string[];
  readonly measurements?: {
    height?: number;
    widgth?: number;
    weight?: number;
  };
}
