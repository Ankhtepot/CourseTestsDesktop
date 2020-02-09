import {Course} from './model/course.model';
import {Question} from './model/question.model';
import {QuestionTypes} from './question-types.enum';
import {Answer} from './model/answer.model';
import {Test} from './model/test.model';

export class CoursesProvider {
    private courses: Course[] = [
      new Course('Linux Akademie', 'linux', [
        new Test('1. Lekce: Práce s Linuxem', 'l1', [
          new Question('Ve kterých z níže zmíněných zařízení můžeme najít Linux?', QuestionTypes.CHECKBOX, [
            new Answer('Servery', true),
            new Answer('Superpočítače', true),
            new Answer('Telefony', true),
            new Answer('Chytré domácí spotřebiče', true),
            new Answer('Domácí počítače', true),
            new Answer('Rychlovarné konvice', false),
            new Answer('Bezdrátové myši s Bluetooth', false),
            new Answer(' Kamery z 80. let ', false)
          ]),
          new Question('Které z níže uvedených adres jsou "absolutní adresy"?', QuestionTypes.CHECKBOX, [
            new Answer(' /home/file1 ', true),
            new Answer('file1', false),
            new Answer('/', true),
            new Answer(' home/file1 ', false)
          ]),
          new Question('Které z níže uvedených systémů NEJSOU opensource?', QuestionTypes.CHECKBOX, [
            new Answer('Unix', true),
            new Answer(' Ubuntu Linux ', false),
            new Answer(' Windows XP ', true ),
            new Answer(' Red Hat Enterprise Linux (RHEL) ', false ),
            new Answer('Mac OS X', true),
            new Answer('Android', false)
          ]),
          new Question('Jaké jsou výhody Linuxu?', QuestionTypes.CHECKBOX, [
            new Answer(' Linux můžu modifikovat tak, jak mi vyhovuje ', true),
            new Answer(' Linux je spolehlivý ', true),
            new Answer(' Linux se snadno používá i bez jakýchkoli IT zkušeností ', false),
            new Answer(' Linux je zdarma ', true),
            new Answer(' Linux už většinou nainstalováný při zakoupení laptopu, nebo PC ', false)
          ]),
          new Question('Jaký je rozdíl mezi absolutní a relativní cestou?', QuestionTypes.CHECKBOX, [
            new Answer(' Absolutní cesta je platná pouze z jednoho umístění v systému, protože z něho vychází. ', false),
            new Answer(' Absolutní cesta funguje vždy, ať už se vyskytujeme v jakémkoli adresáři v rámci stejného systému. ', false),
            new Answer(' Relativní cesta je platná pouze z jednoho umístění v systému, protože z něho vychází. ', true),
            new Answer(' Relativní cesta funguje vždy, ať už se vyskytujeme v jakémkoli adresáři v rámci stejného systému. ', false)
          ]),
          new Question('Co znamená zkratka GUI?', QuestionTypes.CHECKBOX, [
            new Answer(' Graphical Utility Interface ', false),
            new Answer(' Graphical User Interface ', true),
            new Answer(' Graphical User Information ', false),
            new Answer(' Graphical Utility Information ', false)
          ]),
          new Question('Jaké jsou výhody terminálu oproti GUI?', QuestionTypes.CHECKBOX, [
            new Answer(' je více intuitivní ', false),
            new Answer(' soustředíš se pouze na jeden nástroj ', true),
            new Answer(' jednodušší použití pro nové uživatele ', false),
            new Answer(' práce s terminálem je velmi rychlá ', true),
            new Answer(' z jednoho místa lze nastavit prakticky cokoliv ', true)
          ]),
          new Question('Jaký je rozdíl mezi příkazovým řádkem a linuxovým terminálem?', QuestionTypes.CHECKBOX, [
            new Answer(' Příkazový řádek není nástrojem Linuxu a linuxový terminál ano ', false),
            new Answer(' Linuxový terminál není nástrojem Linuxu a příkazový řádek ano ', false),
            new Answer(' Linuxový terminál je druh příkazového řádku ', true),
            new Answer(' Příkazový řádek je druh linuxového terminálu ', false)
          ]),
          new Question('V Linuxu můžu pracovat pouze v příkazovém řádku', QuestionTypes.CHECKBOX, [
            new Answer('Ano', false),
            new Answer('ne', true)
          ]),
          new Question('Jak se nazývá text, nebo symbol, který značí, že je systém připraven vykonat další příkaz?', QuestionTypes.CHECKBOX, [
            new Answer('command', false),
            new Answer('prompt', true),
            new Answer('Putty', false),
            new Answer('input', false)
          ])
        ]),
        new Test('Lekce 2: Práce se soubory','l2', [
          new Question('Kterým příkazem zobrazíme seznam souborů v adresáři DIR?', QuestionTypes.CHECKBOX, [
            new Answer('cd DIR', false),
            new Answer('is DIR', true),
            new Answer('mv DIR', false),
            new Answer('cat DIR', false)
          ]),
          new Question('Které příkazy vytvoří prázdný soubor file1?', QuestionTypes.CHECKBOX, [
            new Answer(' touch /home/student/file1 ', true),
            new Answer(' touch file1 file2 ', false),
            new Answer(' touch ../file1 ', true),
            new Answer(' mkdir file1 ', false),
            new Answer(' touch file1/.. ', false)
          ])
        ])
      ]),
      new Course('Python Akademie', 'python', [])
    ];

    getCourses(): Course[] {
      return JSON.parse(JSON.stringify(this.courses));
    }
}
