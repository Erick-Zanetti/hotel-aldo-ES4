import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CategoriaModule } from './categoria/categoria.module';
import { ApartamentoModule } from './apartamento/apartamento.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      HttpClientModule,
      BrowserModule,
      DashboardModule,
      CategoriaModule,
      ApartamentoModule,
      MaterialModule,
      BrowserAnimationsModule,
      AppRoutingModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
