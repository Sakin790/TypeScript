class User {
  //properties
  username: string;
  age: number;

  //constructor
  constructor(username: string, age: number) {
    this.username = username;
    this.age = age;
  }
  //method
  displayName(): void {
    console.log(`This is ${this.username}`);
  }
}

let user1 = new User("Sakin", 22);
console.log(user1);
user1.displayName();

//What is inheritance
/* Mone koro tumi ekta class banaicho , akhon tumi new ekta class banabe
r tumi chaccho ager class er properties gulo new class er moddhe rakhte
 * inheritance => copy from,
* syntax => class new_Class extends old_class
* inheritance er moddhe super key word use korte hoi , 
*/

class Student extends User {
  gpa: number;

  constructor(username: string, age: number, gpa: number) {
    super(username, age); // agulo ager class theke niyechi
    this.gpa = gpa;
  }
}
let mahid = new Student("mahid", 12, 5);
console.log(mahid);
