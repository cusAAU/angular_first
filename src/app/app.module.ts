import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// import {CdkTableModule} from '@angular/cdk/table'

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {OwnerComponent} from './component/owner/owner.component';
import {HttpClientModule} from '@angular/common/http';
import { HorsetableComponent } from './component/horsetable/horsetable.component';
import { HorserowComponent } from './component/horsetable/horserow/horserow.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OwnerComponent,
    HorsetableComponent,
    HorserowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
