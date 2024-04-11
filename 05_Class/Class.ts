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
user1.displayName()


