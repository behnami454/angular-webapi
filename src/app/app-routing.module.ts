import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesComponent } from './components/articles/articles.component';
import { AdminComponent } from './components/admin/admin.component';
import { CupsComponent } from './components/cups/cups.component';
import { ContactComponent } from './components/contact/contact.component';
import { LegendsComponent } from './components/legends/legends.component';
import { StadiumComponent } from './components/stadium/stadium.component';
import { HomeComponent } from './components/Home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/admin/register/register.component';
import { LoginComponent } from './components/admin/login/login.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { ArticleEditComponent } from './components/admin-edit/article-edit/article-edit.component';
import { ContactEditComponent } from './components/admin-edit/contact-edit/contact-edit.component';
import { CupsEditComponent } from './components/admin-edit/cups-edit/cups-edit.component';
import { LegendsEditComponent } from './components/admin-edit/legends-edit/legends-edit.component';
import { StadiumEditComponent } from './components/admin-edit/stadium-edit/stadium-edit.component';
import { AuthGuard } from './auth/auth.guard';




const routes: Routes = [

  {path: '' , component:HomeComponent},
  {path: 'articles' , component:ArticlesComponent},
  {path: 'admin' , component:AdminComponent},
  {path: 'cups' , component: CupsComponent},
  {path: 'contact' , component:ContactComponent},
  {path: 'stadium' , component:StadiumComponent},
  {path: 'legends' , component: LegendsComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'adminEdit/contactEdit' , component:ContactEditComponent},
  {path: 'adminEdit/stadiumEdit' , component: StadiumEditComponent},
  {path: 'adminEdit/cupsEdit' , component: CupsEditComponent},
  {path: 'adminEdit/legendsEdit' , component: LegendsEditComponent},
  {path: 'adminEdit/articleEdit' , component: ArticleEditComponent},
  {path: 'adminEdit',component:AdminEditComponent,canActivate:[AuthGuard]},
  {path: '**' , component: NotfoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
