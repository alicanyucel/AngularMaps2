import { BrowserModule } from '@angular/platform-browser';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
 
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCf1cCO8spsop4q8K7UNPQZ4gKzBpRsJJU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
