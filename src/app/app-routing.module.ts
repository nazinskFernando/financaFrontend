import { ExtratoComponent } from './Pages/extrato/extrato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/extrato',
    pathMatch: 'full',
  },
  { path: 'extrato', component: ExtratoComponent },
  { path: '', redirectTo: '/extrato', pathMatch: 'full' },
  { path: '**', redirectTo: '/extrato', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
