import { Answer } from './answer.model';

export class Question {
    constructor(
        public question: string,
        public questionType: string,
        public answers: Answer[]
    ) {}
}
