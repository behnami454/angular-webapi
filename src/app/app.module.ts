import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/Home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AdminComponent } from './components/admin/admin.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CupsComponent } from './components/cups/cups.component';
import { LegendsComponent } from './components/legends/legends.component';
import { StadiumComponent } from './components/stadium/stadium.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ArticleService } from './services/article.service';
import { AdminService } from './services/admin.service';
import { ContactService } from './services/contact.service';
import { CupsService } from './services/cups.service';
import { LegendsService } from './services/legends.service';
import { StadiumService } from './services/stadium.service';
import { LoadingService } from './services/loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

import { NetworkInterceptor } from './interceptors/network.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/admin/register/register.component';
import { LoginComponent } from './components/admin/login/login.component';
import { AdminEditComponent } from './components/admin-edit/admin-edit.component';
import { AuthGuard } from './auth/auth.guard';
import { CupsEditComponent } from './components/admin-edit/cups-edit/cups-edit.component';
import { LegendsEditComponent } from './components/admin-edit/legends-edit/legends-edit.component';
import { StadiumEditComponent } from './components/admin-edit/stadium-edit/stadium-edit.component';
import { ArticleEditComponent } from './components/admin-edit/article-edit/article-edit.component';
import { ContactEditComponent } from './components/admin-edit/contact-edit/contact-edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    ArticlesComponent,
    CupsComponent,
    LegendsComponent,
    StadiumComponent,
    NotfoundComponent,
    RegisterComponent,
    LoginComponent,
    AdminEditComponent,
    CupsEditComponent,
    LegendsEditComponent,
    StadiumEditComponent,
    ArticleEditComponent,
    ContactEditComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
    ArticleService,
    ContactService,
    CupsService,
    AdminService,
    LegendsService,
    StadiumService,
    LoadingService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
