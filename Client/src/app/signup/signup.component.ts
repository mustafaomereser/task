import { Component } from '@angular/core';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input';

import { Signup } from '../signup';
import axios from 'axios';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css',
})
export class SignupComponent {

    separateDialCode = true;
    SearchCountryField = SearchCountryField;
    CountryISO = CountryISO;
    PhoneNumberFormat = PhoneNumberFormat;
    preferredCountries: CountryISO[] = [CountryISO.UnitedStates, CountryISO.UnitedKingdom];


    show_alert: string[] = [];
    submitted = false;
    model = new Signup('', '', '', '', '');

    onSubmit(form: any) {
        this.submitted = true;
        axios.post('/sign-up', {
            username: form.controls.username.value,
            email: form.controls.email.value,
            phone: form.controls.phone.value.e164Number,
            password: form.controls.password.value,
            birthdate: form.controls.birthdate.value,
        }).then(res => res.data).then(res => {
            this.show_alert = [['danger', 'success'][res.status], res.message];
            this.submitted = false;
        });
    }
}
