// practice work

console.log(
  `Helloow Developer  \nDATE:${Date().toString().split(" ").slice(0, 5).join("-")}`,
);

//date 20-july-2026 --------------------------------------------->
// Q1 filter users based on salary and covert name and department to uppercase.

/*
const emp = [
  {
    name: "hiten prasad",
    salary: 45000,
    department: "developement",
  },
  {
    name: "yash prasad",
    salary: 60000,
    department: "design",
  },
  {
    name: "nihal prasad",
    salary: 30000,
    department: "developement",
  },
  {
    name: "neha KUMARI",
    salary: 70000,
    department: "management",
  },
];

let filterUsers = emp
  .filter((info) => info.salary > 40000)
  .map((info) => ({
    name: info.name.toUpperCase(),
    salary: info.salary,
    department: info.department.toUpperCase(),
  }));
console.log(filterUsers);


//Q2 search product by keyword and category and sort by price

const products = [
  { id: 1, name: "Apple iPhone 15", category: "Mobile", price: 75000 },
  { id: 2, name: "Samsung Galaxy S24", category: "Mobile", price: 68000 },
  { id: 3, name: "Apple MacBook Air", category: "Laptop", price: 95000 },
  { id: 4, name: "Dell Inspiron Laptop", category: "Laptop", price: 62000 },
];

const searchProducts = (keyword, category) => {
  const result = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.category.toLowerCase().includes(keyword.toLowerCase()),
    )
    .sort((a, b) => a.price - b.price);
  return result.length ? result : "PRODUCT NOT FOUND";
};
console.log(searchProducts("app"));
*/

//Q3   Calculate total and average using loops/forEach, determine pass/fail, uppercase names, sort by average.
const students = [
  { name: "Aman", marks: [78, 85, 90, 67] },
  { name: "Riya", marks: [95, 92, 88, 91] },
  { name: "Karan", marks: [45, 52, 38, 60] },
];

let filterStudent = [];
students.forEach((element) => {
  let total = element.marks.reduce((acc, curr) => acc + curr, 0);
  let avg = total / element.marks.length;
  let passFail = avg >= 50 ? "Pass" : "Fail";

  filterStudent.push({
    name: element.name.toUpperCase(),
    total: total,
    average: avg.toFixed(2),
    status: passFail,
  });
});
filterStudent.sort((a, b) => a.average - b.average);
console.log(filterStudent);
