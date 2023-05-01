import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from '../ui/core.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

  notifications() {
    return this.http.get<any>(this.core.api_url + '/api/notifications')
  }

  notificationsNextPage(url: string) {
    return this.http.get<any>(url)
  }

  notificationsMarkReadAll() {
    return this.http.post<any>(this.core.api_url + '/api/notifications/readall', null)
  }

  notificationMarkRead(notification: string) {
    return this.http.post<any>(this.core.api_url + '/api/notification/read/' + notification, null)
  }
}
