import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './core/authentication/authentication.guard';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/dashboard',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        m => m.DashboardModule
      ),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'article',
    loadChildren: () =>
      import('./modules/article/article.module').then(m => m.ArticleModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'collab',
    loadChildren: () =>
      import('./modules/collaborator/collaborator.module').then(m => m.CollaboratorModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then(m => m.AboutModule),
    canActivate: [AuthenticationGuard]
  },
  {
    path: '**',
    redirectTo: '/dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
