import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { AuthGuardService } from './auth-guard.service';
import { MyResolverService } from './my-resolver.service';
import { PlaygroundComponent } from './playground/playground.component';
import { TableItemComponent } from './table/table-item/table-item.component';
import { TableComponent } from './table/table.component';
import { UserItemComponent } from './table/user-item/user-item.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: TableComponent },
  {path: 'table', component: TableComponent, children: [{path: ':id', component: TableItemComponent}]},
  {path: 'user/add', component: UserItemComponent},
  {path: 'user/edit/:id', component: UserItemComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'playground', component: PlaygroundComponent, canActivate: [AuthGuardService], resolve: {pic: MyResolverService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
