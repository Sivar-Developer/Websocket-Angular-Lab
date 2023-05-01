import { HttpClient, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { map } from 'rxjs/operators';
import { CoreService } from '../ui/core.service';
// import { saveAs } from "file-saver";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  progress: any = 0
  submitLoading: boolean = false

  constructor(
    private http: HttpClient,
    private core: CoreService,
    private message: NzMessageService,
  ) { }

  download(url: string, filename: string) {
    return this.http.post(
      this.core.api_url + '/api/files/download', { url: url }, {
        responseType: 'arraybuffer',
        reportProgress: true,
        observe: 'events'
      }).pipe(map(event => {
        this.submitLoading = true
        if (event.type == HttpEventType.DownloadProgress) {
          this.progress = Math.round(100 / (event.total || 0) * event.loaded)
          console.log(this.progress)
        } else if (event.type == HttpEventType.Response) {
          let blob = new Blob([event.body] ,{type: 'application/octet-stream'});
          // saveAs(blob, filename);
          this.message.create('success', 'Attachment has been downloaded.')
        }
      })
    )
  }

  zipping(slug: string) {
    return this.http.post(this.core.api_url + '/api/files/zipping', { slug: slug })
  }

  qrcodeDetails(slug: string) {
    return this.http.get(this.core.api_url + `/api/qr/details/${slug}`)
  }
}
