import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from './shared-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedMaterialModule,
    FlexLayoutModule
  ],
  declarations: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedMaterialModule
  ]
})
export class SharedModule { }
