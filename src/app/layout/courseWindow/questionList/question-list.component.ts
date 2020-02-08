import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../../../shared/test.model';
import { TestService } from '../test.service';
import { Question } from '../../../shared/question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  @Input() selectedTest: Test = null;
  questions: Question[] = null;
  selectedQuestion: Question = null;

  constructor(private testService: TestService) {}

  ngOnInit() {
    const selectedTest: Test = this.testService.getSelectedTest();
    if (selectedTest !== null) {
        this.selectedTest = selectedTest;
        this.questions = this.selectedTest.questions;
    }
  }
}
