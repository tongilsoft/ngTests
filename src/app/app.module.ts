import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FootComponent } from './foot.component';
import { AritmethicsComponent } from './math/aritmethics.component';
import { Aritmethics } from './math/aritmethics';
@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, FootComponent, AritmethicsComponent],
  bootstrap: [AppComponent],
  providers: [Aritmethics],
})
export class AppModule {}
