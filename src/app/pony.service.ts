import { Injectable } from '@angular/core';
import { Pony } from './pony';
import { PONIES } from './mock-ponies';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PonyService {

  constructor(private messageService: MessageService) { }

  getPonies(): Observable<Pony[]> {
    this.messageService.add('PonyService: fetched ponies');
    return of(PONIES);
  }
}
