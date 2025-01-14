import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { VendorListComponent } from './components/vendor/vendor-list/vendor-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/vendors', pathMatch: 'full' },
  { path: 'vendors', component: VendorListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    VendorListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }