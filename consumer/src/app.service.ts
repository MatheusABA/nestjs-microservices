import { Injectable } from '@nestjs/common';
import { CreateOrderDTO } from './dto/create-order.dto';

@Injectable()
export class AppService {
  handleOrderPlaced(order: CreateOrderDTO) {
    console.log(`Received a new order from customer : ${order.email}`);
  }
}
