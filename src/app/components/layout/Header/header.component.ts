import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { Router, NavigationStart, NavigationEnd, Event } from '@angular/router'
import * as _ from 'lodash'
import { AuthService } from 'src/app/services/database/auth.service'
import menuData from './config'

@Component({
  selector: 'kit-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activeSubmenu: any = ''
  activeItem: any = ''
  primaryColor: any = '#4b7cf3'
  reset: Boolean = true
  user: any
  profileImageUrl: string
  basketDropdownVisible: boolean = false
  searchDropdownVisible: boolean = false
  searchText: string
  productsSuggestions: any
  brandsSuggestions: any

  @Output() searchTextOutput = new EventEmitter<String>()

  constructor(
    private router: Router,
    public authService: AuthService,
    ) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      this.authService.checkAuth
      this.authService.user
      this.authService.profileImageUrl
    })

    // init theme
    const mode = window.localStorage.getItem('kit.theme')
    if (mode === 'dark') {
      document.querySelector('html').setAttribute('data-kit-theme', 'dark')
    }

    // init primary color
    const color = window.localStorage.getItem('kit.primary')
    if (color) {
      this.selectColor(color)
    }
  }

  switchDarkTheme() {
    const theme = document.querySelector('html').getAttribute('data-kit-theme')
    if (theme === 'dark') {
      document.querySelector('html').setAttribute('data-kit-theme', 'default')
      window.localStorage.setItem('kit.theme', 'default')
    }
    if (theme === 'default') {
      document.querySelector('html').setAttribute('data-kit-theme', 'dark')
      window.localStorage.setItem('kit.theme', 'dark')
    }
  }


  selectColor(color) {
    const styleElement = document.querySelector('#primaryColor')
    if (styleElement) {
      styleElement.remove()
    }
    window.localStorage.setItem('kit.primary', color)
    const body = document.querySelector('body')
    const styleEl = document.createElement('style')
    const css = document.createTextNode(`:root { --kit-color-primary: ${color};}`)
    styleEl.setAttribute('id', 'primaryColor')
    styleEl.appendChild(css)
    body.appendChild(styleEl)
    this.primaryColor = color
    this.reset = false
  }

  resetColor() {
    const defaultColor = '#4b7cf3'
    this.selectColor(defaultColor)
    window.localStorage.removeItem('kit.primary')
    this.primaryColor = defaultColor
    this.reset = true
  }
}
