import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';

import axios from 'axios';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        NgxIntlTelInputModule,
        BrowserAnimationsModule,
    ],
    declarations: [
        AppComponent,
        SignupComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000';
    }
}
