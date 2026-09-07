document.addEventListener("DOMContentLoaded", () => {

  /* =========================================================
     THE ITSU × RAKHU SOCIETY
     Interactive archive
  ========================================================= */


  /* ---------- MENU ---------- */

  const menuButton = document.getElementById("menuButton");
  const drawer = document.getElementById("indexDrawer");
  const drawerClose = document.getElementById("drawerClose");

  if (menuButton && drawer) {
    menuButton.addEventListener("click", () => {
      drawer.classList.add("open");
      drawer.setAttribute("aria-hidden", "false");
    });
  }

  if (drawerClose && drawer) {
    drawerClose.addEventListener("click", () => {
      drawer.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
    });
  }

  document.querySelectorAll(".index-drawer nav a").forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("open");
      drawer.setAttribute("aria-hidden", "true");
    });
  });


  /* ---------- PHOTO ARCHIVE ---------- */

  const photoExtensions = [".jpg", ".jpeg", ".png", ".webp"];

  document.querySelectorAll(".memory-photo img").forEach(img => {

    const base = img.dataset.base;

    let extensionIndex = 0;

    const tryNextImage = () => {

      if (extensionIndex >= photoExtensions.length) {
        img.style.opacity = "0";
        return;
      }

      const extension = photoExtensions[extensionIndex++];
      img.src = "./" + base + extension;
    };

    img.addEventListener("error", tryNextImage);

    tryNextImage();
  });


  /* Bring a photograph to the front when clicked/tapped */

  document.querySelectorAll(".memory-photo").forEach(photo => {

    photo.addEventListener("click", () => {

      document.querySelectorAll(".memory-photo").forEach(other => {
        other.classList.remove("selected-photo");
      });

      photo.classList.add("selected-photo");
    });

  });


  /* ---------- I WISH YOU WERE HERE ---------- */

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
    "Me too. And I'd probably annoy you within seven minutes.",
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
      } while (next === current && wishResponses.length > 1);

      wishResponse.style.opacity = "0";

      setTimeout(() => {
        wishResponse.textContent = next;
        wishResponse.style.opacity = "1";
      }, 180);

    });

  }


  /* ---------- QUIZ ---------- */

  const quizQuestions = [

    {
      question: "Who is more likely to say “let's just do it” before thinking it through?",
      options: [
        "Itsu",
        "Rakhu",
        "Both of us",
        "Neither — we're extremely sensible"
      ],
      answer: 2
    },

    {
      question: "Who is more likely to turn a tiny inconvenience into a full investigation?",
      options: [
        "Itsu",
        "Rakhu",
        "Both of us",
        "Depends how tired we are"
      ],
      answer: 2
    },

    {
      question: "What is the official founding date of the Society?",
      options: [
        "14.02.2022",
        "16.04.2022",
        "01.01.2023",
        "Whenever we decided this was serious"
      ],
      answer: 1
    },

    {
      question: "What is our greatest collective talent?",
      options: [
        "Planning perfectly",
        "Being on time",
        "Making memories out of random things",
        "Remembering where we put things"
      ],
      answer: 2
    },

    {
      question: "What is the Society's official duration?",
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

  const quizQuestion = document.getElementById("quizQuestion");
  const quizOptions = document.getElementById("quizOptions");
  const quizNext = document.getElementById("quizNext");
  const quizResult = document.getElementById("quizResult");

  function renderQuizQuestion() {

    if (!quizQuestion || !quizOptions) return;

    const question = quizQuestions[quizIndex];

    quizQuestion.textContent =
      `${quizIndex + 1}. ${question.question}`;

    quizOptions.innerHTML = "";

    question.options.forEach((option, index) => {

      const button = document.createElement("button");

      button.className = "quiz-option";
      button.textContent = option;

      button.addEventListener("click", () => {

        document
          .querySelectorAll(".quiz-option")
          .forEach(btn => btn.disabled = true);

        if (index === question.answer) {
          button.classList.add("correct");
          quizScore++;
        }

      });

      quizOptions.appendChild(button);

    });

  }

  if (quizNext) {

    quizNext.addEventListener("click", () => {

      if (quizIndex < quizQuestions.length - 1) {

        quizIndex++;
        renderQuizQuestion();

      } else {

        quizQuestion.textContent = "Examination complete.";
        quizOptions.innerHTML = "";

        quizResult.textContent =
          `You scored ${quizScore} / ${quizQuestions.length}.
           Official Society assessment:
           ${quizScore >= 4
            ? "Excellent. You may remain members."
            : "Further study is required. Fortunately, we have forever."}`;

        quizNext.textContent = "START AGAIN ↻";

        quizNext.onclick = () => {

          quizIndex = 0;
          quizScore = 0;
          quizResult.textContent = "";
          quizNext.textContent = "NEXT QUESTION →";

          renderQuizQuestion();
        };

      }

    });

  }

  renderQuizQuestion();


  /* ---------- LONG-DISTANCE ARCADE ---------- */

  const defaultGames = [
    {
      title: "Codenames",
      description: "Team up, compete, and discover how differently your brains interpret one word.",
      url: "https://codenames.game/"
    },
    {
      title: "Gartic Phone",
      description: "Draw badly. Guess badly. Laugh at each other's artistic crimes.",
      url: "https://garticphone.com/"
    },
    {
      title: "GeoGuessr",
      description: "Drop into a random place and see who can figure out where you are.",
      url: "https://www.geoguessr.com/"
    }
  ];

  const gameGrid = document.getElementById("gameGrid");
  const addGameButton = document.getElementById("addGameButton");
  const arcadeCount = document.getElementById("arcadeCount");

  function loadGames() {

    let savedGames = [];

    try {
      savedGames =
        JSON.parse(localStorage.getItem("itsuRakhuGames")) || [];
    } catch (error) {
      savedGames = [];
    }

    return [...defaultGames, ...savedGames];

  }

  function renderGames() {

    if (!gameGrid) return;

    const games = loadGames();

    gameGrid.innerHTML = "";

    games.forEach(game => {

      const card = document.createElement("article");

      card.className = "game-card";

      card.innerHTML = `
        <h3>${escapeHtml(game.title)}</h3>
        <p>${escapeHtml(game.description)}</p>
        <a href="${escapeAttribute(game.url)}"
           target="_blank"
           rel="noopener">
          PLAY / VISIT →
        </a>
      `;

      gameGrid.appendChild(card);

    });

    if (arcadeCount) {

      arcadeCount.textContent =
        `${games.length.toString().padStart(2, "0")} APPROVED GAMES`;

    }

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

  if (addGameButton) {

    addGameButton.addEventListener("click", () => {

      const title = prompt("What should we call the game?");

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
          JSON.parse(localStorage.getItem("itsuRakhuGames")) || [];
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


  /* ---------- DATE GENERATOR ---------- */

  const dateButton = document.getElementById("dateButton");
  const dateResult = document.getElementById("dateResult");

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
        dateIdeas[Math.floor(Math.random() * dateIdeas.length)];

      dateResult.style.opacity = "0";

      setTimeout(() => {

        dateResult.textContent = randomIdea;
        dateResult.style.opacity = "1";

      }, 180);

    });

  }


  /* ---------- THE VAULT ---------- */

  document.querySelectorAll(".vault-card").forEach(card => {

    const button = card.querySelector(".vault-open");
    const status = card.querySelector(".vault-status");

    if (!button || !status) return;

    button.addEventListener("click", () => {

      const month = Number(card.dataset.month);
      const day = Number(card.dataset.day);

      const today = new Date();

      const currentMonth = today.getMonth() + 1;
      const currentDay = today.getDate();

      const isUnlocked =
        currentMonth === month &&
        currentDay === day;

      if (isUnlocked) {

        status.textContent = "UNLOCKED";
        status.style.color = "#e4c76b";

        button.textContent = "OPEN →";

        button.onclick = () => {

          const title =
            card.querySelector("h3")?.textContent ||
            "A message from the Society";

          openModal(
            title,
            `
              <p style="font-size:22px;line-height:1.35;">
                This is where your private note for this occasion will go.
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
            <p style="font-size:22px;line-height:1.35;">
              Nice try.
            </p>

            <p style="font-size:20px;line-height:1.35;">
              The Society takes temporal security extremely seriously.
            </p>
          `
        );

      }

    });

  });


  /* ---------- MODAL ---------- */

  const modal = document.getElementById("modal");
  const modalClose = document.getElementById("modalClose");
  const modalBackdrop = document.getElementById("modalBackdrop");
  const modalTitle = document.getElementById("modalTitle");
  const modalBody = document.getElementById("modalBody");

  function openModal(title, body) {

    if (!modal) return;

    modalTitle.textContent = title;
    modalBody.innerHTML = body;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");

    document.body.classList.add("modal-open");

  }

  function closeModal() {

    if (!modal) return;

    /* Stop any currently playing video */

    const videos = modal.querySelectorAll("video");

    videos.forEach(video => {

      video.pause();
      video.currentTime = 0;

    });

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");

    document.body.classList.remove("modal-open");

    /* Clear modal contents after closing */

    setTimeout(() => {

      if (!modal.classList.contains("open")) {
        modalBody.innerHTML = "";
        modalTitle.textContent = "";
      }

    }, 250);

  }

  if (modalClose) {
    modalClose.addEventListener("click", closeModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener("click", closeModal);
  }

  document.addEventListener("keydown", event => {

    if (event.key === "Escape") {
      closeModal();
    }

  });


  /* ---------- OPEN WHEN ---------- */

  document.querySelectorAll(".envelope").forEach(envelope => {

    envelope.addEventListener("click", () => {

      const title =
        envelope.dataset.title ||
        "Private correspondence";

      const video =
        envelope.dataset.video;

      if (video) {

        /*
          Cloudinary provides a direct MP4 file.

          We therefore use a native HTML5 <video>
          instead of an iframe.
        */

        openModal(
          title,
          `
            <div class="modal-video-wrap">

              <video
                class="modal-video"
                controls
                playsinline
                preload="metadata"
                title="${escapeAttribute(title)}">

                <source
                  src="${escapeAttribute(video)}"
                  type="video/mp4">

                Your browser does not support HTML5 video.
              </video>

            </div>
          `
        );

        /* Start playback after the modal has rendered */

        setTimeout(() => {

          const videoElement =
            modal.querySelector(".modal-video");

          if (videoElement) {

            videoElement.play().catch(() => {
              /*
                Autoplay may be blocked by the browser.
                The controls remain available.
              */
            });

          }

        }, 120);

      } else {

        openModal(
          title,
          `
            <p style="font-size:22px;line-height:1.35;">
              This envelope is waiting for its video.
            </p>

            <p style="font-size:18px;opacity:.65;">
              Add the video URL to the
              <code>data-video</code> field
              in <code>index.html</code> when you're ready.
            </p>
          `
        );

      }

    });

  });


  /* ---------- SMALL INTERACTION: FADE-IN ---------- */

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
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
    .forEach(element => observer.observe(element));

});
