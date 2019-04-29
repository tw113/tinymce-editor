import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  questionText: string = "I agree to the rules and bla bla bla"

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openEditorDialog() {
    this.dialog.open(EditDialogComponent, {
      width: '50%',
      data: {questionText: this.questionText}
    });
  }

}
