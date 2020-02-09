import { Answer } from './answer.model';

export class Question {
    constructor(
        public Text: string,
        public questionType: string,
        public answers: Answer[]
    ) {}
}
