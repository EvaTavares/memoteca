import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtComponent } from './components/pensamentos/create-thought/create-thought.component';
import { FormsModule } from '@angular/forms';
import { ListThoughtComponent } from './components/pensamentos/list-thought/list-thought.component';
import { CardThoughtComponent } from './components/pensamentos/card-thought/card-thought.component';
import { ThoughtComponent } from './components/pensamentos/thought/thought.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ListThoughtComponent,
    CardThoughtComponent,
    ThoughtComponent,
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
