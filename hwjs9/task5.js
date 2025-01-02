/// task 5 

const users = [
    { name: "Анна", email: "anna@example.com", age: 25 },
    { name: "Петро", email: "petro@example.com", age: 28 },
    { name: "Марія", email: "maria@example.com", age: 22 }
];

for (const { name, email, age } of users) {
    console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}