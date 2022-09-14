import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChampionsComponent } from './champions/champions.component';
import { BottomPageComponent } from './bottom-page/bottom-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ChampionsComponent,
    BottomPageComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
