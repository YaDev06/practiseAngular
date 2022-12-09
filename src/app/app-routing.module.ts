import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardContainerComponent } from './card-container/card-container.component';
import { CardFormComponent } from './card-form/card-form.component';
import { HomeComponent } from './home/home.component';
import { CardDisplayComponent } from './card-display/card-display.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add', component: CardFormComponent },
  {
    path: 'cards',
    component: CardContainerComponent,
    children: [{ path: ':id', component: CardDisplayComponent }],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
