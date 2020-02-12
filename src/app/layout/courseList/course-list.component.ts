import { Component, OnInit } from "@angular/core";
import { Course } from "../../shared/model/course.model";
import { CoursesService } from "../../courses.service";

@Component({
  selector: "app-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  selectedCourseId: string = null;
  selectedCourseTitle: string = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.courses = this.coursesService.getCourses();

    this.coursesService.selectedCourseIdChanged.subscribe(selectedCourseId => {
      this.selectedCourseId = selectedCourseId;
      if (selectedCourseId !== null) {
        this.selectedCourseTitle = this.coursesService.getSelectedCourse().title;
      }
    });

    this.coursesService.notifyCoursesLoaded.subscribe(
      loadedStatus => {
        if (loadedStatus) {
          this.courses = this.coursesService.getCourses();
        }
      }
    )
  }
}
