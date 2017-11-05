import {
    ViewChild,
    Component,
    OnInit,
    Input,
} from '@angular/core';

import { NgModel, NgForm } from '@angular/forms';

@Component({
    selector: 'app-textarea',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.css']
})

export class TextareaComponent implements OnInit {
    @Input('parentForm') parentForm: NgForm;
    @Input() text: string;

    @ViewChild('model') ngModel: NgModel;

    constructor () {}

    ngOnInit() {
        this.parentForm.addControl(this.ngModel);
    }
}
