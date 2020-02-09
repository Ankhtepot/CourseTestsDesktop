import {Component, Input, OnInit} from '@angular/core';
import {TestService} from '../../test.service';
import {Answer} from '../../../../shared/model/answer.model';
import {AnswerValidationState} from './answer-validation-state.enum';
import {Question} from '../../../../shared/model/question.model';

@Component({
    selector: 'app-answer',
    templateUrl: './answer.component.html',
    styleUrls: [ './answer.component.css' ]
})
export class AnswerComponent implements OnInit {
    @Input() answer: Answer = null;
    @Input() answerIndex: number = null;
    @Input() question: Question = null;
    checked = false;
    editable = true;
    state: AnswerValidationState = AnswerValidationState.BASIC;
    public answerValidationState = AnswerValidationState;

    constructor(private testService: TestService) {}

    ngOnInit() {
        if (this.answer !== null) {
            this.checked = this.answer.isChecked;
        }

        this.validateAnswer();

        this.editable = this.testService.testInAnsweringMode;

        this.testService.notifyAnswersEditableChange.subscribe(
          editable => this.editable = editable);

        this.testService.notifyTestValidated.subscribe(
          () => this.validateAnswer()
        )
    }

    checkboxChanged(event) {
        this.checked = event.target.checked;
        this.answer.isChecked = event.target;
        this.testService.setAnswerCheckStatus(this.answerIndex, this.checked);
    }

    isAnsweredCorrectly() {
      return this.answer.isChecked === this.answer.isCorrect;
    }

    validateAnswer() {
      if (this.question.validated) {
        this.state = this.isAnsweredCorrectly()
          ? this.answerValidationState.CORRECT
          : this.answerValidationState.INCORRECT;
      }
    }
}
