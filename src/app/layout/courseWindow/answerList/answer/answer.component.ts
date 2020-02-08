import { Component, Input, OnInit } from '@angular/core';
import { Answer } from '../../../../shared/answer.model';
import { TestService } from '../../test.service';

@Component({
    selector: 'app-answer',
    templateUrl: './answer.component.html',
    styleUrls: [ './answer.component.css' ]
})
export class AnswerComponent implements OnInit {
    @Input() answer: Answer = null;
    @Input() answerIndex: number = null;
    checked = false;

    constructor(private testService: TestService) {}

    ngOnInit() {
        if (this.answer !== null) {
            this.checked = this.answer.isChecked;
        }
    }

    checkboxChanged(event) {
        this.checked = event.target.checked;
        this.answer.isChecked = event.target;
        this.testService.setAnswerCheckStatus(this.answerIndex, this.checked);
    }
}
