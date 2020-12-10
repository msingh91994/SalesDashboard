import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AppMaterialModule } from '../app-material/app-material.module';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    AppMaterialModule,
    ComponentsModule
  ]
})
export class DashboardModule { }
