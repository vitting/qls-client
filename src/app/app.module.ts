import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { AngularFireAuthModule } from "angularfire2/auth";
import { environment } from "../environments/environment";
import { NavbarModule } from "./components/navbar/navbar.module";
import { MatchModule } from "./components/match/match.module";
import { AddEventModule } from "./components/admin/add_event/add_event.module";
import { AddMatchModule } from "./components/admin/add_match/add_match.module";
import { DashboardModule } from "./components/admin/dashboard/dashboard.module";
import { LoginModule } from "./components/login/login.module";
import { ScoreModule } from "./components/admin/score/score.module";
import { SignupModule } from "./components/signup/signup.module";
import { HomeModule } from "./components/home/home.module";
import { PopupModule } from "./components/popup/popup.module";
import { ShareModule } from "./components/share/share.module";
import { SettingsModule } from "./components/admin/settings/settings.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NavbarModule,
    PopupModule,
    MatchModule,
    AddEventModule,
    AddMatchModule,
    DashboardModule,
    LoginModule,
    ScoreModule,
    SignupModule,
    HomeModule,
    ShareModule,
    SettingsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
