import { Component } from '@angular/core';
import { DummyApiService } from 'src/app/services/dummy-api.service';

@Component({
  selector: 'app-dummy-api',
  templateUrl: './dummy-api.component.html',
  styleUrls: ['./dummy-api.component.css']
})
export class DummyApiComponent {
  
  Post:any;
  show:boolean=false;
  allData:any[] =[]; 
  num:number=1;

  constructor(private service:DummyApiService){

  }

  getData(){
    this.service.getDummyData(this.num).subscribe((response)=> {
      console.log(response);
      this.Post=response;
      this.show=response;
      

    });
  }
  getAllData(){
    this.service.getAllData().subscribe((response)=> {
          console.log('All data:', response);
          this.Post = response;
          this.allData = response;
          
        }
  
      

      );
  }

}
