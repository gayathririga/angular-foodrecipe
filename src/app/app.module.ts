import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    NgbModule  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    HeaderComponent, RecipesComponent ],
  bootstrap:    [ 
    AppComponent ]
})
export class AppModule { }
