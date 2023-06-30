import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { PropsComponent } from "./pages/propriedades/props.component";
import { TodoComponent } from "./pages/todo/todo.component";
import { AuthGuardService } from "src/services/auth-guard.service";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

const routes: Route[] = [
    {
        path: 'propriedades',
        component: PropsComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'tarefas',
        component: TodoComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [!AuthGuardService]
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: '',
        component: LoginComponent,
    }

]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
