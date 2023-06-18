import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { PropsComponent } from './propriedades/props.component';
import { TodoComponent } from './todo/todo.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    PropsComponent,
    TodoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
