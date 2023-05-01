import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { map } from 'rxjs/internal/operators/map';
import { CoreService } from '../../ui/core.service';
import { saveAs } from "file-saver";

@Injectable({
  providedIn: 'root'
})
export class QrcodeService {

  constructor(
    private http: HttpClient,
    private core: CoreService,
  ) { }

  qrcodesIndex(pageIndex: number, pageSize: number) {
    const params = new HttpParams()
      .set('page', `${pageIndex}`)
      .set('page_size', `${pageSize}`)

    return this.http.get(this.core.api_url + '/api/admin/qr', { params: params })
  }

  qrcodesExportIndex() {
    return this.http.get(this.core.api_url + '/api/admin/qr/all')
  }

  download(qrId?: number) {
    const fileNameToDownload = 'image_qrcode';
    const base64Img = document.getElementsByClassName('qrCodeClass'+qrId)[0].children[0]['src'];
    fetch(base64Img)
      .then(res => res.blob())
      .then((blob) => {
        // IE
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileNameToDownload;
        link.click();
    })
  }

  store(formData: any) {
    return this.http.post<any>(this.core.api_url + '/api/admin/qr/store', formData)
  }

  delete(id: any, formData: { password: string }) {
    return this.http.post(this.core.api_url + `/api/admin/qr/delete/${id}`, formData)
  }

}
