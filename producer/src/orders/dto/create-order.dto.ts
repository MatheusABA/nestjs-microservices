export class CreateOrderDTO {
  constructor(
    public email: string,
    public readonly productId: string,
    public readonly quantity: number,
  ) {}
}
