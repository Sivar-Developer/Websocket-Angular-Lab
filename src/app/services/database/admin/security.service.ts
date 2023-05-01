import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CoreService } from '../../ui/core.service';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  constructor(
    private http: HttpClient,
    private core: CoreService
  ) { }

  rolesIndex() {
    return this.http.get(this.core.api_url + '/api/admin/roles')
  }

  roleCreate() {
    return this.http.get(this.core.api_url + '/api/admin/roles/create')
  }

  roleShow(roleId: any) {
    return this.http.get(this.core.api_url + `/api/admin/roles/${roleId}`)
  }

  roleEdit(roleId: any) {
    return this.http.get(this.core.api_url + `/api/admin/roles/${roleId}/edit`)
  }

  roleStore(value: { name: string, permission: string[] }) {
    return this.http.post(this.core.api_url + '/api/admin/roles', value)
  }

  roleUpdate(roleId: any, value: { name: string, permission: string[] }) {
    return this.http.patch(this.core.api_url + `/api/admin/roles/${roleId}`, value)
  }

  roleDelete(roleId: any, password: string) {
    return this.http.post(this.core.api_url + `/api/admin/roles/${roleId}/delete`, { password: password })
  }

  assignUsersIndex(index: number) {
    return this.http.get(this.core.api_url + `/api/admin/roles/assign/user?page=${index}`)
  }

  assignUser(userId: number, selectedRoles: any) {
    return this.http.patch(this.core.api_url + `/api/admin/roles/assign/user/${userId}`, { roles: selectedRoles })
  }
}
