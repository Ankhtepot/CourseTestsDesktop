import { Course } from "./model/course.model";
import { Question } from "./model/question.model";
import { QuestionTypes } from "./question-types.enum";
import { Answer } from "./model/answer.model";
import { Test } from "./model/test.model";

export class CoursesProvider {
  private courses: Course[] = [
    new Course("Linux Akademie", "linux", "engeto", [
      new Test("1. Lekce: Práce s Linuxem", "l1", [
        new Question(
          "Ve kterých z níže zmíněných zařízení můžeme najít Linux?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Servery", true),
            new Answer("Superpočítače", true),
            new Answer("Telefony", true),
            new Answer("Chytré domácí spotřebiče", true),
            new Answer("Domácí počítače", true),
            new Answer("Rychlovarné konvice", false),
            new Answer("Bezdrátové myši s Bluetooth", false),
            new Answer(" Kamery z 80. let ", false)
          ]
        ),
        new Question(
          'Které z níže uvedených adres jsou "absolutní adresy"?',
          QuestionTypes.CHECKBOX,
          [
            new Answer(" /home/file1 ", true),
            new Answer("file1", false),
            new Answer("/", true),
            new Answer(" home/file1 ", false)
          ]
        ),
        new Question(
          "Které z níže uvedených systémů NEJSOU opensource?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Unix", true),
            new Answer(" Ubuntu Linux ", false),
            new Answer(" Windows XP ", true),
            new Answer(" Red Hat Enterprise Linux (RHEL) ", false),
            new Answer("Mac OS X", true),
            new Answer("Android", false)
          ]
        ),
        new Question("Jaké jsou výhody Linuxu?", QuestionTypes.CHECKBOX, [
          new Answer(" Linux můžu modifikovat tak, jak mi vyhovuje ", true),
          new Answer(" Linux je spolehlivý ", true),
          new Answer(
            " Linux se snadno používá i bez jakýchkoli IT zkušeností ",
            false
          ),
          new Answer(" Linux je zdarma ", true),
          new Answer(
            " Linux už většinou nainstalováný při zakoupení laptopu, nebo PC ",
            false
          )
        ]),
        new Question(
          "Jaký je rozdíl mezi absolutní a relativní cestou?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(
              " Absolutní cesta je platná pouze z jednoho umístění v systému, protože z něho vychází. ",
              false
            ),
            new Answer(
              " Absolutní cesta funguje vždy, ať už se vyskytujeme v jakémkoli adresáři v rámci stejného systému. ",
              false
            ),
            new Answer(
              " Relativní cesta je platná pouze z jednoho umístění v systému, protože z něho vychází. ",
              true
            ),
            new Answer(
              " Relativní cesta funguje vždy, ať už se vyskytujeme v jakémkoli adresáři v rámci stejného systému. ",
              false
            )
          ]
        ),
        new Question("Co znamená zkratka GUI?", QuestionTypes.CHECKBOX, [
          new Answer(" Graphical Utility Interface ", false),
          new Answer(" Graphical User Interface ", true),
          new Answer(" Graphical User Information ", false),
          new Answer(" Graphical Utility Information ", false)
        ]),
        new Question(
          "Jaké jsou výhody terminálu oproti GUI?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" je více intuitivní ", false),
            new Answer(" soustředíš se pouze na jeden nástroj ", true),
            new Answer(" jednodušší použití pro nové uživatele ", false),
            new Answer(" práce s terminálem je velmi rychlá ", true),
            new Answer(" z jednoho místa lze nastavit prakticky cokoliv ", true)
          ]
        ),
        new Question(
          "Jaký je rozdíl mezi příkazovým řádkem a linuxovým terminálem?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(
              " Příkazový řádek není nástrojem Linuxu a linuxový terminál ano ",
              false
            ),
            new Answer(
              " Linuxový terminál není nástrojem Linuxu a příkazový řádek ano ",
              false
            ),
            new Answer(" Linuxový terminál je druh příkazového řádku ", true),
            new Answer(" Příkazový řádek je druh linuxového terminálu ", false)
          ]
        ),
        new Question(
          "V Linuxu můžu pracovat pouze v příkazovém řádku",
          QuestionTypes.CHECKBOX,
          [new Answer("Ano", false), new Answer("ne", true)]
        ),
        new Question(
          "Jak se nazývá text, nebo symbol, který značí, že je systém připraven vykonat další příkaz?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("command", false),
            new Answer("prompt", true),
            new Answer("Putty", false),
            new Answer("input", false)
          ]
        )
      ]),
      new Test("2. Lekce: Práce se soubory", "l2", [
        new Question(
          "Kterým příkazem zobrazíme seznam souborů v adresáři DIR?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cd DIR", false),
            new Answer("is DIR", true),
            new Answer("mv DIR", false),
            new Answer("cat DIR", false)
          ]
        ),
        new Question(
          "Které příkazy vytvoří prázdný soubor file1?",
          QuestionTypes.CHECKBOX,
          [
            new Answer(" touch /home/student/file1 ", true),
            new Answer(" touch file1 file2 ", false),
            new Answer(" touch ../file1 ", true),
            new Answer(" mkdir file1 ", false),
            new Answer(" touch file1/.. ", false)
          ]
        ),
        new Question(
          "Příkaz se skládá ze tří částí, které píšeme v tomto pořadí:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("argument - přepínač - příkaz", false),
            new Answer("přepínač - příkaz - argument", false),
            new Answer("příkaz - přepínač - argument", true),
            new Answer("argument - příkaz - přepínač", false)
          ]
        ),
        new Question("Příkaz...", QuestionTypes.CHECKBOX, [
          new Answer("může obsahovat více argumentů", true),
          new Answer("může obsahovat více přepínačů", true),
          new Answer("se nemůže používat bez argumentů a přepínačů", false),
          new Answer("je program, který provadí určitou operaci", true)
        ]),
        new Question(
          "Jedna a dvě tečky za příkazem...",
          QuestionTypes.CHECKBOX,
          [
            new Answer("reprezentují operátory a odkazují na adresáře", false),
            new Answer("reprezentují operátory a odkazují na soubory", false),
            new Answer("reprezentují argumenty a odkazují na adresáře", true),
            new Answer("reprezentují argumenty a odkazují na soubory", false)
          ]
        ),
        new Question(
          "Jaký je správný zápis příkazu, pokud se chceme dostat z /home/student/Documents/school do /home/student/Files/online",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cd ../online", false),
            new Answer("cd ../Files/online", false),
            new Answer("cd ../../Files/online", true),
            new Answer("cd .././Files/online", false),
            new Answer("cd .././../Files/online", false)
          ]
        ),
        new Question(
          "Kterým příkazem se dostaneme do svého domovského adresáře?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cd -", false),
            new Answer("cd ~", true),
            new Answer("cd", true),
            new Answer("cd..", false)
          ]
        ),
        new Question("Přesouváme pomocí příkazu:", QuestionTypes.CHECKBOX, [
          new Answer("ls ..", false),
          new Answer("ls", false),
          new Answer("mv", true),
          new Answer("cd", false)
        ]),
        new Question(
          "Následující příkaz/y vytvoří více souborů:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("touch sound{a..d}.mp3", true),
            new Answer("touch {a..d}", true),
            new Answer("touch sound{a..d}", true),
            new Answer("touch {a..d}.mp3", true)
          ]
        ),
        new Question(
          "Který příkaz slouží pro vypsání obsahu adresáře?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("mkdir", false),
            new Answer("pwd", false),
            new Answer("tree", true),
            new Answer("cat", false),
            new Answer("wget", false)
          ]
        ),
        new Question(
          "Jak zkopírujeme adresář DIR s celým obsahem do adresáře NEW?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cp DIR NEW", false),
            new Answer("cp -r DIR NEW", true),
            new Answer("mv -r DIR NEW", false),
            new Answer("cp * NEW", false),
            new Answer("cp NEW DIR", false)
          ]
        ),
        new Question(
          "Mohu v příkazu (např. ls) použít více přepínačů zároveň?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Ano. Můžu napsat např. ls -l -t", true),
            new Answer("Ano. Můžu napsat např. ls -lt", true),
            new Answer("Ne. Vždy můžu použít maximálně jeden přepínač.", false),
            new Answer(
              "Mohu použít více přepínačů, vykoná se ale jen ten první.",
              false
            )
          ]
        ),
        new Question(
          "Máme adresář s názvem Doklady, který obsahuje nějaké dokumenty. Jak vytvoříme kopii tohoto adresáře bez jeho obsahu?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cp Doklady kopie", true),
            new Answer("cp kopie Doklady", false),
            new Answer("cp -r Doklady", false),
            new Answer("cp -r Doklady kopie", false),
            new Answer("cp -r kopie Doklady", false)
          ]
        ),
        new Question(
          "Chci si zobrazit prvních 5 řádků ze souboru ahoj.txt. Použiji:",
          QuestionTypes.CHECKBOX,
          [
            new Answer("cat 5 ahoj.txt", false),
            new Answer("tail ahoj.txt", false),
            new Answer("head ahoj.txt", false),
            new Answer("head -n5 ahoj.txt", true),
            new Answer("head -5 ahoj.txt", true)
          ]
        ),
        new Question(
          "Můžu příkazem rm mazat soubory i adresáře?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Adresáře můžu mazat výhradně příkazem rmdir.", false),
            new Answer(
              "Můžu, ale s jednou výjimkou. Příkaz rm nedokáže smazat prázdný adresář.",
              true
            ),
            new Answer(
              "Můžu, ale při mazání adresářů musím pro příkaz rm použít přepínač -r.",
              true
            )
          ]
        )
      ]),
      new Test("3. Lekce: Dokumentace", "l3", [
        new Question(
          "Jaký je správný zápis pro zobrazení manuálové stránky příkazu mv?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("manual mv", false),
            new Answer("mv man", false),
            new Answer("man mv", true),
            new Answer("mv --man", false)
          ]
        ),
        new Question(
          "Jak se dostanu z manuálových stránek pryč?",
          QuestionTypes.CHECKBOX,
          [
            new Answer("Pomocí klávesy backspace", false),
            new Answer("Pomocí příkazu quit", false),
            new Answer("Pomocí klávesy Esc", false),
            new Answer("Pomocí klávesy q", true),
            new Answer(
              "Nijak. Jakmile je jednou otevřu, jsem v nich navždy.",
              false
            )
          ]
        )
      ])
    ]),
    new Course("Python Akademie", "python", "engetoB", [])
  ];

  getCourses(): Course[] {
    return JSON.parse(JSON.stringify(this.courses));
  }

  loadCoursesForGroup(userGroup: string): Course[] {
    console.log("course-provider, filtered courses:");
    console.log(
      this.getCourses().filter(course => course.userGroup === userGroup)
    );
    return this.getCourses().filter(course => course.userGroup === userGroup);
  }
}
