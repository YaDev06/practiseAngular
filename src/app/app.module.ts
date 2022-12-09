import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { IfDirective } from './directives/if.directive';
import { BgDirective } from './directives/background.directive';
import { clickedCardDirective } from './directives/clicked.directive';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardComponent } from './card/card.component';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardDisplayComponent } from './card-display/card-display.component';
import { CardFormComponent } from './card-form/card-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardFormComponent,
    BgDirective,
    clickedCardDirective,
    IfDirective,
    CardContainerComponent,
    NavbarComponent,
    HomeComponent,
    CardDisplayComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
