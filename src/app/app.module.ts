import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { UserRepository } from 'src/repositories/user.repository';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { TaskCardComponent } from './components/task-card/task-card.component';
import { ModalComponent } from './components/modal-task/modal-task.component';
import { CookieService } from 'src/services/cookie-service.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    TaskCardComponent,
    ModalComponent
  ],
  providers: [
    UserRepository,
    AuthGuardService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
