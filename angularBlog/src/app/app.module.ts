import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TitleComponent } from './components/title/title.component';
import { MainCardComponent } from './components/main-card/main-card.component';
import { SecondaryCardComponent } from './components/secondary-card/secondary-card.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TitleComponent,
    MainCardComponent,
    SecondaryCardComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
