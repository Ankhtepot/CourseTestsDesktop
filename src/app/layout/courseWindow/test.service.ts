import { Injectable, EventEmitter } from '@angular/core';
import { Test } from '../../shared/test.model';
import { CoursesService } from '../../courses.service';
import { Question } from '../../shared/question.model';


@Injectable({
  providedIn: 'root',
})
export class TestService {
    private tests: Test[] = null;
    private selectedTest: Test = null;
    private selectedQuestion: Question = null;

    notifySelectedTestChange = new EventEmitter<Test>();
    notifySelectedQuestionChange = new EventEmitter<Question>();
    notifyAnswerCheck = new EventEmitter<Question>();

    constructor(private coursesService: CoursesService) {
      this.coursesService.selectedCourseIdChanged.subscribe(() => this.clearData());
    }

    clearData() {
      this.tests =  this.coursesService.getSelectedCourseTests();
      this.selectedTest = null;
      this.selectedQuestion = null;
      this.notifySelectedTestChange.emit(this.selectedTest);
    }

    getSelectedTest() {
      return this.selectedTest;
    }

    setSelectedTest(selectedTestIndex: number) {
      if (selectedTestIndex === null) {
       console.log('setting selectedTest to null');
       this.selectedTest = null;
       this.selectedQuestion = null;
      } else {
        this.selectedTest = this.tests[selectedTestIndex];
        this.selectedQuestion = null;
      }

      this.notifySelectedTestChange.emit(this.selectedTest);
    }

    setSelectedQuestion(question: Question) {
      this.selectedQuestion = question;
      this.notifySelectedQuestionChange.emit(this.selectedQuestion);
    }

    setAnswerCheckStatus(answerIndex: number, checked: boolean) {
      if (this.selectedQuestion !== null) {
        this.selectedQuestion.answers[answerIndex].isChecked = checked;
        this.notifyAnswerCheck.emit(this.selectedQuestion);
      }
    }
}
