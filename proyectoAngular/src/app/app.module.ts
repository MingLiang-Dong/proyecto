import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule, Routes } from '@angular/router';
import { UsuariosService } from './usuarios.service';
import { ResgistrarComponent } from './resgistrar/resgistrar.component';
import { LibrosComponent } from './libros/libros.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { FooterComponent } from './footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriasComponent } from './categorias/categorias.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registrar', component: ResgistrarComponent },
  { path: 'Home', component: LibrosComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'categoria', component: CategoriasComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ResgistrarComponent,
    LibrosComponent,
    MenuComponent,
    ResgistrarComponent,
    LibrosComponent,
    LoginComponent,
    FooterComponent,
    AdminComponent,
    CategoriasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
