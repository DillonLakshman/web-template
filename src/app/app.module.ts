import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardsFullSectionComponent } from './cards-full-section/cards-full-section.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BodySectionComponent } from './body-section/body-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardsFullSectionComponent,
    FooterComponent,
    HeaderComponent,
    BodySectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
