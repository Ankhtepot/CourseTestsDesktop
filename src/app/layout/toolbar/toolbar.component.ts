import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../../courses.service";

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.css"]
})
export class ToolbarComponent implements OnInit {
  coursesLoaded = false;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {}

  userGroupConfirmed(event) {
    this.coursesLoaded = !this.coursesService.loadCoursesForGroup(event.target.value);
  }
}
