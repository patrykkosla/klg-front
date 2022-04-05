import { Component, OnInit } from '@angular/core';

import { FormArray } from '@angular/forms';
import { SchemesService } from '../../services/schemes.service';
import { SelectInterface, CheckBoxBoolen } from '../types/select.interface';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: 'app-create-scheme',
  templateUrl: './create-scheme.component.html',
  styleUrls: ['./create-scheme.component.scss']
})

export class CreateSchemeComponent implements OnInit {

  triggerSchemesForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private schemesSerivises: SchemesService,
    private dialogRef: MatDialogRef<CreateSchemeComponent>
  ) { }

  ngOnInit(): void {
    this.formInicialization();
  }


  onIsServieTriggerCHange(event: any): void {
    this.triggerSchemesForm.controls['servicetrigger'].reset();
    if (event.checked == true) {
      this.triggerSchemesForm.controls['servicetrigger'].enable();
    } else {
      this.triggerSchemesForm.controls['servicetrigger'].disable();
    }
  }

  onChangeEventFunc(radio: String, event: any) {

  }
  formInicialization(): void {
    this.triggerSchemesForm = this.fb.group({
      basicName: ["", Validators.required],
      category: ["", Validators.required],
      dataknow: [""],
      isservicetrigger: [""],
      servicetrigger: [""],
      constrainName: [""],
      customValueKnow: [""],
      deadlinInfo: ["", Validators.required],
      selectedProcesinReference: [""],
      chekboxTestName: new FormArray([]),
      description: [""]
    });
    this.triggerSchemesForm.controls['servicetrigger'].disable();
  }

  radioArray: CheckBoxBoolen[] = [
    { name: "purma", value: false },
    { name: "nntm", value: false },
    { name: "pdbtm", value: true },
    { name: "ssart", value: true }
  ]

  closeForm(): void {
    this.triggerSchemesForm.reset();
    this.dialogRef.close();
  }
  saveForm(): void { }

  serviceTriggerOpions = ["trig trag", "trog trig", "trig trog tock"];

  trrigerName: any[] = [
    { name: "bo tak" },
    { name: "bo nie" },
    { name: "a jednak tak" },
  ];

  triggerDataKnowList = ["Lawful", "Service Category", "Item"];
  selectOpionsLis: SelectInterface[] = this.schemesSerivises.getSelectListOptions();
}
