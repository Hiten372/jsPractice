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

//Q4  Count repeated words using an object.-------------->

const sentence =
  "JavaScript is powerful and JavaScript is easy to learn and practice";
let sentenceArray = sentence.split(" ");
let wordCount = {};
for (let word of sentenceArray) {
  wordCount[word] = (wordCount[word] || 0) + 1;
}
console.log(wordCount);


//Q5  Group users by city ignoring case.--------->
const users = [
  { name: "Amit Sharma", city: "Delhi" },
  { name: "Riya Singh", city: "Mumbai" },
  { name: "Karan Mehta", city: "delhi" },
  { name: "Neha Verma", city: "MUMBAI" },
  { name: "Arjun Kumar", city: "Pune" },
];

let filterUsers = users.reduce((acc, curr) => { 
  let city[curr] =city[curr];
});
console.log(filterUsers);


//Q6

//Q7 generate username using name and dob---->

const people = [
  { firstName: "Rahul", lastName: "kumar", birthday: 2002 },
  { firstName: "Priya", lastName: "kumari", birthday: 2003 },
  { firstName: "Aman", lastName: "agarwal", birthday: 2004 },
];
let user = [];
people.forEach((element) => {
  let userName = `${element.firstName.toLowerCase()}${element.lastName.toLowerCase()}${element.birthday}`;

  user.push({
    firstName: element.firstName,
    lastName: element.lastName,
    birthday: element.birthday,
    userName: userName,
  });
});
console.log(user);

//Q8
*/
//  23-july-2026--------------------->

const USERS_API = "https://jsonplaceholder.typicode.com/users";
const POSTS_API = "https://jsonplaceholder.typicode.com/posts";
const TODOS_API = "https://jsonplaceholder.typicode.com/todos";
const COMMENTS_API = "https://jsonplaceholder.typicode.com/comments";

// async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Request failed: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }
// question 1 filter users by city starting with "s" --------->
/*
async function filterByCity(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    let filteredUsers = data
      .filter((user) => user.address.city.startsWith("S"))
      .map((user) => ({
        id: user.id,
        name: user.name,
        city: user.address.city,
      }));

    console.log(filteredUsers);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
filterByCity(USERS_API);
*/

//question 2 Fetch all users and create a new array containing only each user’s id, name, email, city, and company
//name. Display the transformed array.
/*
async function summarizeData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    let summarizedData = data.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      city: user.address.city,
      company: user.company.name,
    }));
    console.log(summarizedData);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
summarizeData(USERS_API);
*/
//Fetch all users and find the user whose username is "Bret". Display a new object containing only the user’s
//name, email, phone, and website
/*
async function findUserByUsername(url, username) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    let userByName = data.find((user) => user.username === username);
    if (userByName) {
      userByName = {
        name: userByName.name,
        email: userByName.email,
        phone: userByName.phone,
        website: userByName.website,
      };
      console.log(userByName);
    } else {
      console.log(`User with username "${username}" not found.`);
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
}
findUserByUsername(USERS_API, "Bret");
*/
//Question 4 Fetch all todos and display only completed todos that belong to user ID 5. Use both conditions inside one
//filter callback
/*
async function fetchCompletedTodosByUserId(url, userId) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    let completedTodos = data.filter(
      (todo) => todo.completed === true && todo.userId === userId,
    );
    if (completedTodos.length === 0) {
      console.log(`No completed todos found for user ID ${userId}.`);
      return;
    }
    completedTodos = completedTodos.map((todo) => ({
      id: todo.id,
      title: todo.title,
      status: (todo.completed = "Completed"),
    }));

    console.log(completedTodos);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
fetchCompletedTodosByUserId(TODOS_API, 5);
*/
//Question Fetch all todos, select only completed todos, and transform each matching todo into an object containing
//todoId, title, and the text status "Completed"
/*
async function fetchCompletedTodos(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();
    let completedTodos = data.filter((todo) => todo.completed === true);
    if (completedTodos.length === 0) {
      console.log(`No completed todos found.`);
      return;
    }
    completedTodos = completedTodos.map((todo) => ({
      todoId: todo.id,
      title: todo.title,
      status: (todo.completed = "Completed"),
    }));

    console.log(completedTodos);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
fetchCompletedTodos(TODOS_API);
*/

//Question 6 Fetch all todos and find the first incomplete todo belonging to user ID 3. Display its ID, title, and completion
//status. Handle the case when no todo is found
/*
async function fetchIncompleteTodos(url, userId) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();

    let incompleteTodos = data.find(
      (todo) => todo.completed === false && todo.userId === userId,
    );
    if (!incompleteTodos) {
      console.log(`No incomplete todos found for user ID ${userId}.`);
      return;
    }
    incompleteTodos = {
      id: incompleteTodos.id,
      title: incompleteTodos.title,
      status: incompleteTodos.completed,
    };

    console.log(incompleteTodos);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
fetchIncompleteTodos(TODOS_API, 3);
*/
//Question 7 Fetch all posts and display only posts belonging to user ID 4. Transform each post so that id becomes
//postId, title becomes heading, and body becomes description.
/*
async function fetchPostsByUserId(url, userId) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }
    const data = await response.json();

    let posts = data.filter((post) => post.userId === userId);
    posts = posts.map((post) => ({
      postId: post.id,
      heading: post.title,
      description: post.body,
    }));
    console.log(posts);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
fetchPostsByUserId(POSTS_API, 4);

*/
//Question 17 Fetch posts and comments using Promise.all(). For the first five posts, create objects containing the post ID,
//title, total comment count, and a transformed comments array.
/*
async function fetchPostsWithComments(urlPosts, urlComments) {
  try {
    const [posts, comments] = await Promise.all([
      fetch(urlPosts).then((res) => res.json()),
      fetch(urlComments).then((res) => res.json()),
    ]);
    const firstFivePosts = posts.slice(0, 5);
    const result = firstFivePosts.map((post) => {
      const postComments = comments.filter(
        (comment) => comment.postId === post.id,
      );
      return {
        postId: post.id,
        title: post.title,
        commentCount: postComments.length,
        comments: postComments,
      };
    });
    console.log(result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
fetchPostsWithComments(POSTS_API, COMMENTS_API);
*/
