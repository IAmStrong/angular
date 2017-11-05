import {
  MatSlideToggleModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatSliderModule,
  MatSelectModule,
  MatButtonModule,
  MatDialogModule,
  MatChipsModule,
  MatRadioModule,
  MatInputModule
} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
    imports: [
      MatSlideToggleModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatSliderModule,
      MatSelectModule,
      MatButtonModule,
      MatDialogModule,
      MatChipsModule,
      MatRadioModule,
      MatInputModule
    ],
    exports: [
      MatSlideToggleModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatToolbarModule,
      MatSliderModule,
      MatSelectModule,
      MatButtonModule,
      MatDialogModule,
      MatChipsModule,
      MatRadioModule,
      MatInputModule
    ]
})
export class MaterialModule {}
