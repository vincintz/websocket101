import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsoleComponent } from './components/pages/console/console.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';
import { ConsoleService } from './services/console.service'
import { WebsocketService } from './services/websocket.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConsoleComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  providers: [
    ConsoleService,
    WebsocketService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
