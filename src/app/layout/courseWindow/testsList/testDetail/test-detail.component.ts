import {Component, Input, OnInit} from '@angular/core';
import { Test } from '../../../../shared/model/test.model';
import { TestService } from '../../test.service';

@Component({
    selector: 'app-test-detail',
    templateUrl: './test-detail.component.html',
    styleUrls: [ './test-detail.component.css' ]
})
export class TestDetailComponent implements OnInit{
    @Input() test: Test = null;
    @Input() testIndex: number = null;
    testName: string = null;

    constructor(private testService: TestService) {}

    ngOnInit(): void {
      if (this.test !== null) {
        this.testName = this.test.name;
      }
    }

  selectTest() {
        this.testService.setSelectedTest(this.testIndex);
    }
}
