import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { LayoutComponent } from "./layout/layout.component";
import { CourseListComponent } from "./layout/courseList/course-list.component";
import { CourseComponent } from "./layout/courseList/course/course.component";
import { CourseWindowComponent } from "./layout/courseWindow/course-window.component";
import { TestListComponent } from "./layout/courseWindow/testsList/test-list.component";
import { QuestionListComponent } from "./layout/courseWindow/questionList/question-list.component";
import { TestDetailComponent } from "./layout/courseWindow/testsList/testDetail/test-detail.component";
import { AnswerListComponent } from "./layout/courseWindow/answerList/answer-list.component";
import { QuestionComponent } from "./layout/courseWindow/questionList/question/question.component";
import { AnswerComponent } from "./layout/courseWindow/answerList/answer/answer.component";
import { ToolbarComponent } from "./layout/toolbar/toolbar.component";

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CourseListComponent,
    CourseComponent,
    CourseWindowComponent,
    TestListComponent,
    QuestionListComponent,
    TestDetailComponent,
    AnswerListComponent,
    QuestionComponent,
    AnswerComponent,
    ToolbarComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
