import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { PipesModule } from './pipes/pipes.module'
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode'
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { SkeletonLoaderModule } from './components/ui-elements/skeleton-loader/skeleton-loader.module'

// antd components module
import { AntdModule } from 'src/app/antd.module'

const MODULES = [
  CommonModule,
  RouterModule,
  AntdModule,
  FormsModule,
  PipesModule,
  NgxQRCodeModule,
  NgxScannerQrcodeModule,
  SkeletonLoaderModule,
]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES],
})
export class SharedModule { }
