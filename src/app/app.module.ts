import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { TopoComponent } from "./topo/topo.component";
import { PainelComponent } from './painel/painel.component';

@NgModule({
    declarations: [
      AppComponent,
      TopoComponent,
      PainelComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
