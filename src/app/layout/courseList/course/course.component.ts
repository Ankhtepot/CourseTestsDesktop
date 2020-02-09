import { Component, Input } from '@angular/core';
import { Course } from '../../../shared/model/course.model';
import { CoursesService } from '../../../courses.service';

@Component({
    selector: 'app-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.css']
})
export class CourseComponent {
    @Input() course: Course;

    constructor(private coursesService: CoursesService) {}

    selectCourseClick()
    {
        this.coursesService.setSelectedCourseId(this.course.id);
    }

}
