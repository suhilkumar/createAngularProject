import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
const styleModule: any = [
  MatSlideToggleModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    styleModule
  ],
  exports: [
    styleModule
  ]
})
export class MaterialModule { }
