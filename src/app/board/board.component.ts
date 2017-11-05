import { Component, OnInit, ViewChild, } from '@angular/core';

import {
    NgForm,
    NgModel,
    Validators,
    FormControl
} from '@angular/forms';

import { MatDialog } from '@angular/material';
import { ModalComponent } from '../components/modal/modal.component';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {
    @ViewChild('boardForm') boardForm: NgForm;

    favoriteSeason: string;
    selectedValue: string;
    messageValue: string;
    slideToggle: boolean;
    sliderValue: number;
    telValue: string;

    constructor(public dialog: MatDialog) {}

    foods = [
        {value: 'steak-0', viewValue: 'Steak'},
        {value: 'pizza-1', viewValue: 'Pizza'},
        {value: 'tacos-2', viewValue: 'Tacos'}
    ];

    seasons = [
        'Winter',
        'Spring',
        'Summer',
        'Autumn',
    ];

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)
    ]);

    openDialog (formData) {
        this.dialog.open(ModalComponent, {
            data: formData
        });
    }

    ngOnInit () {}

    onSubmit(form: NgForm) {
        const status = form.status;
        const isValid = status === 'VALID';

        if (isValid) {
            this.openDialog(form.value);
        }

        console.log('Collected Data:: ', form.value);
    }
}
