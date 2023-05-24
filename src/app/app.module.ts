import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BookDataComponent } from './book-data/book-data.component';
import { DetailsComponent } from './details/details.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BookDataComponent,
    DetailsComponent,
    SearchPageComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
