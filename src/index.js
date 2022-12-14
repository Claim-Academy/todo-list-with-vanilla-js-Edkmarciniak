const root = document.querySelector("#root");

const todo = await fetch("https://jsonplaceholder.typicode.com/todos");

const list = await todo.json();

console.log(list);

