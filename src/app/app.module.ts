import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { LoginPageComponent } from './login-page/login-page.component';
import {RouterModule, Routes} from "@angular/router";
import {AF} from "./providers/af";
import { HomePageComponent } from './home-page/home-page.component';

// Must export the config
export const firebaseConfig = {
  apiKey: "AIzaSyBGItN6-JFJS9iAo7TpzROtvYWfO8Qj8vU",
  authDomain: "angfirchat.firebaseapp.com",
  databaseURL: "https://angfirchat.firebaseio.com",
  projectId: "angfirchat",
  storageBucket: "angfirchat.appspot.com",
  messagingSenderId: "959603726436"
};

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'login', component: LoginPageComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes)
  ],
  declarations: [ AppComponent, LoginPageComponent, HomePageComponent ],
  bootstrap: [ AppComponent ],
  providers: [AF]
})
export class AppModule {}