import { Test } from './test.model';

export class Course {
    constructor(
        public title: string,
        public id: string,
        public tests: Test[]
    ) {}

    getTests = () => this.tests;
}
