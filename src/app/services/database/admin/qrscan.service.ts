import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from '../../ui/core.service';

@Injectable({
  providedIn: 'root'
})
export class QrscanService {

  constructor(
    private http: HttpClient,
    private core: CoreService,
  ) { }

  checkinStore(url: string) {
    console.log(url)
    return this.http.post(url, { 'type': 'checkin' })
  }

  checkoutStore(url: string) {
    return this.http.post(url, { 'type': 'checkout' })
  }

  scannedLatest(type: string) {
    return this.http.get(this.core.api_url + `/api/scanned/latest?type=${type}`)
  }
}
