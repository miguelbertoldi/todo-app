import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { CategoriaComponent } from "src/categoria/categoria.component";
import { TodoComponent } from "src/todo/todo.component";

const routes: Route[] = [
    {
        path: 'categoria',
        component: CategoriaComponent
    },
    {
        path: 'todo',
        component: TodoComponent
    },

]

@NgModule ({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
    
}