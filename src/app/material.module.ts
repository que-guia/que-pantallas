import { NgModule } from '@angular/core';
import { MatToolbarModule, MatCardModule } from '@angular/material';

const material = [MatToolbarModule, MatCardModule];

@NgModule({
  imports: material,
  exports: material
})
export class MaterialModule { }
