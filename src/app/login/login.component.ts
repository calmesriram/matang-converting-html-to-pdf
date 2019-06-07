import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild("content") content:ElementRef;
  public downloadpdf(){
 
     let doc = new jsPDF();

     let specialElementHandler ={
       '#editor':function(element,renderer){
         return true;
       }
     };

     let content = this.content.nativeElement;

     doc.fromHTML(content.innerHTML,15,15,{
       'width':190,
       'elementHandlers':specialElementHandler
     })

     doc.save('test.pdf')
  }
}
