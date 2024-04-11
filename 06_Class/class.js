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
user1.displayName();
