import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {AppRoutingModule} from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TestIoModule } from "./components/test-io/test-io.module";
import { TestIoAdminModule } from "./components/test-io-admin/test-io-admin.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TestIoModule,
    TestIoAdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
