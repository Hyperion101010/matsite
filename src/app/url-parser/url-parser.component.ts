import { Component, OnInit } from '@angular/core';
import { url_parser_dt } from './url_parser_class';

@Component({
  selector: 'app-url-parser',
  templateUrl: './url-parser.component.html',
  styleUrls: ['./url-parser.component.css']
})
export class UrlParserComponent implements OnInit {

  /*
  urldt : url_parser_dt {
    name : 'naukri website',
    html_data : '<html></html>',
  };


  selectedUrl : url_parser_dt;

  onselect( urldt : url_parser_dt): void{
    this.selectedUrl = urldt;
  }
  */

  constructor() { }

  ngOnInit() {
  }

}
