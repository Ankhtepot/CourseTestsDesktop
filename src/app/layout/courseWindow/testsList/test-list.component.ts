import { Component, OnInit } from '@angular/core';
import { Test } from '../../../shared/model/test.model';
import { TestService } from '../test.service';
import { CoursesService } from '../../../courses.service';

@Component({
    selector: 'app-test-list',
    templateUrl: './test-list.component.html',
    styleUrls: [ './test-list.component.css' ]
})
export class TestListComponent implements OnInit {
    tests: Test[] = [];
    selectedTest: Test = null;

    constructor(
         private testService: TestService,
         private coursesService: CoursesService) {}

    ngOnInit() {
        this.tests = this.coursesService.getSelectedCourseTests();
        this.testService.notifySelectedTestChange.subscribe((selectedTest) => {
            this.selectedTest = selectedTest;
        });
    }
}
