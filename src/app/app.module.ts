import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmpListComponent } from './emp/emp-list/emp-list.component';
import { EmpDetailComponent } from './emp/emp-detail/emp-detail.component';
import { EmpCreateComponent } from './emp/emp-create/emp-create.component';
import { AuthComponent } from './auth/auth.component';
import { authInterceptorProviders } from './interceptors/auth.interceptor';
import { EmpEditComponent } from './emp/emp-edit/emp-edit.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { Product1Component } from './product1/product1.component';
import { Product2Component } from './product2/product2.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

const materialComponents = [
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatCardModule,
  MatTableModule,
  MatButtonModule,
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    WelcomeComponent,
    EmpListComponent,
    EmpDetailComponent,
    EmpCreateComponent,
    AuthComponent,
    EmpEditComponent,
    Product1Component,
    Product2Component,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    materialComponents,
  ],
  providers: [authInterceptorProviders, provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
