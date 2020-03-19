import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IntermediateService {

  constructor(private http: HttpClient) { }

  postData(formDetails:any){
    console.log('Demo Service is Executing');
   
    const headers = new HttpHeaders()
    .set('Authorization', 'my-auth-token')
    .set('Content-Type', 'application/json');

    this.http.post('http://localhost:3000/api/user-ins', JSON.stringify(formDetails), {
        headers: headers
      })
      .subscribe(data => {
        console.log(data);
      });



        console.log('Demo Service is Terminating');
     }

     tableData:any;

     getData(): any{
       
      return this.http.get('http://localhost:3000/api/user-ret/')
        
    }
    solo:any;
    sendSingleData(value:any){
    this.solo=value;
    console.log(this.solo);
    }
    getSingleData(): any{
       
      return this.http.get('http://localhost:3000/api/user-ret/singleData/'+this.solo);
        
    }


    editData(editDetails:any){
      console.log(editDetails);
      console.log('Demo Service is Executing');
     
      const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
      
      this.http.put('http://localhost:3000/api/user-update/'+this.solo, JSON.stringify(editDetails), {
          headers: headers
        })
        .subscribe(data => {
          console.log(data);
        });
  
  
  
          console.log('Demo Service is Terminating');
       }

       data_id:any;
       onDelete(data:any):any
       {
        
          this.data_id=data;
          console.log(this.data_id);
          return this.http.delete('http://localhost:3000/api/user-delete/'+this.data_id);

       }

       filterName:any;
       filterData(name:any):any{
        this.filterName=name;
        return this.http.get('http://localhost:3000/api/user-filter/'+this.filterName);

       }



    


     

     }



