import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tiny-mce-editor',
  templateUrl: './tiny-mce-editor.component.html',
  styleUrls: ['./tiny-mce-editor.component.scss']
})
export class TinyMceEditorComponent implements OnInit {

  @Input() question: string;

  constructor() { }

  pluginValues = "advlist autolink lists link image charmap print preview anchor searchreplace wordcount visualblocks code fullscreen insertdatetime media table paste code help wordcount";
  toolbarValues = "insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help";
  initVal = this.question;

  ngOnInit() {
    
  }
}