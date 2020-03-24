import { Component, OnInit } from '@angular/core';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-ponies',
  templateUrl: './ponies.component.html',
  styleUrls: ['./ponies.component.css']
})

export class PoniesComponent implements OnInit {

  ponies: Pony[];
  selectedPony: Pony;

  constructor(private ponyService: PonyService, private messageService: MessageService) { }

  ngOnInit() {
    this.getPonies();
  }

  onSelect(pony: Pony): void {
    this.selectedPony = pony;
    this.messageService.add(`PonyService: Selected pony id=${pony.id}`);
  }

  getPonies(): void {
    this.ponyService.getPonies()
      .subscribe(ponies => this.ponies = ponies);
  }

}
