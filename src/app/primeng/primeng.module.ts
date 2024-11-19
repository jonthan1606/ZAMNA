
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CarouselModule } from 'primeng/carousel';
import { ToastModule } from 'primeng/toast';
import { StepperModule } from 'primeng/stepper';
import { SkeletonModule } from 'primeng/skeleton';
import { DropdownModule } from 'primeng/dropdown';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { BreadcrumbModule } from 'primeng/breadcrumb';

const primengComponents: any[] = [
  GalleriaModule,
  ButtonModule,
  TooltipModule,
  InputNumberModule,
  DialogModule,
  SidebarModule,
  RadioButtonModule,
  InputTextareaModule,
  CarouselModule,
  ToastModule,
  StepperModule,
  SkeletonModule,
  DropdownModule,
  TabViewModule,
  AccordionModule,
  CalendarModule,
  CardModule,
  AutoCompleteModule,
  BreadcrumbModule
]


@NgModule({
  declarations: [],
  imports: [
    primengComponents,

  ],
  exports: [
    primengComponents
  ]
})
export class PrimengModule { }
