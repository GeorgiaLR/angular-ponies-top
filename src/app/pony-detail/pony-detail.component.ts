import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { PonyService }  from '../pony.service';
import { Pony } from '../pony';

@Component({
  selector: 'app-pony-detail',
  templateUrl: './pony-detail.component.html',
  styleUrls: ['./pony-detail.component.css']
})

export class PonyDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private ponyService: PonyService,
    private location: Location) { }
  
  @Input() pony: Pony;

  ngOnInit() {
  }

}
