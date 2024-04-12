var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var student = /** @class */ (function () {
    //constructor
    function student(studentName, StudentID, Divition) {
        this.name = studentName;
        this.userID = StudentID;
        this.group = Divition;
    }
    //method
    student.prototype.studentDetails = function () {
        console.log("Welcome ".concat(this.name, " to ").concat(this.group, " group your roll is ").concat(this.userID));
    };
    return student;
}());
var user1 = new student("Sakin", 12, "Science");
user1.studentDetails();
console.log(user1.name);
//inheitanat class new_Class extends old_class
var studentInfo = /** @class */ (function (_super) {
    __extends(studentInfo, _super);
    function studentInfo(studentName, StudentID, Divition, FatherName, MotherName, BloodGroup) {
        var _this = _super.call(this, studentName, StudentID, Divition) || this;
        (_this.BloodGroup = BloodGroup),
            (_this.FatherName = FatherName),
            (_this.MotherName = MotherName);
        return _this;
    }
    return studentInfo;
}(student));
var user2 = new studentInfo("Rini", 12, "Science", "Abdul_Rob", "SHALINA", "o+");
console.log(user2);
