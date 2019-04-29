import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TinyMceEditorComponent } from './tiny-mce-editor/tiny-mce-editor.component';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  @Input() submittedText: string;

  questionText = "I agree to the rules and bla bla bla";

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openEditorDialog() {
    this.dialog.open(TinyMceEditorComponent, {
      width: '50%',
      data: {questionText: this.questionText}
    });
  }

}
