import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../../courses.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  coursesLoaded: boolean = false;
  firstLoaded: boolean = true;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {}

  userGroupConfirmed(event) {
    console.log('loading courses for: ' + event.target.value);
    this.coursesLoaded = !this.coursesService.loadCoursesForGroup(event.target.value);
    this.firstLoaded = false;
  }
}
