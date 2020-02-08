import { Injectable, EventEmitter } from '@angular/core';
import { Course } from './shared/course.model';
import { Question } from './shared/question.model';
import { Test } from './shared/test.model';
import { Answer } from './shared/answer.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private linuxQuestions: Question[] = [
    new Question('first question', 'checkbox', [
      new Answer('this question is CORRECT', true),
      new Answer('this question is CORRECT', true),
      new Answer('this question is FALSE', false)
    ]),
    new Question('second question', 'checkbox', [
      new Answer('this question is FALSE', false),
      new Answer('this question is CORRECT', true),
      new Answer('this question is CORRECT', true)
    ])
  ];

  private linuxTests: Test[] = [
    new Test('Lekce 1 - Základy Linuxu', 'l1', this.linuxQuestions),
    new Test('Lekce 2 - Základní příkazy', 'l2', this.linuxQuestions)
  ];

  private courses: Course[] = [
    new Course('Linux Akademie', 'linux', this.linuxTests),
    new Course('Python Akedemie', 'python', [])
  ];

  private selectedCourseId: string = null;
  private selectedCourse: Course = null;

  selectedCourseIdChanged = new EventEmitter<string>();

  getCourses() {
    return [...this.courses];
  }

  getSelectedCourse(): Course {
    return this.selectedCourse;
  }

  setSelectedCourseId(selectedCourseId: string) {
    this.selectedCourseId = selectedCourseId;
    this.selectedCourse = this.getCourseById(selectedCourseId);
    console.log('selected course: ');
    console.log(this.selectedCourse);
    this.selectedCourseIdChanged.emit(this.selectedCourseId);
  }

  getCourseById(id: string): Course {
    let foundCourse: Course = null;
    this.courses.forEach(course => {
      if (course.id === id) {
        foundCourse = JSON.parse(JSON.stringify(course));
      }
    });

    return foundCourse;
  }

  getSelectedCourseTests() {
    return JSON.parse(JSON.stringify(this.selectedCourse.tests));
  }
}
