import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import 'hammerjs';

import { BoardComponent } from './board/board.component';
import { AppComponent } from './app.component';

import { MaterialModule } from './shared/material.module';
import { SimpleInputComponent } from './components/simple-input/simple-input.component';
import { EmailInputComponent } from './components/email-input/email-input.component';
import { ModalComponent } from './components/modal/modal.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { HintInputComponent } from './components/hint-input/hint-input.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SimpleInputComponent,
    EmailInputComponent,
    ModalComponent,
    TextareaComponent,
    HintInputComponent
  ],
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    BrowserModule,
    FormsModule
  ],
  entryComponents: [
    ModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
