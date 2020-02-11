import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../../courses.service";
import { Course } from "../../shared/model/course.model";
import { TestService } from "./test.service";
import { Test } from "../../shared/model/test.model";

@Component({
  selector: "app-course-window",
  templateUrl: "./course-window.component.html",
  styleUrls: ["./course-window.component.css"]
})
export class CourseWindowComponent implements OnInit {
  selectedCourseId: string = null;
  selectedCourse: Course = null;
  selectedTest: Test = null;

  constructor(
    private coursesService: CoursesService,
    private testService: TestService
  ) {}

  ngOnInit() {
    this.coursesService.selectedCourseIdChanged.subscribe(selectedCourseId => {
      this.selectedCourseId = selectedCourseId;
      this.selectedCourse = this.coursesService.getSelectedCourse();
    });

    this.testService.notifySelectedTestChange.subscribe(selectedTest => {
      this.selectedTest = selectedTest;
    });
  }

  deselectCourse() {
    this.coursesService.setSelectedCourseId(null);
  }
}
