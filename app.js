var person = {
    name: "Sid Zhang",
    age: 20,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
person.role.push('admin');
person.role[1] = 'kkk';
console.log(person.name);
for (var _i = 0, _a = person.role; _i < _a.length; _i++) {
    var role = _a[_i];
    console.log(role);
}
for (var _b = 0, _c = person.hobbies; _b < _c.length; _b++) {
    var hobby = _c[_b];
    console.log(hobby);
}
