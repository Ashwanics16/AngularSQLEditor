import { Component, OnInit, VERSION, Version } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = 'Angular SQLEditor' +  VERSION.major;
  


  // npm install @ctrl/ngx-codemirror codemirror@5
  /**
   *
   */
  query: string;
  constructor() {
  }



  codeMirrorOptions: any = {
    mode: "text/x-mysql",
    indentWithTabs: true,
    smartIndent: true,
    lineNumbers: true,
    lineWrapping: false,
    extraKeys: { "Ctrl-Space": "autocomplete" },
    gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };


  ngOnInit() {
  }


  setEditorContent(event: any) {
    // console.log(event, typeof event);
    console.log(this.query);
  }
}
