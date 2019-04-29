import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  questionText: string
}

@Component({
  selector: 'app-tiny-mce-editor',
  templateUrl: './tiny-mce-editor.component.html',
  styleUrls: ['./tiny-mce-editor.component.scss']
})
export class TinyMceEditorComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TinyMceEditorComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  pluginValues = "advlist autolink lists link image charmap print preview anchor searchreplace wordcount visualblocks code fullscreen insertdatetime media table paste code help wordcount";
  toolbarValues = "insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help";

  ngOnInit() {
    
  }

  onCloseDialog() {
    this.dialogRef.close();
  }
}