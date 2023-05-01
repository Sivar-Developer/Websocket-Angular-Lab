import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from 'src/app/shared.module'

// layouts & notfound
import { NotFoundComponent } from 'src/app/@kit/pages/404.component'

const COMPONENTS = [NotFoundComponent]

const routes: Routes = [
  {
    path: '',
    redirectTo: 'console',
    pathMatch: 'full',
  },
  {
    path: '',
    children: [
      {
        path: 'home',
        loadChildren: () => import('src/app/pages/general/general.module').then(m => m.GeneralModule),
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'widgets/general',
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      useHash: true,
    }),
  ],
  declarations: [...COMPONENTS],
  exports: [RouterModule],
})
export class AppRoutingModule {}
