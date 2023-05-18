import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component'
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    title: 'Main Page'
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Book Details'
  },
  {
    path: 'search',
    component: SearchPageComponent,
    title: 'Book Search'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
