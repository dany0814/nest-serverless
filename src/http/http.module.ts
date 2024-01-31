import { HttpModule, HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { CatsService } from './http.service';

@Module({
  imports: [HttpModule],
  providers: [CatsService],
})
export class CatsModule {
  constructor(private readonly httpService: HttpService) {}

  findAll(): Observable<AxiosResponse<any>> {
    return this.httpService.get('http://localhost:3000/cats');
  }
}
