import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $: any;
@Component({
  selector: 'app-tablepdf',
  templateUrl: './tablepdf.component.html',
  styleUrls: ['./tablepdf.component.css']
})
export class TablepdfComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  //   $(document).ready(function() {
  //     $('#example').DataTable();
  // } );
  $(document).ready(function() {
    var table = $('#example').DataTable( {
        lengthChange: false,
        buttons: [ 'copy', 'excel', 'pdf', 'colvis' ]
    } );
 
    table.buttons().container()
        .appendTo( '#example_wrapper .col-md-6:eq(0)' );
} );
  }

}
