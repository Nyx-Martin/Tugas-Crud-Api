import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public getSiswa: any;
  public deleteSiswa: any;

  constructor(private http: HttpClient) {}

  ionViewWillEnter() {
    this.getData();
  }

  getData() {
    let data: Observable<any>;
    data = this.http.get(
      'http://localhost/code_in/index.php/api/getdata'
    );
    data.subscribe((result) => {
      this.getSiswa = result;
    });
  }

  public deleteData(id) {
    let data: Observable<any>;
    data = this.http.get(
      'http://localhost/code_in/index.php/api/deletedata/' + id
    );
    data.subscribe((result) => {
      this.deleteSiswa = result;
      console.log(result.status);
      if (result.status === 'Ok') {
        alert('Delete Data Successfully!');
        this.ionViewWillEnter();
      }
    });
  }
}
