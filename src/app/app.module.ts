import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule, MdNativeDateModule, DateAdapter, NativeDateAdapter } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { PostLoginHeaderComponent } from './components/postLogin/post-login-header/post-login-header.component';
import { LoginHeaderComponent } from './components/loginComponents/login-header/login-header.component';
import { PreLoginLayoutComponent } from './components/preLogin/pre-login-layout/pre-login-layout.component';
import { PreLoginContentComponent } from './components/preLogin/pre-login-content/pre-login-content.component';
import { SelectionDialogComponent } from './components/preLogin/selection-dialog/selection-dialog.component';
import { ClientSpeakDialogComponent } from './components/preLogin/client-speak-dialog/client-speak-dialog.component';
import { WhitePaperDialogComponent } from './components/preLogin/white-paper-dialog/white-paper-dialog.component';
import { CaseStudyDialogComponent } from './components/preLogin/case-study-dialog/case-study-dialog.component';
import { NewsFeedDialogComponent } from './components/preLogin/news-feed-dialog/news-feed-dialog.component';
import { LoginComponent } from './components/loginComponents/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PostLoginHeaderComponent,
    LoginHeaderComponent,
    PreLoginLayoutComponent,
    PreLoginContentComponent,
    SelectionDialogComponent,
    ClientSpeakDialogComponent,
    WhitePaperDialogComponent,
    CaseStudyDialogComponent,
    NewsFeedDialogComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    MdNativeDateModule,
  ],
  entryComponents: [
    SelectionDialogComponent,
    ClientSpeakDialogComponent,
    WhitePaperDialogComponent,
    CaseStudyDialogComponent,
    NewsFeedDialogComponent,
  ],

  providers: [{ provide: DateAdapter, useClass: NativeDateAdapter }],
  bootstrap: [AppComponent]
})
export class AppModule { }

