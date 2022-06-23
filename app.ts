const person : {
    name: string
    age: number
    hobbies: string[]
    role: [number, string]
}= {
  name: "Sid Zhang",
  age: 20,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author']
};
person.role.push('admin');
person.role[1] = 'kkk'
console.log(person.name);

for (const role of person.role) {
    console.log(role)
}

for (const hobby of person.hobbies) {
    console.log(hobby)
}