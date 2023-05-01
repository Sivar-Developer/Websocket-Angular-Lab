import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from '../../ui/core.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

  main(from_date?: any, to_date?: any) {
    let params = new HttpParams()
    params = from_date ? params.append('from_date', from_date) : params
    params = to_date ? params.append('to_date', to_date) : params
    return this.http.get(this.core.api_url + `/api/admin/dashboard/main`, { params: params })
  }

  topscans(pageIndex?: any, from_date?: any, to_date?: any) {
    let params = new HttpParams()
    params = pageIndex ? params.append('pageIndex', pageIndex) : params
    params = from_date ? params.append('from_date', from_date) : params
    params = to_date ? params.append('to_date', to_date) : params
    return this.http.get(this.core.api_url + `/api/admin/dashboard/topscans`, { params: params })
  }

}
