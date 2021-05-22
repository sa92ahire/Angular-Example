import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponenetComponent } from './header-componenet/header-componenet.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import {AppRoutingModule} from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponenetComponent,
    FooterComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
