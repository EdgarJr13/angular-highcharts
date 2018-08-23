import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartModule } from 'angular-highcharts';
import { AppComponent } from './app.component';
import { SimplechartComponent } from './components/chart-demo/simplechart/simplechart.component';

@NgModule({
  declarations: [
    AppComponent,
    SimplechartComponent
  ],
  imports: [
    BrowserModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
