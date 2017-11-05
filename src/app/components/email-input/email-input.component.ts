
import {
    ViewChild,
    Component,
    OnInit,
    Input,
} from '@angular/core';

import {
    FormControl,
    Validators,
    NgModel,
    NgForm
} from '@angular/forms';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
    selector: 'app-email-input',
    templateUrl: './email-input.component.html',
    styleUrls: ['./email-input.component.css']
})

export class EmailInputComponent implements OnInit {
    @Input('parentForm') parentForm: NgForm;

    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)
    ]);

    inputValue: string;

    @ViewChild('inputValue') ngModel: NgModel;

    constructor() {}

    ngOnInit() {
        this.parentForm.addControl(this.ngModel);
    }

}
