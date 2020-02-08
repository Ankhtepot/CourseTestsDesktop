import { Component, OnInit } from '@angular/core';
import { Question } from '../../../shared/question.model';
import { TestService } from '../test.service';
import { Answer } from '../../../shared/answer.model';

@Component({
    selector: 'app-answer-list',
    templateUrl: './answer-list.component.html',
    styleUrls: [ 'answer-list.component.css' ]
})
export class AnswerListComponent implements OnInit {
    selectedQuestion: Question = null;
    answers: Answer[] = null;

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
    }
}
