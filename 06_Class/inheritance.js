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
var User = /** @class */ (function () {
    //constructor
    function User(username, age) {
        this.username = username;
        this.age = age;
    }
    //method
    User.prototype.displayName = function () {
        console.log("This is ".concat(this.username));
    };
    return User;
}());
var user1 = new User("Sakin", 22);
console.log(user1);
user1.displayName();
//What is inheritance
/* Mone koro tumi ekta class banaicho , akhon tumi new ekta class banabe
r tumi chaccho ager class er properties gulo new class er moddhe rakhte
 * inheritance => copy from,
* syntax => class new_Class extends old_class
* inheritance er moddhe super key word use korte hoi ,
*/
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(username, age, gpa) {
        var _this = _super.call(this, username, age) || this; // agulo ager class theke niyechi
        _this.gpa = gpa;
        return _this;
    }
    return Student;
}(User));
var mahid = new Student("mahid", 12, 5);
console.log(mahid);
