import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EventComponent } from './event/event.component';
import { ReviewComponent } from './review/review.component';
import { NavigateComponent } from './navigate/navigate.component';
import { DestinationComponent } from './destination/destination.component';
import { SocialShareComponent } from './social-share/social-share.component';
import { PicSelectComponent } from './pic-select/pic-select.component';
import { EventEditComponent } from './event-edit/event-edit.component';
import { SearchParamComponent } from './search-param/search-param.component';

import { AuthenticatorService } from './services/authenticator.service'

import { routing } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EventComponent,
    ReviewComponent,
    NavigateComponent,
    DestinationComponent,
    SocialShareComponent,
    PicSelectComponent,
    EventEditComponent,
    SearchParamComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule, 
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    routing,
    HttpClientModule
  ],
  providers: [
    AuthenticatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
