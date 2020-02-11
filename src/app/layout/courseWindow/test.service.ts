import { EventEmitter, Injectable } from "@angular/core";
import { Test } from "../../shared/model/test.model";
import { CoursesService } from "../../courses.service";
import { Question } from "../../shared/model/question.model";
import { QuestionTypes } from "../../shared/question-types.enum";

@Injectable({
  providedIn: "root"
})
export class TestService {
  private tests: Test[] = null;
  private selectedTest: Test = null;
  private selectedTestIndex: number = null;
  private selectedQuestion: Question = null;
  public testInAnsweringMode: boolean = true;

  notifySelectedTestChange = new EventEmitter<Test>();
  notifySelectedQuestionChange = new EventEmitter<Question>();
  notifyAnswerCheck = new EventEmitter<Question>();
  notifyAllAnswersAnswered = new EventEmitter<boolean>();
  notifyAnswersEditableChange = new EventEmitter<boolean>();
  notifyTestValidated = new EventEmitter<void>();
  notifyQuestionValidated = new EventEmitter<{
    question: Question;
    correct: boolean;
  }>();

  constructor(private coursesService: CoursesService) {
    this.coursesService.selectedCourseIdChanged.subscribe(() =>
      this.clearData()
    );
  }

  clearData() {
    this.tests = null;
    if (this.coursesService.getSelectedCourse() !== null) {
      this.tests = this.coursesService.getSelectedCourseTests();
    }
    this.selectedTest = null;
    this.selectedQuestion = null;
    this.selectedTestIndex = null;
    this.notifySelectedTestChange.emit(this.selectedTest);
  }

  reloadTest() {
    this.clearData();
  }

  getSelectedTest() {
    return this.selectedTest;
  }

  getTests() {
    return [...this.tests];
  }

  getQuestionIndex(question: Question): number {
    let foundIndex = null;
    const questions = this.selectedTest.questions;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i] === question) {
        foundIndex = i;
      }
    }

    return foundIndex;
  }

  setSelectedTest(selectedTestIndex: number) {
    if (selectedTestIndex === null) {
      console.log("setting selectedTest to null");
      this.selectedTest = null;
      this.selectedQuestion = null;
    } else {
      this.selectedTest = this.tests[selectedTestIndex];
      this.selectedTestIndex = selectedTestIndex;
      this.selectedQuestion = null;
    }

    this.testInAnsweringMode = true;
    this.notifySelectedTestChange.emit(this.selectedTest);
  }

  setSelectedQuestion(question: Question) {
    this.selectedQuestion = question;
    this.notifySelectedQuestionChange.emit(this.selectedQuestion);
  }

  setSelectedQuestionByIndex(index: number) {
    if (index => 0 && index < this.tests.length) {
      this.setSelectedQuestion(this.selectedTest.questions[index]);
    }
  }

  setAnswerCheckStatus(answerIndex: number, checked: boolean) {
    if (this.selectedQuestion !== null) {
      this.selectedQuestion.answers[answerIndex].isChecked = checked;
      this.notifyAnswerCheck.emit(this.selectedQuestion);
    }

    this.notifyAllAnswersAnswered.emit(this.validateAllAnswersAnswered());
  }

  setAnswersEditable(editable: boolean) {
    this.notifyAnswersEditableChange.emit(editable);
  }

  validateAllAnswersAnswered() {
    let allAnswersAnswered = true;
    this.selectedTest.questions.forEach(question => {
      if (!this.validateQuestionCheckState(question)) {
        allAnswersAnswered = false;
        return;
      }
    });

    return allAnswersAnswered;
  }

  checkAllUserAnswers() {
    if (this.selectedTest !== null) {
      this.testInAnsweringMode = false;
      this.setAnswersEditable(false);
      this.selectedTest.questions.forEach(question =>
        this.checkQuestionAnswers(question)
      );
      this.notifyTestValidated.emit();
    }
    this.notifySelectedQuestionChange.emit(this.selectedQuestion);
  }

  checkQuestionAnswers(question: Question) {
    let questionCorrect = true;

    if (question.questionType === QuestionTypes.CHECKBOX) {
      for (let j = 0; j < question.answers.length; j++) {
        let answerIsCorrect =
          question.answers[j].isCorrect === question.answers[j].isChecked;
        if (!answerIsCorrect) {
          questionCorrect = false;
        }
      }
      question.validated = true;
      this.notifyQuestionValidated.emit({
        question: question,
        correct: questionCorrect
      });
    }
  }

  validateQuestionCheckState(question: Question) {
    let anyAnswerChecked = false;

    question.answers.forEach(answer => {
      if (answer.isChecked) {
        anyAnswerChecked = true;
        return;
      }
    });

    return anyAnswerChecked;
  }
}
