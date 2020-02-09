export class Answer {
    constructor(
        public text: string,
        public isCorrect: boolean,
        public isChecked: boolean = false,
    ) {}
}
