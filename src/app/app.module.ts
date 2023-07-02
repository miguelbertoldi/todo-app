import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PropsComponent } from './pages/propriedades/props.component';
import { TodoComponent } from './pages/home/home.component';
import { UserRepository } from 'src/repositories/user.repository';
import { AuthGuardService } from 'src/services/auth-guard.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { AuthService } from '../services/auth.service';
import { RegisterComponent } from './pages/register/register.component';
import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    PropsComponent,
    TodoComponent,
    LoginComponent,
    RegisterComponent,
    TaskCardComponent
  ],
  providers: [
    UserRepository,
    AuthGuardService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
