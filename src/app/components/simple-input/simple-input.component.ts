import {
    ViewChild,
    Component,
    OnInit,
    Input,
} from '@angular/core';

import { NgModel, NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-input',
  templateUrl: './simple-input.component.html',
  styleUrls: ['./simple-input.component.css']
})
export class SimpleInputComponent implements OnInit {
    @Input('parentForm') parentForm: NgForm;
    @Input() name: string;
    @Input() required: boolean;
    @Input() placeholder: string;

    inputValue: string;

    @ViewChild('model') ngModel: NgModel;

    constructor() {}

    ngOnInit() {
        this.parentForm.addControl(this.ngModel);
    }
}
