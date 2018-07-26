import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-space.pipe';
import { StarComponent } from './shared/star.component';
import { ProductService } from './products/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [ProductService]
})
export class AppModule { }
