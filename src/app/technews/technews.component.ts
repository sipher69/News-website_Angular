import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
})
export class TechnewsComponent implements OnInit{

  constructor(private _services:NewsapiService) {};

  technewsDisplay:any = [];
  ngOnInit(): void {
      this._services.techNews().subscribe((result)=> {
this.technewsDisplay = result.articles;
      })
  }
}
