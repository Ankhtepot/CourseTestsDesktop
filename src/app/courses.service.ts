import { EventEmitter, Injectable } from "@angular/core";
import { Course } from "./shared/model/course.model";
import { CoursesProvider } from "./shared/courses-provider";

@Injectable({
  providedIn: "root"
})
export class CoursesService {
  private selectedCourseId: string = null;
  private selectedCourse: Course = null;
  private courses: Course[] = null;
  private coursesProvider: CoursesProvider = null;
  private noCoursesFound: boolean = false;

  selectedCourseIdChanged = new EventEmitter<string>();
  notifyCoursesLoaded = new EventEmitter<boolean>();

  constructor() {
    this.coursesProvider = new CoursesProvider();
  }

  loadCoursesForGroup(groupName: string) {
    this.courses = null;
    this.courses = this.coursesProvider.loadCoursesForGroup(groupName);

    if (this.courses === null || this.courses.length <= 0) {
      this.noCoursesFound = true;
      this.notifyCoursesLoaded.emit(false);
    } else {
      this.noCoursesFound = false;
      this.notifyCoursesLoaded.emit(true);
    }

    return this.noCoursesFound;
  }

  getCourses() {
    return this.courses;
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
