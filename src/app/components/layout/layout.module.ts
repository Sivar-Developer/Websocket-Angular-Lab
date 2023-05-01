import { NgModule } from '@angular/core'

import { SharedModule } from 'src/app/shared.module'
import { HeaderComponent } from './Header/header.component'
import { FooterComponent } from './Footer/footer.component'
import { TopbarUserMenuComponent } from './Header/UserMenu/user-menu.component';
import { LayoutMainComponent } from './layout-main/layout-main.component'

const COMPONENTS = [HeaderComponent, FooterComponent, TopbarUserMenuComponent, LayoutMainComponent]

@NgModule({
  imports: [SharedModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutComponentsModule {}
