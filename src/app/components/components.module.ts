import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRepoComponent } from './sales-repo/sales-repo.component';
import { SalesRepoCardComponent } from './sales-repo-card/sales-repo-card.component';
import { SalesRepoDialsComponent } from './sales-repo-dials/sales-repo-dials.component';
import { AppMaterialModule } from '../app-material/app-material.module';



@NgModule({
  declarations: [
    SalesRepoComponent,
    SalesRepoCardComponent,
    SalesRepoDialsComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    SalesRepoComponent,
    SalesRepoDialsComponent,
    SalesRepoCardComponent
  ]
})
export class ComponentsModule { }
