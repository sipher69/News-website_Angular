import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopheadlinesComponent } from './topheadlines/topheadlines.component';
import { TechnewsComponent } from './technews/technews.component';
import { BusinessComponent } from './business/business.component';

const routes: Routes = [
  { path: '', component: TopheadlinesComponent },
  {path:'tech', component:TechnewsComponent},
  {path:'business', component:BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
