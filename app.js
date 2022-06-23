var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY_USER"] = 6] = "READ_ONLY_USER";
    Role[Role["ANNOYMOUS"] = 7] = "ANNOYMOUS";
})(Role || (Role = {}));
var person = {
    name: "Sid Zhang",
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: Role.ADMIN
};
console.log(person.role);
person.role[1] = 'kkk';
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
