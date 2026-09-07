document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     THE ITSU × RAKHU SOCIETY
     Interactive archive
  ========================================================== */


  /* =========================================================
     MENU
  ========================================================== */

  const menuButton = document.getElementById("menuButton");
  const drawer = document.getElementById("indexDrawer");
  const drawerClose = document.getElementById("drawerClose");

  function openDrawer() {
    if (!drawer) return;

    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");

    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "true");
    }
  }

  function closeDrawer() {
    if (!drawer) return;

    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");

    if (menuButton) {
      menuButton.setAttribute("aria-expanded", "false");
    }
  }

  if (menuButton) {
    menuButton.addEventListener("click", openDrawer);
  }

  if (drawerClose) {
    drawerClose.addEventListener("click", closeDrawer);
  }

  document.querySelectorAll(".index-drawer nav a").forEach(link => {
    link.addEventListener("click", closeDrawer);
  });


  /* =========================================================
     PHOTO ARCHIVE
  ========================================================== */

  const photoExtensions = [
    ".jpg",
    ".jpeg",
    ".png",
    ".webp"
  ];

  document.querySelectorAll(".memory-photo img").forEach(img => {

    const base = img.dataset.base;

    if (!base) return;

    let extensionIndex = 0;

    function tryNextImage() {

      if (extensionIndex >= photoExtensions.length) {
        img.style.opacity = "0";
        return;
      }

      const extension = photoExtensions[extensionIndex];

      extensionIndex++;

      img.src = "./" + base + extension;
    }

    img.addEventListener("error", tryNextImage);

    tryNextImage();

  });


  document.querySelectorAll(".memory-photo").forEach(photo => {

    photo.addEventListener("click", () => {

      document
        .querySelectorAll(".memory-photo")
        .forEach(other => {
          other.classList.remove("selected-photo");
        });

      photo.classList.add("selected-photo");

    });

  });


  /* =========================================================
     I WISH YOU WERE HERE
  ========================================================== */

  const wishButton = document.getElementById("wishButton");
  const wishResponse = document.getElementById("wishResponse");

  const wishResponses = [
    "I wish you were here too.",
    "I you know how rarely I say this, but I told you so :)",
    "Breaking news: I miss you too. More than I previously reported.",
    "Same, can we start a coffee shop together already?",
    "Me too! I would go through our first date again to have you next to me (it wasn’t torture, but you know how I felt)",
    "Book a flight back. NOW.",
    "I miss you more than daily coffee and you know that is saying something.",
    "I think a midnight coffee run with you would heal me, but I will have to wait until April.",
    "I miss you so much it's basically a full-time feeling now.",
    "Same energy, except mine has extra sighing.",
    "Feels stupid how much time we spent just fighting right? You should just apologize next time :)",
    "Me too. Come here immediately.",
    "I do too my love, but we’re us in all geographies <3",
    "I do too, consider this an official complaint against geography.",
    "Me too. Estonia is being very inconvenient about this.",
    "Me too. And I'd probably annoy you within seven minutes."
  ];

  if (wishButton && wishResponse) {

    wishButton.addEventListener("click", () => {

      const current = wishResponse.textContent;

      let next;

      do {

        next =
          wishResponses[
            Math.floor(Math.random() * wishResponses.length)
          ];

      } while (
        next === current &&
        wishResponses.length > 1
      );

      wishResponse.style.opacity = "0";

      setTimeout(() => {

        wishResponse.textContent = next;
        wishResponse.style.opacity = "1";

      }, 180);

    });

  }


  /* =========================================================
     QUIZ
  ========================================================== */

  const quizQuestions = [

    {
      question:
        "Who is more likely to say “let's just do it” before thinking it through?",

      options: [
        "Itsu",
        "Rakhu",
        "Both of us",
        "Neither — we're extremely sensible"
      ],

      answer: 2
    },

    {
      question:
        "Who is more likely to turn a tiny inconvenience into a full investigation?",

      options: [
        "Itsu",
        "Rakhu",
        "Both of us",
        "Depends how tired we are"
      ],

      answer: 2
    },

    {
      question:
        "What is the official founding date of the Society?",

      options: [
        "14.02.2022",
        "16.04.2022",
        "01.01.2023",
        "Whenever we decided this was serious"
      ],

      answer: 1
    },

    {
      question:
        "What is our greatest collective talent?",

      options: [
        "Planning perfectly",
        "Being on time",
        "Making memories out of random things",
        "Remembering where we put things"
      ],

      answer: 2
    },

    {
      question:
        "What is the Society's official duration?",

      options: [
        "Until Estonia",
        "Until graduation",
        "Five years",
        "Forever"
      ],

      answer: 3
    }

  ];

  let quizIndex = 0;
  let quizScore = 0;
  let quizAnswered = false;

  const quizQuestion =
    document.getElementById("quizQuestion");

  const quizOptions =
    document.getElementById("quizOptions");

  const quizNext =
    document.getElementById("quizNext");

  const quizResult =
    document.getElementById("quizResult");


  function renderQuizQuestion() {

    if (!quizQuestion || !quizOptions) return;

    const question =
      quizQuestions[quizIndex];

    quizAnswered = false;

    quizQuestion.textContent =
      `${quizIndex + 1}. ${question.question}`;

    quizOptions.innerHTML = "";

    question.options.forEach((option, index) => {

      const button =
        document.createElement("button");

      button.className = "quiz-option";
      button.type = "button";
      button.textContent = option;

      button.addEventListener("click", () => {

        if (quizAnswered) return;

        quizAnswered = true;

        document
          .querySelectorAll(".quiz-option")
          .forEach(btn => {
            btn.disabled = true;
          });

        if (index === question.answer) {

          button.classList.add("correct");
          quizScore++;

        } else {

          button.classList.add("incorrect");

          const correctButton =
            document.querySelectorAll(".quiz-option")[
              question.answer
            ];

          if (correctButton) {
            correctButton.classList.add("correct");
          }

        }

      });

      quizOptions.appendChild(button);

    });

  }


  function resetQuiz() {

    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;

    if (quizResult) {
      quizResult.textContent = "";
    }

    if (quizNext) {
      quizNext.textContent =
        "NEXT QUESTION →";
    }

    renderQuizQuestion();

  }


  if (quizNext) {

    quizNext.addEventListener("click", () => {

      if (quizIndex < quizQuestions.length - 1) {

        quizIndex++;
        renderQuizQuestion();

      } else {

        quizQuestion.textContent =
          "Examination complete.";

        quizOptions.innerHTML = "";

        quizResult.textContent =
          `You scored ${quizScore} / ${quizQuestions.length}. ` +
          `Official Society assessment: ` +
          (
            quizScore >= 4
              ? "Excellent. You may remain members."
              : "Further study is required. Fortunately, we have forever."
          );

        quizNext.textContent =
          "START AGAIN ↻";

        quizNext.onclick = resetQuiz;

      }

    });

  }

  renderQuizQuestion();


  /* =========================================================
     LONG-DISTANCE ARCADE
  ========================================================== */

  const defaultGames = [

    {
      title: "Codenames",

      description:
        "Team up, compete, and discover how differently your brains interpret one word.",

      url: "https://codenames.game/"
    },

    {
      title: "Gartic Phone",

      description:
        "Draw badly. Guess badly. Laugh at each other's artistic crimes.",

      url: "https://garticphone.com/"
    },

    {
      title: "GeoGuessr",

      description:
        "Drop into a random place and see who can figure out where you are.",

      url: "https://www.geoguessr.com/"
    }

  ];

  const gameGrid =
    document.getElementById("gameGrid");

  const addGameButton =
    document.getElementById("addGameButton");

  const arcadeCount =
    document.getElementById("arcadeCount");


  function loadGames() {

    let savedGames = [];

    try {

      savedGames =
        JSON.parse(
          localStorage.getItem("itsuRakhuGames")
        ) || [];

      if (!Array.isArray(savedGames)) {
        savedGames = [];
      }

    } catch (error) {

      savedGames = [];

    }

    return [
      ...defaultGames,
      ...savedGames
    ];

  }


  function escapeHtml(value) {

    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  }


  function escapeAttribute(value) {

    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll('"', "&quot;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;");

  }


  function renderGames() {

    if (!gameGrid) return;

    const games = loadGames();

    gameGrid.innerHTML = "";

    games.forEach(game => {

      const card =
        document.createElement("article");

      card.className = "game-card";

      card.innerHTML = `
        <h3>${escapeHtml(game.title)}</h3>

        <p>${escapeHtml(game.description)}</p>

        <a
          href="${escapeAttribute(game.url)}"
          target="_blank"
          rel="noopener noreferrer"
        >
          PLAY / VISIT →
        </a>
      `;

      gameGrid.appendChild(card);

    });

    if (arcadeCount) {

      arcadeCount.textContent =
        `${String(games.length).padStart(2, "0")} APPROVED GAMES`;

    }

  }


  if (addGameButton) {

    addGameButton.addEventListener("click", () => {

      const title =
        prompt("What should we call the game?");

      if (!title) return;

      const description =
        prompt("Short description?") ||
        "A game for two members of the Society.";

      const url =
        prompt("Paste the game link:");

      if (!url) return;

      let savedGames = [];

      try {

        savedGames =
          JSON.parse(
            localStorage.getItem("itsuRakhuGames")
          ) || [];

        if (!Array.isArray(savedGames)) {
          savedGames = [];
        }

      } catch (error) {

        savedGames = [];

      }

      savedGames.push({
        title,
        description,
        url
      });

      localStorage.setItem(
        "itsuRakhuGames",
        JSON.stringify(savedGames)
      );

      renderGames();

    });

  }

  renderGames();


  /* =========================================================
     DATE GENERATOR
  ========================================================== */

  const dateButton =
    document.getElementById("dateButton");

  const dateResult =
    document.getElementById("dateResult");

  const dateIdeas = [

    "Cook the same meal together over video call.",

    "Order each other dinner without telling the other person what it is.",

    "Watch the same terrible film and provide live commentary.",

    "Dress up for absolutely no reason and have a fancy virtual dinner.",

    "Play 20 questions — but make every question increasingly ridiculous.",

    "Build a shared Spotify playlist and listen to it together.",

    "Take each other on a virtual tour of your current neighbourhood.",

    "Have a PowerPoint night. The more unnecessary the topic, the better.",

    "Recreate one of our old dates from wherever we are.",

    "Open Google Maps and randomly choose somewhere we will visit together.",

    "Have a nostalgia night and look through old photographs.",

    "Make each other a five-song playlist with absolutely no explanation.",

    "Order the same dessert and rate it like extremely serious food critics.",

    "Plan our next trip together.",

    "Have a completely phone-free dinner — except for the call.",

    "Draw each other without looking at the paper.",

    "Read something to each other before going to sleep.",

    "Make a ridiculous bucket list for our next five years.",

    "Have a 'first date' again — pretend we don't know each other.",

    "Do absolutely nothing together. Sometimes that's the date."

  ];


  if (dateButton && dateResult) {

    dateButton.addEventListener("click", () => {

      const randomIdea =
        dateIdeas[
          Math.floor(
            Math.random() * dateIdeas.length
          )
        ];

      dateResult.style.opacity = "0";

      setTimeout(() => {

        dateResult.textContent =
          randomIdea;

        dateResult.style.opacity = "1";

      }, 180);

    });

  }


  /* =========================================================
     MODAL
  ========================================================== */

  const modal =
    document.getElementById("modal");

  const modalClose =
    document.getElementById("modalClose");

  const modalBackdrop =
    document.getElementById("modalBackdrop");

  const modalTitle =
    document.getElementById("modalTitle");

  const modalBody =
    document.getElementById("modalBody");

  let activeVideo = null;


  function openModal(title, body) {

    if (
      !modal ||
      !modalTitle ||
      !modalBody
    ) {
      return;
    }

    modalTitle.textContent = title;
    modalBody.innerHTML = body;

    modal.classList.add("open");
    modal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.classList.add(
      "modal-open"
    );

    const modalCard =
      modal.querySelector(".modal-card");

    if (modalCard) {
      modalCard.focus();
    }

  }


  function stopActiveVideo() {

    if (!activeVideo) return;

    try {

      activeVideo.pause();
      activeVideo.removeAttribute("src");
      activeVideo.load();

    } catch (error) {
      /* Nothing else required. */
    }

    activeVideo = null;

  }


  function closeModal() {

    if (!modal) return;

    stopActiveVideo();

    modal.classList.remove("open");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.classList.remove(
      "modal-open"
    );

    setTimeout(() => {

      if (!modal.classList.contains("open")) {

        if (modalBody) {
          modalBody.innerHTML = "";
        }

        if (modalTitle) {
          modalTitle.textContent = "";
        }

      }

    }, 250);

  }


  if (modalClose) {
    modalClose.addEventListener(
      "click",
      closeModal
    );
  }


  if (modalBackdrop) {
    modalBackdrop.addEventListener(
      "click",
      closeModal
    );
  }


  document.addEventListener(
    "keydown",
    event => {

      if (event.key === "Escape") {
        closeModal();
      }

    }
  );


  /* =========================================================
     OPEN WHEN — SECTION 4 VIDEO HANDLER
  ========================================================== */

  document
    .querySelectorAll(".envelope")
    .forEach(envelope => {

      envelope.addEventListener(
        "click",
        () => {

          const title =
            envelope.dataset.title ||
            "Private correspondence";

          const videoUrl =
            envelope.dataset.video;

          if (!videoUrl) {

            openModal(
              title,
              `
                <div class="video-error">
                  <strong>Correspondence unavailable.</strong>
                  This envelope is waiting for its video.
                </div>
              `
            );

            return;
          }


          /*
            Important:

            The URL comes directly from the data-video
            attribute in index.html.

            It must be a plain URL, not a Markdown link.
          */

          const safeTitle =
            escapeAttribute(title);

          const safeUrl =
            escapeAttribute(videoUrl);


          openModal(
            title,
            `
              <div class="modal-video-wrap">

                <div
                  class="video-loading"
                  id="videoLoading"
                >
                  LOADING PRIVATE CORRESPONDENCE…
                </div>

                <video
                  id="sectionVideo"
                  class="modal-video"
                  controls
                  playsinline
                  preload="auto"
                  title="${safeTitle}"
                >
                  <source
                    src="${safeUrl}"
                    type="video/mp4"
                  >

                  Your browser does not support HTML5 video.
                </video>

                <div
                  class="video-error"
                  id="videoError"
                  hidden
                >
                  <strong>Unable to play this correspondence.</strong>
                  The video could not be loaded. Please check the
                  Cloudinary file or try again.
                </div>

              </div>
            `
          );


          const videoElement =
            document.getElementById(
              "sectionVideo"
            );

          const loadingElement =
            document.getElementById(
              "videoLoading"
            );

          const errorElement =
            document.getElementById(
              "videoError"
            );


          if (!videoElement) return;

          activeVideo =
            videoElement;


          /*
            Hide the loading message once enough
            metadata has loaded.
          */

          videoElement.addEventListener(
            "loadedmetadata",
            () => {

              if (loadingElement) {
                loadingElement.hidden = true;
              }

            },
            { once: true }
          );


          /*
            Also hide loading once playback actually starts.
          */

          videoElement.addEventListener(
            "playing",
            () => {

              if (loadingElement) {
                loadingElement.hidden = true;
              }

            },
            { once: true }
          );


          /*
            Show a useful error instead of leaving
            the user staring at a blank modal.
          */

          videoElement.addEventListener(
            "error",
            () => {

              if (loadingElement) {
                loadingElement.hidden = true;
              }

              if (errorElement) {
                errorElement.hidden = false;
              }

            },
            { once: true }
          );


          /*
            Start playback after the video element has
            been inserted into the modal.

            If the browser blocks autoplay, the normal
            video controls remain available.
          */

          setTimeout(() => {

            if (
              !videoElement ||
              !modal.classList.contains("open")
            ) {
              return;
            }

            const playPromise =
              videoElement.play();

            if (
              playPromise &&
              typeof playPromise.catch === "function"
            ) {

              playPromise.catch(() => {

                /*
                  Autoplay being blocked is normal
                  on some browsers.

                  The video controls are still visible,
                  so the user can press play.
                */

                if (loadingElement) {
                  loadingElement.hidden = true;
                }

              });

            }

          }, 100);

        }
      );

    });


  /* =========================================================
     VAULT
  ========================================================== */

  document
    .querySelectorAll(".vault-card")
    .forEach(card => {

      const button =
        card.querySelector(".vault-open");

      const status =
        card.querySelector(".vault-status");

      if (!button || !status) return;


      button.addEventListener(
        "click",
        () => {

          const month =
            Number(card.dataset.month);

          const day =
            Number(card.dataset.day);

          const today =
            new Date();

          const currentMonth =
            today.getMonth() + 1;

          const currentDay =
            today.getDate();

          const isUnlocked =
            currentMonth === month &&
            currentDay === day;


          if (isUnlocked) {

            status.textContent =
              "UNLOCKED";

            status.style.color =
              "#e4c76b";

            button.textContent =
              "OPEN →";


            button.onclick = () => {

              const title =
                card.querySelector("h3")?.textContent ||
                "A message from the Society";

              openModal(
                title,
                `
                  <p style="
                    font-size:22px;
                    line-height:1.35;
                  ">
                    This is where your private note for
                    this occasion will go.
                  </p>
                `
              );

            };

          } else {

            status.textContent =
              "SEALED UNTIL THE APPOINTED DATE";

            openModal(
              "Still sealed.",
              `
                <p style="
                  font-size:22px;
                  line-height:1.35;
                ">
                  Nice try.
                </p>

                <p style="
                  font-size:20px;
                  line-height:1.35;
                ">
                  The Society takes temporal security
                  extremely seriously.
                </p>
              `
            );

          }

        }
      );

    });


  /* =========================================================
     SMALL INTERACTION — FADE IN
  ========================================================== */

  if ("IntersectionObserver" in window) {

    const observer =
      new IntersectionObserver(
        entries => {

          entries.forEach(entry => {

            if (entry.isIntersecting) {

              entry.target.classList.add(
                "visible"
              );

              observer.unobserve(
                entry.target
              );

            }

          });

        },
        {
          threshold: 0.12
        }
      );


    document
      .querySelectorAll(
        ".section-heading, .wish-machine, .date-machine, .quiz-box"
      )
      .forEach(element => {

        observer.observe(element);

      });

  }

});
