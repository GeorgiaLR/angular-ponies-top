import { Component, OnInit } from '@angular/core';
import { Pony } from '../pony';
import { PonyService } from '../pony.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  ponies: Pony[] = [];

  constructor(private ponyService: PonyService) { }

  ngOnInit() {
    this.getPonies();
  }

  getPonies(): void {
    this.ponyService.getPonies()
      .subscribe(ponies => this.ponies = ponies.slice(1, 5));
  }
}