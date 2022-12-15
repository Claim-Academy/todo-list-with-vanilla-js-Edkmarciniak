// Initial const
const root = document.querySelector("#root");

let numbers = "";

// Function declarations/expressions
function createId(user) {
    return `
    <section class="bg-gradient-to-r from-blue-500 to-green-500 text-black p-10 ">
    <h2 UserID: ${user.userId} </h2>

    <ul>
      <li>ID Number: ${user.id}</li>
      <li>Title of User: ${user.title}</li>
      <li>Task Complete: ${user.completed}</li>
    </ul>
   </section>
    `;
  }

function filterByIdNumber(users, searchNumbers) {
  return users.filter((user) => searchNumbers.includes(user.id));
}

  // Business logic
  const todo = await fetch("https://jsonplaceholder.typicode.com/todos");
  const foxTrot = await todo.json();
  const bioCardsHTML = foxTrot.map(createId).join("");

  root.classList.add("container", "mx-auto", "justify-center", );

  root.innerHTML = `
  <label for="search" class="sr-only">Search</label>
  <input type="search" id="search" placeholder="🔍" />
  <main class="items-center grid grid-cols-3 gap-4">
  ${bioCardsHTML}
</main
  `;

  const search = document.querySelector("input");

  search.addEventListener("keydown", (event) => {
    numbers += event.key;
    const filteredUsers = filterByIdNumber(foxTrot, numbers);

    console.log(filteredUsers);
  });

