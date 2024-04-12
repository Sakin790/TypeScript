class student {
  //properties
  name: string;
  userID: number;
  group: string;
  //constructor
  constructor(studentName: string, StudentID: number, Divition: string) {
    this.name = studentName;
    this.userID = StudentID;
    this.group = Divition;
  }
  //method

  studentDetails() {
    console.log(
      `Welcome ${this.name} to ${this.group} group your roll is ${this.userID}`
    );
  }
}

const user1 = new student("Sakin", 12, "Science");
user1.studentDetails();
console.log(user1.name);

//inheitanat class new_Class extends old_class

class studentInfo extends student {
  FatherName: string;
  MotherName: string;
  BloodGroup: string;
  constructor(
    studentName: string,
    StudentID: number,
    Divition: string,
    FatherName: string,
    MotherName: string,
    BloodGroup: string
  ) {
    super(studentName, StudentID, Divition);
    (this.BloodGroup = BloodGroup),
      (this.FatherName = FatherName),
      (this.MotherName = MotherName);
  }
}

const user2 = new studentInfo(
  "Rini",
  12,
  "Science",
  "Abdul_Rob",
  "SHALINA",
  "o+"
);
console.log(user2);
