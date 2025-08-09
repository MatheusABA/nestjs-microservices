import { IsNumber, IsString } from 'class-validator';

export class CreateOrderDTO {
  @IsString()
  email: string;

  @IsString()
  productId: string;

  @IsNumber()
  quantity: number;
}
