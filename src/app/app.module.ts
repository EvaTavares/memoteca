import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CreateThoughtComponent } from './components/pensamentos/create-thought/create-thought.component';
import { FormsModule } from '@angular/forms';
import { ListThoughtComponent } from './components/pensamentos/list-thought/list-thought.component';
import { ThoughtComponent } from './components/pensamentos/thought/thought.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteThoughtComponent } from './components/pensamentos/delete-thought/delete-thought.component';
import { UpdateThoughtComponent } from './components/pensamentos/update-thought/update-thought.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CreateThoughtComponent,
    ListThoughtComponent,
    ThoughtComponent,
    DeleteThoughtComponent,
    UpdateThoughtComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
