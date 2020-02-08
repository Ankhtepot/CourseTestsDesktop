import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared/course.model';
import { CoursesService } from '../../courses.service';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html',
    styleUrls: [ './course-list.component.css']
})
export class CourseListComponent implements OnInit {
    courses: Course[];
    selectedCourseId: string = null;
    selectedCourseTitle: string = null;

    constructor(private coursesService: CoursesService) {}

    ngOnInit() {
        this.courses = this.coursesService.getCourses();

        this.coursesService.selectedCourseIdChanged.subscribe((selectedCourseId) => {
            console.log('course-list: selectedCourseIdChanged received');
            this.selectedCourseId = selectedCourseId;
            if(selectedCourseId !== null) {
              this.selectedCourseTitle = this.coursesService.getSelectedCourse().title;
            }
        });
    }

    deselectedCourseId() {
        this.coursesService.setSelectedCourseId(null);
    }
}
