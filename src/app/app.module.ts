import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server';
import { ServersComponent } from './servers';
import { WarningAlert } from './WarningAlert';
import { SuccessAlert } from './SuccessAlert';
import { PracticingDatabindingComponent } from './practicing-databinding/practicing-databinding.component';
import { PracticingDirectivesComponent } from './practicing-directives/practicing-directives.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlert,
    SuccessAlert,
    PracticingDatabindingComponent,
    PracticingDirectivesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
