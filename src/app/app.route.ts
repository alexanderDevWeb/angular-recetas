import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

//componentes
import { RecetaComponent } from "./receta/receta.component";
import { PropiedadesComponent } from "./propiedades/propiedades.component";
import { Page404Component } from "./page404/page404.component";
import { HomeComponent } from "./home/home.component";
import { UsuarioComponent } from "./usuario/usuario.component";

const appRoutes: Routes = [
  { path: "receta", component: RecetaComponent },
  { path: "propiedades", component: PropiedadesComponent },
  { path: "home", component: HomeComponent },
  { path: "usuario", component: UsuarioComponent },
  { path: "", component: HomeComponent },
  { path: "**", component: Page404Component }
];

export const AppRouter = RouterModule.forRoot(appRoutes);
