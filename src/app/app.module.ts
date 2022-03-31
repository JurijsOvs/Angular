import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { ArticleComponent } from './article/article.component';
import { PlaygroundComponent } from './playground/playground.component';
import { BinaryPipe } from './binary.pipe';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { ShadeDirective } from './shade.directive';
import { TableItemComponent } from './table/table-item/table-item.component';
import { UserItemComponent } from './table/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TableComponent,
    ArticleComponent,
    PlaygroundComponent,
    BinaryPipe,
    ShadeDirective,
    TableItemComponent,
    UserItemComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
