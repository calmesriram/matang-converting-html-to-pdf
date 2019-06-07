import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule,MatTableModule,MatCardModule, MatInputModule,MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { NavComponent } from './nav/nav.component';
import { MypdfComponent } from './mypdf/mypdf.component';
import { TablegraphicsComponent } from './tablegraphics/tablegraphics.component';
import { TablepdfComponent } from './tablepdf/tablepdf.component';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    LoginComponent,
    NavComponent,
    MypdfComponent,
    TablegraphicsComponent,
    TablepdfComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatCardModule,
    MatTableModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
