import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { CreateOrderDTO } from './dto/create-order.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('ORDER_PLACED')
  handleOrderPlaced(@Payload() order: CreateOrderDTO) {
    return this.appService.handleOrderPlaced(order);
  }
}
