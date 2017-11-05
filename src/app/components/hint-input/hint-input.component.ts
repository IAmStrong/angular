import {
    ViewChild,
    Component,
    OnInit,
    Input,
} from '@angular/core';

import { NgModel, NgForm } from '@angular/forms';

@Component({
    selector: 'app-hint-input',
    templateUrl: './hint-input.component.html',
    styleUrls: ['./hint-input.component.css']
})
export class HintInputComponent implements OnInit {
    @Input('parentForm') parentForm: NgForm;
    @Input() code: string;

    @ViewChild('model') ngModel: NgModel;

    constructor () {}

    ngOnInit() {
        this.parentForm.addControl(this.ngModel);
    }
}
