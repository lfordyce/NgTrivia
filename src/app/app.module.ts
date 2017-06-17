import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Custom Material Module
import { SharedModule } from './shared/shared.module';

import { routes } from './app.route';
import { AppComponent, CategoriesComponent, TagsComponent, QuestionsComponent, QuestionAddUpdateComponent } from './components';
import { TagService, CategoryService, QuestionService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    TagsComponent,
    QuestionsComponent,
    QuestionAddUpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    // Custom
    SharedModule
  ],
  providers: [
    TagService,
    QuestionService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
