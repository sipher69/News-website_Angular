import { Component, OnInit } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-topheadlines',
  templateUrl: './topheadlines.component.html',
})
export class TopheadlinesComponent implements OnInit {
  constructor(private _services: NewsapiService) {}

  topHeadlinesDisplay: any = [];
  ngOnInit(): void {
    this._services.topHeadlines().subscribe((result) => {
      console.log(result);
      this.topHeadlinesDisplay = result.articles;
    });
  }
}
