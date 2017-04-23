import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ConversionComponent } from './components/conversion/conversion.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'calculator/conversion', component: ConversionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CalculatorComponent,
    ConversionComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [
    ValidateService,
    AuthService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
