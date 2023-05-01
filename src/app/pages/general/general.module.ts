import { NgModule } from '@angular/core';

// Modules
import { SharedModule } from 'src/app/shared.module';
import { GeneralRoutingModule } from './general-routing.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { SkeletonLoaderModule } from 'src/app/components/ui-elements/skeleton-loader/skeleton-loader.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const COMPONENTS = [
  HomeComponent,
  NotFoundComponent,
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule , GeneralRoutingModule, NgxMasonryModule, SkeletonLoaderModule, FormsModule, ReactiveFormsModule, NgbModule
  ]
})
export class GeneralModule { }
