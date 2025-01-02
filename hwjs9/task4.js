/// task 4

const person = {
    firstName: "Олександр",
    lastName: "Сидоров",
    age: 30
};

person.email = "oleksandr.sidorov@example.com";
delete person.age;

console.log(person);