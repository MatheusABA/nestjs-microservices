import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {}

  checkHealth() {
    return 'Endpoint health is OK';
  }
}
