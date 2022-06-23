enum Role {
    ADMIN = 5,
    READ_ONLY_USER,
    ANNOYMOUS
}
const person : {
    name: string
    age: number
    hobbies: string[]
    role: Role
}= {
  name: "Sid Zhang",
  age: 20,
  hobbies: ['Sports', 'Cooking'],
  role: Role.ADMIN 
};
console.log(person.role)
person.role[1] = 'kkk'
console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby)
}