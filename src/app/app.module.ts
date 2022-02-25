import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { PhotoBlockComponent } from './photo-block/photo-block.component';
import { FormsModule } from '@angular/forms';
import { Task2Component } from './task2/task2.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    PhotoBlockComponent,
    Task2Component
  ],
  imports: [  
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
