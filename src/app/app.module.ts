import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from './carousel/carousel.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { WorkComponent } from './work/work.component';
import { InfoComponent } from './info/info.component';
import { MenuInfoComponent } from './menu-info/menu-info.component';
import { MenuWorkComponent } from './menu-work/menu-work.component';
import { MenuContactComponent } from './menu-contact/menu-contact.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { ProjectDetailComponent } from './project-detail/project-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    WorkComponent,
    InfoComponent,
    MenuInfoComponent,
    MenuWorkComponent,
    MenuContactComponent,
    ProjectPageComponent,
    SlideshowComponent,
    ProjectDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
