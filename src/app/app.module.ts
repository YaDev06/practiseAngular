import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardFormComponent } from './card-form/card-form.component';
import { BgDirective } from './directives/background.directive';
import { clickedCardDirective } from './directives/clicked.directive';
import { IfDirective } from './directives/if.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardFormComponent,
    BgDirective,
    clickedCardDirective,
    IfDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
