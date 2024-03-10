const collapsibles = document.querySelectorAll(".collapsible");
const loadMore = document.querySelector(".load-more");
const loadText = document.querySelector(".load-more p");
const loadChevron = document.querySelector(".load-more i");
const projectGrid = document.getElementById("project-grid");

collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsible--expanded");
  })
);

loadMore.addEventListener("click", () => {
  if (loadChevron.className === "fa-solid fa-chevron-down fa-2xl") {
    loadText.textContent = "Less";
    loadChevron.className = "fa-solid fa-chevron-up fa-2xl";
    projectGrid.innerHTML += `
<div class="project">
    <div class="card card--primary">
      <header class="card__header">
        <img src="images/todo.png" alt="" />
      </header>
      <div class="card__body">
        <h3 class="project__name">To Do App</h3>
        <p class="project__description">
          A robust ToDo application using React, showcasing my proficiency
          in front-end development. This responsive and user-friendly app
          allows seamless task management, providing users with an
          intuitive interface to add, and delete tasks.
          <a
            target="_blank"
            class="link-arrow project-link"
            href="https://to-do-app-nine-beige.vercel.app"
            >Demo</a
          >
          <a
            target="_blank"
            href="https://github.com/CodeTenzin/To-Do-App.git"
            ><button class="btn btn--outline btn--block">
              Source Code
            </button></a
          >
        </p>
      </div>
      <div class="card__footer">
        <span class="badge badge--primary badge--small">Typescript</span>
        <span class="badge badge--primary badge--small">React</span>
        <span class="badge badge--primary badge--small">Bootstrap</span>
      </div>
    </div>
  </div>

  <div class="project">
    <div class="card card--primary">
      <header class="card__header">
        <img src="images/pocket-gnews.png" alt="" />
      </header>
      <div class="card__body">
        <h3 class="project__name">Pocket GNews</h3>
        <p class="project__description">
          <!-- A low-level Node.js app with seamless interaction between GNews
          and Pocket APIs. Bookmarks news articles based on user-input.
          Utilizes OAuth 2.0 Three Legged for secure authentication and
          ensured synchronization. -->
          A low level Node.js app integrating GNews and Pocket APIs to
          bookmark news articles based on user input, employing OAuth 2.0
          Three Legged for secure authentication and synchronization.
        </p>
        <a
          target="_blank"
          href="https://github.com/CodeTenzin/Pocket-News.git"
          ><button class="btn btn--outline btn--block">
            Source Code
          </button></a
        >
      </div>
      <div class="card__footer">
        <span class="badge badge--primary badge--small">Javascript</span>
        <span class="badge badge--primary badge--small">Node.js</span>
        <span class="badge badge--primary badge--small">HTML</span>
        <span class="badge badge--primary badge--small"
          >RESTful API's</span
        >
      </div>
    </div>
  </div>

  <div class="project">
    <div class="card card--primary">
      <header class="card__header">
        <img src="images/restful-api.png" alt="" />
      </header>
      <div class="card__body">
        <h3 class="project__name">Cinematic</h3>
        <p class="project__description">
          Cinematic is a backend service designed for renting movies,
          featuring RESTful API for managing customers, genres, movies,
          and rentals. It leverages MongoDB for CRUD operations and
          incorporates Joi and the Mongoose library for validation and
          persistence.
        </p>
        <a
          target="_blank"
          href="https://github.com/CodeTenzin/Cinematic.git"
          ><button class="btn btn--outline btn--block">
            Source Code
          </button></a
        >
      </div>
      <div class="card__footer">
        <span class="badge badge--primary badge--small">Node.js</span>
        <span class="badge badge--primary badge--small">Express</span>
        <span class="badge badge--primary badge--small">MongoDB</span>
        <span class="badge badge--primary badge--small"
          >RESTful API's</span
        >
      </div>
    </div>
  </div>
  `;
  } else {
    loadText.textContent = "More Projects";
    loadChevron.className = "fa-solid fa-chevron-down fa-2xl";
    projectGrid.innerHTML = `
    <div class="project">
          <div class="card card--primary">
            <header class="card__header">
              <img src="images/game-hub.png" alt="" />
            </header>
            <div class="card__body">
              <h3 class="project__name">Video Game Discory</h3>
              <p class="project__description">
                A view game discovery app. Users can search games for various
                gaming platform, genres with sorting and search functions.
                <a
                  target="_blank"
                  class="link-arrow project-link"
                  href="https://game-hub-ten-black.vercel.app"
                  >Demo</a
                >
              </p>
              <a target="_blank" href="https://github.com/CodeTenzin/game-hub.git"
                ><button class="btn btn--outline btn--block">
                  Source Code
                </button></a
              >
            </div>
            <div class="card__footer">
              <span class="badge badge--primary badge--small">Typescript</span>
              <span class="badge badge--primary badge--small">React</span>
              <span class="badge badge--primary badge--small">Chakra UI</span>
            </div>
          </div>
        </div>

        <div class="project">
          <div class="card card--primary">
            <header class="card__header">
              <img src="images/expense-tracker.png" alt="" />
            </header>
            <div class="card__body">
              <h3 class="project__name">Expense Tracker</h3>
              <p class="project__description">
                An expense tracker form to add and filter expenses. Uses
                bootstrap and zod validation library.
                <a
                  target="_blank"
                  class="link-arrow project-link"
                  href="https://expense-tracker-ruddy-tau.vercel.app"
                  >Demo</a
                >
              </p>
              <a
                target="_blank"
                href="https://github.com/CodeTenzin/Expense-Tracker.git"
              >
                <button class="btn btn--outline btn--block">Source Code</button>
              </a>
            </div>
            <div class="card__footer">
              <span class="badge badge--primary badge--small">Typescript</span>
              <span class="badge badge--primary badge--small">React</span>
              <span class="badge badge--primary badge--small">Bootstrap</span>
              <!-- <span class="badge badge--primary badge--small">Zod</span> -->
            </div>
          </div>
        </div>

        <div class="project">
          <div class="card card--primary">
            <header class="card__header">
              <img src="images/open-weather.png" alt="" />
            </header>
            <div class="card__body">
              <h3 class="project__name">Open Weather</h3>
              <p class="project__description">
                Weather app showcasing real-time weather using react and
                openweather api. Delivers a seamless user experience with
                dynamic weather information display.
              </p>

              <a
                target="_blank"
                href="https://github.com/CodeTenzin/Open-Weather.git"
              >
                <button class="btn btn--outline btn--block">Source Code</button>
              </a>
            </div>
            <div class="card__footer">
              <span class="badge badge--primary badge--small">Typescript</span>
              <span class="badge badge--primary badge--small">React</span>
              <span class="badge badge--primary badge--small">CSS</span>
              <!-- <span class="badge badge--primary badge--small"
                >Open Weather API</span
              > -->
            </div>
          </div>
        </div>
      </div>
  `;
  }
});
