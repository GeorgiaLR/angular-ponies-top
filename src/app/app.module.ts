import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { PoniesComponent } from './ponies/ponies.component';
import { PonyDetailComponent } from './pony-detail/pony-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    PonyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
