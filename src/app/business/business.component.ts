import { Component } from '@angular/core';
import { NewsapiService } from '../service/newsapi.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
})
export class BusinessComponent {
  constructor(private _services: NewsapiService) {}

  businessnewsDisplay: any = [];
  ngOnInit(): void {
    this._services.techNews().subscribe((result) => {
      this.businessnewsDisplay = result.articles;
    });
  }
}
