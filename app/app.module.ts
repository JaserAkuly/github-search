import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProfileComponent }  from './components/profile.components';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, ProfileComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
