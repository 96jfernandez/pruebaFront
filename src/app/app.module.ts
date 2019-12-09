import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { LoginAppComponent } from './login-app/login-app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HomeComponent } from './home/home.component';
import {UserComponent} from './home/UserData/user.component'
import { FormsModule }   from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Route[] = [
  {
    path: '',
    component: LoginAppComponent
  },
  {
    path: 'Home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'user', component: UserComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginAppComponent,
    HomeComponent,
    UserComponent
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot(routes),
     

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
