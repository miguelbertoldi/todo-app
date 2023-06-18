import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { PropsComponent } from "./propriedades/props.component";
import { TodoComponent } from "./todo/todo.component";

const routes: Route[] = [
    {
        path: 'propriedades',
        component: PropsComponent
    },
    {
        path: 'tarefas',
        component: TodoComponent
    },
    {
        path: '',
        component: TodoComponent
    }

]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
