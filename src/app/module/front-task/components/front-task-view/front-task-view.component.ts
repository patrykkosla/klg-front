import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
import { CreateSchemeComponent } from '../create-scheme/create-scheme.component';



@Component({
  selector: 'app-front-task-view',
  templateUrl: './front-task-view.component.html',
  styleUrls: ['./front-task-view.component.scss']
})
export class FrontTaskViewComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }


  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    const dilalogRef = this.dialog.open(CreateSchemeComponent, dialogConfig);
  }



}
