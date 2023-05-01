import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { CoreService } from '../ui/core.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

  findByUsername(username: string) {
    return this.http.get<any>(this.core.api_url + '/api/user/profile/find/' + username)
  }

  accountSettingsIndex() {
    return this.http.get<any>(this.core.api_url + '/api/account/settings')
  }

  sessionsIndex() {
    return this.http.get<any>(this.core.api_url + '/api/user/passport/tokens')
  }

  sessionsRevoke(value: { password: string }) {
    return this.http.post<any>(this.core.api_url + '/api/user/passport/tokens/revoke', value)
  }

  sessionRevoke(value: { tokenId: string }) {
    return this.http.post<any>(this.core.api_url + '/api/user/passport/token/revoke', value)
  }

  accountSettingsStore(value: any) {
    return this.http.post<any>(this.core.api_url + '/api/account/settings/store', value)
  }

  registerProfile(value: { phone_number: string, birthdate: string, gender: string, governorate: string }) {
    return this.http.patch(this.core.api_url + '/api/user/profile/update', value)
  }

  accountUpdate(value: { first_name: string, last_name: string, bio: string, url: string, gender: string, governorate: string, location: string }) {
    return this.http.patch(this.core.api_url + '/api/user/account/update', value)
  }

  userAccountSettings(value: { email: string, username: string}) {
    return this.http.patch(this.core.api_url + '/api/user/account/settings', value)
  }

  changePassword(value: { current_password: string, new_password: string }) {
    return this.http.patch(this.core.api_url + '/api/user/password/update', value)
  }

  avatarUpload(formData: any) {
    return this.http.post<any>(this.core.api_url + '/api/profile/avatar/upload', formData)
  }
}
