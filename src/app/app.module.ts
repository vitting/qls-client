import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestIoModule } from "./components/test-io/test-io.module";
import { TestIoAdminModule } from "./components/test-io-admin/test-io-admin.module";
import { TestIoLoginModule } from "./components/test-io-login/test-io-login.module";
import { TestIoNewUserModule } from "./components/test-io-newuser/test-io-newuser.module";
import { TestIoScoreModule } from "./components/test-io-score/test-io-score.module";


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestIoModule,
    TestIoAdminModule,
    TestIoLoginModule,
    TestIoNewUserModule,
    TestIoScoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
