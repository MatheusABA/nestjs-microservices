import { Inject, Injectable } from '@nestjs/common';
import { CreateOrderDTO } from './dto/create-order.dto';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  constructor(@Inject('ORDERS_SERVICE') private rabbitMQClient: ClientProxy) {}

  createOrder(order: CreateOrderDTO) {
    this.rabbitMQClient.emit('ORDER_PLACED', order);

    return {
      status: 'success',
      message: 'Order placed successfully',
    };
  }
}
