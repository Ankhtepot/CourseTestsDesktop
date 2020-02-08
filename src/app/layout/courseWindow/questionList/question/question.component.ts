import { Component, Input, OnInit } from "@angular/core";
import { Question } from "../../../../shared/question.model";
import { TestService } from "../../test.service";
import { QuestionStates } from './questionStates.enum';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: [ './question.component.css' ]
})
export class QuestionComponent implements OnInit
{
    @Input() question: Question;
    @Input() selectedQuestionId: number;
    @Input() state: QuestionStates = QuestionStates.BASE;
    answersState: QuestionStates = QuestionStates.UNCHECKED
    public questionStates = QuestionStates;

    constructor(private testService: TestService) {}

    ngOnInit()
    {
        if(this.selectedQuestionId === 0)
        {
           this.onClick();
        }

        this.testService.notifySelectedQuestionChange.subscribe((question: Question) => {
            if(question !== this.question)
            {
                this.state = this.questionStates.BASE;
            }
        })

        this.testService.notifyAnswerCheck.subscribe((question: Question) => {
            if(this.question === question)
            {
                this.answersState = this.questionStates.CHECKED;
            }
        });
    }

    onClick()
    {
         this.state = this.questionStates.SELECTED;
         this.testService.setSelectedQuestion(this.question);
    }
}