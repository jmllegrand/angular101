import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ProductsComponent} from "./products.component";
import {ProductsService} from "./products.service";
import {RatingComponent} from "./rating.component";
import {NewsComponent} from './news/news.component';
import {NewsService} from "./news.service";
import {TruncatePipe} from "./truncate.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RatingComponent,
    NewsComponent,
    TruncatePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ProductsService,
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
