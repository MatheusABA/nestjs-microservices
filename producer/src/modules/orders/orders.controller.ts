import { Body, Controller, Post } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { CreateOrderDTO } from './dto/create-order.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post('create-order')
  createOrder(@Body() order: CreateOrderDTO) {
    return this.ordersService.createOrder(order);
  }
}
