import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../../courses.service";
import { Course } from "../../shared/course.model";
import { TestService } from "./test.service";
import { Test } from "../../shared/test.model";

@Component({
  selector: "app-course-window",
  templateUrl: "./course-window.component.html",
  styleUrls: ["./course-window.component.css"]
})
export class CourseWindowComponent implements OnInit
{
    selectedCourseId: string = null;
    selectedCourse: Course = null;
    selectedTest: Test = null;

    constructor(private coursesService: CoursesService, private testService: TestService) 
    {}

    ngOnInit()
    {
        this.coursesService.selectedCourseIdChanged.subscribe((selectedCourseId) => {
            this.selectedCourseId = selectedCourseId;
            this.selectedCourse = this.coursesService.getSelectedCourse();
        });

        this.testService.notifySelectedTestChange.subscribe((selectedTest) => {
            // console.log('course-window: selectedTestChanged received');
            this.selectedTest = selectedTest;
            // console.log(this.selectedTest);
        });
    }
}
