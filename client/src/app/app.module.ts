import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CalculatorComponent } from './components/calculator/calculator.component';
import { ConversionComponent } from './components/conversion/conversion.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'calculator', component: CalculatorComponent},
  {path: 'calculator/conversion', component: ConversionComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CalculatorComponent,
    ConversionComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    DashboardComponent 
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
    AuthService,
    AuthGuard
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
