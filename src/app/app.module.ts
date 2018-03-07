import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Nuestro módulo para Routing
import { AppRouter } from './app.route';

// Pipes
import { RoundPipe } from './pipes/round.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterRecetaPipe } from './pipes/filterReceta.pipe';

// Componentes
import { AppComponent } from './app.component';
import { RecetarioComponent } from './recetario/recetario.component';
import { TarjetaComponent } from './recetario/tarjeta/tarjeta.component';
import { PropiedadesComponent } from './propiedades/propiedades.component';
import { Page404Component } from './page404/page404.component';
import { HomeComponent } from './home/home.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RecetaComponent } from './receta/receta.component';
import { ConcesionarioComponent } from './concesionario/concesionario.component';
import { CocheComponent } from './concesionario/coche/coche.component';
import { ListadoComponent } from './concesionario/listado/listado.component';

// Servicios
import { CochesService } from './providers/coches.service';
import { RecetasService } from './providers/recetas.service';
import { FormularioComponent } from './recetario/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    PropiedadesComponent,
    Page404Component,
    HomeComponent,
    UsuarioComponent,
    ConcesionarioComponent,
    CocheComponent,
    ListadoComponent,
    RoundPipe,
    FilterPipe,
    FilterRecetaPipe,
    RecetarioComponent,
    TarjetaComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CochesService, RecetasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
