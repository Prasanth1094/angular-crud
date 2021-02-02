import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatListModule} from '@angular/material';
import {MatTableModule} from '@angular/material';
import {MatCardModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { TopbarComponent } from './topbar/topbar.component';
import { ContentviewerComponent } from './contentviewer/contentviewer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
@NgModule({
  declarations: [
    AppComponent,
     TopbarComponent,
    ContentviewerComponent,
    SidebarComponent,
    DashboardComponent,
    UserComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '',redirectTo: '/dashboard',pathMatch: 'full'},
      {path:'dashboard', component:DashboardComponent},
      {path:'user', component:UserComponent},
      { path: 'user/:id', component: UserDetailsComponent },
      //{path:'login', component:LoginComponent},
      ]),
      MatToolbarModule,MatSidenavModule,MatButtonModule,MatIconModule,MatListModule,MatFormFieldModule, 
      MatInputModule,MatSelectModule,
      MatCheckboxModule,MatCardModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
