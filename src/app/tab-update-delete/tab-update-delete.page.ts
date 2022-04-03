import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-update-delete',
  templateUrl: './tab-update-delete.page.html',
  styleUrls: ['./tab-update-delete.page.scss'],
})
export class UpdateordeletePage implements OnInit {
  id: any;
  npm: string;
  nama: string;
  kelas: string;
  jurusan: string;
  prodi: string;
  public getSiswa: any;
  public updateSiswa: any;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.route.params.subscribe((param: any) => {
      this.id = param.id;
      this.getDataWhere(this.id);
    });
  }

  getDataWhere(id) {
    let data: Observable<any>;
    data = this.http.get(
      'http://localhost/code_in/index.php/api/getdatawhere/' + id
    );
    data.subscribe((result) => {
      this.getSiswa = result;
      this.npm = this.getSiswa[0].npm;
      this.nama = this.getSiswa[0].name;
      this.jurusan = this.getSiswa[0].major;
      this.prodi = this.getSiswa[0].studyprogram;
      this.kelas = this.getSiswa[0].class;
    });
  }

  submit() {
    if (
      this.npm != null &&
      this.nama != null &&
      this.jurusan != null &&
      this.prodi != null &&
      this.kelas != null
    ) {
      this.updateData(this.id);
      console.log(
        this.npm,
        this.nama,
        this.jurusan,
        this.prodi,
        this.kelas
      );
      alert('Update Data Successfully');
    } else {
      alert('There are some null datas!');
    }
  }
  updateData(idA) {
    let data: Observable<any>;
    data = this.http.get(
      'http://localhost/code_in/index.php/api/putdata/' +
        idA +
        '/' +
        this.npm +
        '/' +
        this.nama +
        '/' +
        this.jurusan +
        '/' +
        this.prodi +
        '/' +
        this.kelas+
        '/' 
    data.subscribe((result) => {
      this.updateSiswa = result;
      console.log(result);
    });
  }
  ngOnInit() {}
}

