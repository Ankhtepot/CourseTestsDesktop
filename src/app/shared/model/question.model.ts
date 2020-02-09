import {QuestionTypes} from '../question-types.enum';
import {Answer} from './answer.model';

export class Question {
    constructor(
        public Text: string,
        public questionType: QuestionTypes,
        public answers: Answer[],
        public validated: boolean = false
    ) {}
}
