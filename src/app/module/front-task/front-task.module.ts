import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { FrontTaskViewComponent } from './components/front-task-view/front-task-view.component';
import { CreateSchemeComponent } from './components/create-scheme/create-scheme.component';
import { ShemesListComponent } from './components/shemes-list/shemes-list.component';


import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from "@angular/material/dialog";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  {
    path: '',
    component: FrontTaskViewComponent
  },
  // {
  //   path: 'add-scheme',
  //   component: CreateSchemeComponent
  // }
  {
    path: "**",
    redirectTo: '/'
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,

    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatRadioModule,
    MatCheckboxModule,



  ],
  declarations: [
    FrontTaskViewComponent,
    ShemesListComponent,
    CreateSchemeComponent

  ],
  exports: [
    FrontTaskViewComponent
  ]
})
export class FrontTaskModule { }
