import {EventEmitter, Injectable} from '@angular/core';
import {Course} from './shared/model/course.model';
import {CoursesProvider} from './shared/courses-provider';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private selectedCourseId: string = null;
  private selectedCourse: Course = null;
  private courses: Course[] = null;

  selectedCourseIdChanged = new EventEmitter<string>();

  constructor() {
    this.courses = new CoursesProvider().getCourses();
  }

  getCourses() {
    return new CoursesProvider().getCourses();
  }

  getSelectedCourse(): Course {
    return this.selectedCourse;
  }

  setSelectedCourseId(selectedCourseId: string) {
    this.selectedCourseId = selectedCourseId;
    this.selectedCourse = this.getCourseById(selectedCourseId);
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
