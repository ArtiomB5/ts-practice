class User036 {
  name: string;
  age: number;

  constructor();

  //4 function overloads
  constructor(constructors_name: string);
  constructor(constructors_age: number);
  constructor(constructors_name: string, constructors_age: number);

  constructor(constructors_name_or_age?: string | number, constructors_age?: number) {
    if (typeof constructors_name_or_age === "string") {
      this.name = constructors_name_or_age;
    } else if (typeof constructors_name_or_age === "number") {
      this.age = constructors_name_or_age;
    }

    if (typeof constructors_age === "number") {
        this.age = constructors_age;
      }
  }
  //4 function overloads

  //in typescript we can't type constructor return
  //constructor can't use generic parameters
}

const user036_1 = new User036("Test User Name 1");
const user036_2 = new User036();
const user036_3 = new User036(33);
const user036_4 = new User036("Test User Name 2", 33);
