import {Component, OnInit} from '@angular/core';
import {CoursesService} from './courses.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  coursesLoaded: boolean = false;

  constructor(private coursesService: CoursesService) {
  }

  ngOnInit(): void {
    this.coursesService.notifyCoursesLoaded.subscribe(
      found => {
        if (found) {
          this.coursesLoaded = this.coursesService.getCourses() !== null;
        }
      }
    )
  }
}
