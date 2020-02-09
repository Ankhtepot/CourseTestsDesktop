import { Component, OnInit } from '@angular/core';
import { Question } from '../../../shared/model/question.model';
import { TestService } from '../test.service';
import {Answer} from '../../../shared/model/answer.model';

@Component({
    selector: 'app-answer-list',
    templateUrl: './answer-list.component.html',
    styleUrls: [ 'answer-list.component.css' ]
})
export class AnswerListComponent implements OnInit {
    selectedQuestion: Question = null;
    answers: Answer[] = null;
    allAnswersValidated = false;

    constructor(private testService: TestService) {}

    ngOnInit() {
        this.testService.notifySelectedQuestionChange.subscribe((question) => {
            this.selectedQuestion = question;
            if (question !== null) {
                this.answers = question.answers;
            } else {
                this.answers = null;
            }
        });

        this.testService.notifyTestValidated.subscribe(
          () => this.allAnswersValidated = true)
    }

  isSelectedQuestionFirst() {
    return this.testService.getQuestionIndex(this.selectedQuestion) === 0;
  }

  isSelectedQuestionLast() {
    return this.testService.getQuestionIndex(this.selectedQuestion)
      === this.testService.getSelectedTest().questions.length - 1;
  }

  fetchPreviousQuestion() {
      this.testService.setSelectedQuestionByIndex(
        this.testService.getQuestionIndex(this.selectedQuestion) - 1)
  }

  fetchNextQuestion() {
    this.testService.setSelectedQuestionByIndex(
      this.testService.getQuestionIndex(this.selectedQuestion) + 1)
  }
}
