import { Component, OnInit,ElementRef ,ViewChild} from '@angular/core';
import * as jspdf from 'jspdf';   
import html2canvas from 'html2canvas';  


@Component({
  selector: 'app-tablegraphics',
  templateUrl: './tablegraphics.component.html',
  styleUrls: ['./tablegraphics.component.css']
})
export class TablegraphicsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public captureScreen()  
  {  
    var data = document.getElementById('contentToConvert');  
    html2canvas(data).then(canvas => {  
      // Few necessary setting options  
      var imgWidth = 208;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  
  
      const contentDataURL = canvas.toDataURL('image/png')  
      let pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF  
      var position = 0;  
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
      pdf.save('MYPdf.pdf'); // Generated PDF   
    });  
  }
  // jsDF has syntax which decides its layout when it Generates pdf
//   new JsPDF(  
//     Orientation, // Landscape or Portrait  
  
//     unit, // mm, cm, in  
  
//     format // A2, A4 etc  
// );  
}
