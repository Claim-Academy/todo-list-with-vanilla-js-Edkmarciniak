const root = document.querySelector("#root");

const todo = await fetch("https://jsonplaceholder.typicode.com/todos");

const foxTrot = await todo.json();

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

  const bioCardsHTML = foxTrot.map(createId).join("");

  root.innerHTML = bioCardsHTML;