import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../../../shared/model/test.model';
import { TestService } from '../test.service';
import { Question } from '../../../shared/model/question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {
  @Input() selectedTest: Test = null;
  questions: Question[] = null;
  selectedQuestion: Question = null;
  questionsAnswered = false;
  questionsEditable = true;

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.testService.notifySelectedQuestionChange.subscribe((question) => {
      this.selectedQuestion = question;
    });

    this.testService.notifyAllAnswersAnswered.subscribe(
      (allQuestionsAnswered) => this.questionsAnswered = allQuestionsAnswered);

    this.testService.notifyAnswersEditableChange.subscribe(
      editable => this.questionsEditable = editable);

    this.testService.notifySelectedTestChange.subscribe(
      test => this.selectedTest = test
    );

    const selectedTest: Test = this.testService.getSelectedTest();
    if (selectedTest !== null) {
        this.selectedTest = selectedTest;
        this.questions = this.selectedTest.questions;
    }
  }

  deselectTest() {
    this.testService.clearData();
  }

  reloadTest() {
    this.testService.reloadTest();
  }

  checkUserAnswers()
  {
    this.testService.checkAllUserAnswers();
  }
}
