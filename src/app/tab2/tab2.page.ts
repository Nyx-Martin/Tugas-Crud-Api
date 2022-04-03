import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  public selectionOption: string;
  npm: number;
  nama: string;
  prodi: string;
  jurusan: string;
  kelas: string;
  public postData: any;

  constructor(private http: HttpClient, private toast: ToastController) {}

  submit() {

    if(this.npm != null && this.nama != null && this.jurusan != null && this.prodi != null 
      && this.kelas != null) {

      this.postdata();
      console.log(this.npm,this.nama,this.jurusan,this.prodi,this.kelas);
      this.npm = null;
      this.nama = "";
      this.kelas = "";
      this.jurusan = null;
      this.prodi = null;

      alert('Create Data Successfully');

    }else{
      alert('There are some null datas!')
    }
  }

  postdata(){
    let data: Observable<any>;
    data = this.http.get("http://localhost/code_in/index.php/api/postdata/" 
    + this.npm + '/' + this.nama + '/' + this.jurusan + '/' + this.prodi + '/' + this.kelas);
    data.subscribe(result => {
      this.postData = result;
      console.log(result);
    })

  }

}
