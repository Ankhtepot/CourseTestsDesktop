import { Question } from './question.model';

export class Test {
    constructor(
        public name: string,
        private id: string,
        public questions: Question[]
    ) {}
}
