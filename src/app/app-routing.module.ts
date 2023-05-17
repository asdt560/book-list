import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component'

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
