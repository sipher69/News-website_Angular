import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  constructor(private _http: HttpClient) {}

  //News Api
  newsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=f6ea3841aa8a4a62a849552a27bf1127';

  techNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=f6ea3841aa8a4a62a849552a27bf1127';

  businessNewsApiUrl =
    'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f6ea3841aa8a4a62a849552a27bf1127';

  topHeadlines(): Observable<any> {
    return this._http.get(this.newsApiUrl);
  }

  techNews(): Observable<any> {
    return this._http.get(this.techNewsApiUrl);
  }

  businessNews(): Observable<any> {
    return this._http.get(this.businessNewsApiUrl);
  }
}
