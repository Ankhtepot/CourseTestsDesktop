import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../../../../shared/model/question.model';
import { TestService } from '../../test.service';
import { QuestionStates } from './questionStates.enum';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: [ './question.component.css' ]
})
export class QuestionComponent implements OnInit
{
    @Input() question: Question;
    @Input() questionIndex: number;
    state: QuestionStates = QuestionStates.BASE;
    answersState: QuestionStates = QuestionStates.BASE;
    public questionStates = QuestionStates;

    constructor(private testService: TestService) {}

    ngOnInit() {
        if (this.questionIndex === 0) {
           this.onClick();
        }

        this.testService.notifySelectedQuestionChange.subscribe((question: Question) => {
            if (question !== this.question) {
                this.state = this.answersState;
            } else {
              this.state = this.questionStates.SELECTED;
            }
        });

        this.testService.notifyAnswerCheck.subscribe((question: Question) => {
            if (this.question === question) {
              if(this.testService.validateQuestionCheckState(this.question)) {
                this.answersState = this.questionStates.CHECKED;
              } else {
                this.answersState = this.questionStates.BASE;
              }
            }
        });

        this.testService.notifyQuestionValidated.subscribe(
          (result) => {
            if (this.question === result.question) {
              this.answersState = result.correct
                ? this.questionStates.CORRECT
                : this.questionStates.INCORRECT;
              this.state = this.answersState;
            }
          }
        )
    }

    onClick() {
         this.state = this.questionStates.SELECTED;
         this.testService.setSelectedQuestion(this.question);
    }
}
