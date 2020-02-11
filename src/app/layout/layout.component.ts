import { Component, OnInit } from "@angular/core";
import { CoursesService } from "../courses.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.css"]
})
export class LayoutComponent implements OnInit {
  coursesLoaded: boolean = false;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {
    this.coursesService.notifyCoursesLoaded.subscribe(
      loaded => (this.coursesLoaded = loaded)
    );
  }
}
