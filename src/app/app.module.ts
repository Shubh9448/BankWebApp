import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { SidenavComponent } from './user/sidenav/sidenav.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDatepickerModule, } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatListModule} from '@angular/material/list';
import { AuthService } from './auth.service';
// import { AuthGuard } from './auth-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AccountDetailsComponent } from './user/account-details/account-details.component';
import {MatDividerModule} from '@angular/material/divider';
import { UserdataService } from './userdata.service';
import { TransactionsComponent } from './user/transactions/transactions.component';
import {MatTableModule} from '@angular/material/table';
import { TransferComponent } from './user/transfer/transfer.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';


const appRoutes = [
  {path: '', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent, children: [
    { path: '', component: LoginComponent },
  ]
  },
  // {path: '', redirectTo: '/home-page', pathMatch: 'full'},
  // {path: 'home-page', component: HomepageComponent, children: [
  //   { path: '', component: HomepageComponent },
  // ]
  // },
  {path: 'register', component: RegisterComponent},
  { path: 'user/transfer', component: TransferComponent },
  { path:  ':user', component : UserComponent, canActivate: [AuthGuard] },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    SidenavComponent,
    ErrorPageComponent,
    AccountDetailsComponent,
    TransactionsComponent,
    TransferComponent,


    AlertComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatListModule,
    MatDividerModule,
    MatTableModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AuthService,
    UserdataService,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
