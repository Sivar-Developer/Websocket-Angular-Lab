import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from 'src/app/@kit/pages/404.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { HomeComponent } from './home/home.component';

// Components

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home' },
    canActivateChild: [AuthGuard],
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { title: '404 | Not Found' },
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule { }
