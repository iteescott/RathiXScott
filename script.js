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

     There are 16 questions in the master bank.

     Each quiz attempt randomly selects exactly 5 UNIQUE
     questions from the bank.

     The selected questions are then presented in random
     order.
  ========================================================== */

  const quizQuestions = [

    {
      question:
        "Where was our first date?",

      options: [
        "Como’s 32nd",
        "Adani B2 staircase",
        "Starbucks 32nd",
        "Trampoline park"
      ],

      answer: 0
    },

    {
      question:
        "Where was our first kiss?",

      options: [
        "Como’s 32nd",
        "Adani B2 staircase",
        "Rakhu’s car",
        "Trampoline park"
      ],

      answer: 1
    },

    {
      question:
        "Where did Rakhu first say “I Love you”?",

      options: [
        "Adani B2 staircase",
        "Satya The Hermitage",
        "Rakhu’s car",
        "Big Chill Cafe"
      ],

      answer: 2
    },

    {
      question:
        "When did Itsu first say “I Love you”?",

      options: [
        "16th April, 2023",
        "25th Oct, 2022",
        "22nd June, 2022",
        "A random Tuesday"
      ],

      answer: 1
    },

    {
      question:
        "When was our first date?",

      options: [
        "11th Mar, 2022",
        "20th Feb, 2022",
        "17th Mar, 2022",
        "1st Apr, 2022"
      ],

      answer: 0
    },

    {
      question:
        "Where did we go for our 1st anniversary?",

      options: [
        "CandleLight Concert",
        "Westin",
        "Agra",
        "Pullman"
      ],

      answer: 3
    },

    {
      question:
        "What is Itsu’s favourite global city?",

      options: [
        "Madrid",
        "NYC",
        "London",
        "Anywhere Rakhu is ;)"
      ],

      answer: 3
    },

    {
      question:
        "What was the colour of Itsu’s first highlights?",

      options: [
        "Silver",
        "Brown",
        "Burgundy",
        "Itsu never got highlights"
      ],

      answer: 1
    },

    {
      question:
        "In what year did Itsu first go abroad?",

      options: [
        "2016",
        "2014",
        "2015",
        "2012"
      ],

      answer: 3
    },

    {
      question:
        "When did Itee join her first job?",

      options: [
        "Sept 13",
        "Aug 13",
        "Sept 12",
        "Aug 15"
      ],

      answer: 2
    },

    {
      question:
        "How much approximately did we spend on our first date?",

      options: [
        "2000",
        "2600",
        "3000",
        "3600"
      ],

      answer: 1
    },

    {
      question:
        "What is our song?",

      options: [
        "“Wars” by The Strumbellas",
        "“With Me All Along” by Bronze Radio Return",
        "“Why” by Sabrina Carpenter",
        "We don’t have one"
      ],

      answer: 3
    },

    {
      question:
        "What did we celebrate when we went for the CandleLight Concert?",

      options: [
        "Prakhar’s 24th Birthday",
        "Our 2nd Anniversary",
        "Itsu’s 23rd birthday",
        "2.5 years together"
      ],

      answer: 1
    },

    {
      question:
        "What was the first coding language Itsu learned?",

      options: [
        "SQL",
        "R",
        "Python",
        "Gretl"
      ],

      answer: 1
    },

    {
      question:
        "Who is most likely to say “let's just do it” before thinking it through?",

      options: [
        "Itsu",
        "Rakhu",
        "None tbh",
        "Both tbh"
      ],

      answer: 1
    },

    {
      question:
        "What was the first hill station we visited?",

      options: [
        "McLeodganj",
        "Dalhousie",
        "Manali",
        "Pathankot"
      ],

      answer: 0
    }

  ];


  /* =========================================================
     QUIZ STATE
  ========================================================== */

  const QUIZ_LENGTH = 5;

  let currentQuiz = [];
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


  /* =========================================================
     SHUFFLE

     Fisher-Yates shuffle.
  ========================================================== */

  function shuffleArray(array) {

    const shuffled = [...array];

    for (
      let i = shuffled.length - 1;
      i > 0;
      i--
    ) {

      const j =
        Math.floor(
          Math.random() * (i + 1)
        );

      [
        shuffled[i],
        shuffled[j]
      ] = [
        shuffled[j],
        shuffled[i]
      ];

    }

    return shuffled;

  }


  /* =========================================================
     CREATE NEW QUIZ

     Randomly selects 5 UNIQUE questions from the 16-question
     master bank.
  ========================================================== */

  function createNewQuiz() {

    currentQuiz =
      shuffleArray(quizQuestions)
        .slice(0, QUIZ_LENGTH);

    quizIndex = 0;
    quizScore = 0;
    quizAnswered = false;

    if (quizResult) {
      quizResult.textContent = "";
    }

    if (quizNext) {
      quizNext.textContent = "NEXT QUESTION →";
    }

    renderQuizQuestion();

  }


  /* =========================================================
     RENDER CURRENT QUESTION
  ========================================================== */

  function renderQuizQuestion() {

    if (!quizQuestion || !quizOptions) return;

    const question =
      currentQuiz[quizIndex];

    if (!question) return;

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


  /* =========================================================
     QUIZ NEXT / FINISH
  ========================================================== */

  if (quizNext) {

    quizNext.addEventListener("click", () => {

      if (!quizAnswered) {
        return;
      }


      if (quizIndex < currentQuiz.length - 1) {

        quizIndex++;

        renderQuizQuestion();

        return;

      }


      /* =====================================================
         QUIZ COMPLETE
      ====================================================== */

      quizQuestion.textContent =
        "Examination complete.";

      quizOptions.innerHTML = "";


      let assessment;

      if (quizScore === 5) {

        assessment =
          "Perfect score. The Society is extremely impressed.";

      } else if (quizScore === 4) {

        assessment =
          "Excellent. You may remain members.";

      } else if (quizScore === 3) {

        assessment =
          "Respectable. Some further Society research is advised.";

      } else if (quizScore === 2) {

        assessment =
          "Concerning. Fortunately, we have forever to study.";

      } else if (quizScore === 1) {

        assessment =
          "Further study is required. Please review the archives.";

      } else {

        assessment =
          "An absolute disaster. Fortunately, love is not graded.";

      }


      if (quizResult) {

        quizResult.textContent =
          `You scored ${quizScore} / ${currentQuiz.length}. ` +
          `Official Society assessment: ${assessment}`;

      }


      quizNext.textContent =
        "START AGAIN ↻";


      quizNext.onclick = () => {

        quizNext.onclick = null;

        createNewQuiz();

      };

    });

  }


  /* =========================================================
     START FIRST QUIZ
  ========================================================== */

  createNewQuiz();


  /* =========================================================
     SECTION 5
     FROM THE PEOPLE WHO LOVE YOU

     Videos are rendered directly into the Section 5 cards.
     This makes them native HTML5 videos rather than relying
     on iframes or external embeds.
  ========================================================== */

  const section5Videos = [

    {
      title:
        "The love you had before you knew it: Your mom",

      description:
        "A message from one of the original members of the Society.",

      url:
        "https://res.cloudinary.com/zvcnmpyk/video/upload/RXS-Sec5-AuntyVid.mp4"
    },

    {
      title:
        "The love less talked about: Your dad",

      description:
        "A message from the Society's more quietly sentimental department.",

      url:
        "https://res.cloudinary.com/zvcnmpyk/video/upload/RXS-Sec5-UncleVid.mp4"
    },

    {
      title:
        "Your Partner in crime: Chikki",

      description:
        "Evidence from someone who has clearly seen too much.",

      url:
        "https://res.cloudinary.com/zvcnmpyk/video/upload/RXS-Sec5-ChikkiVid.mp4"
    },

    {
      title:
        "12 years of togetherness: Prabhav",

      description:
        "Twelve years of history, memories, and probably several questionable decisions.",

      url:
        "https://res.cloudinary.com/zvcnmpyk/video/upload/RXS-Sec5-PrabhavVid.mp4"
    },

    {
      title:
        "No fare-thee-wells: Harsh",

      description:
        "Because apparently goodbye was never going to be quite that simple.",

      url:
        "https://res.cloudinary.com/zvcnmpyk/video/upload/RXS-Sec5-HarshVid.mp4"
    },

    {
      title:
        "Your first and favourite mentor: Madhur",

      description:
        "A message from the person who was there from the very beginning of your professional journey.",

      url:
        "https://res.cloudinary.com/zvcnmpyk/video/upload/Section5_MadhurVid.mp4"
    }

  ];


  const section5Grid =
    document.querySelector("#people .video-card-grid");


  function renderSection5Videos() {

    if (!section5Grid) return;

    section5Grid.innerHTML = "";


    section5Videos.forEach((item, index) => {

      const card =
        document.createElement("article");

      card.className = "video-card";


      const videoNumber =
        String(index + 1).padStart(2, "0");


      const videoWrap =
        document.createElement("div");

      videoWrap.className =
        "video-placeholder";


      const video =
        document.createElement("video");

      video.className =
        "section5-video";

      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";

      video.setAttribute(
        "title",
        item.title
      );

      video.setAttribute(
        "aria-label",
        item.title
      );


      const source =
        document.createElement("source");

      source.src =
        item.url;

      source.type =
        "video/mp4";

      video.appendChild(source);


      const fallback =
        document.createTextNode(
          "Your browser does not support HTML5 video."
        );

      video.appendChild(fallback);

      videoWrap.appendChild(video);


      const title =
        document.createElement("h3");

      title.textContent =
        item.title;


      const description =
        document.createElement("p");

      description.textContent =
        item.description;


      const playLabel =
        document.createElement("button");

      playLabel.type =
        "button";

      playLabel.className =
        "video-play-label";

      playLabel.textContent =
        "PLAY VIDEO →";


      playLabel.addEventListener("click", () => {

        video.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });


        const playPromise =
          video.play();


        if (
          playPromise &&
          typeof playPromise.catch === "function"
        ) {

          playPromise.catch(() => {
            /* Native controls remain available. */
          });

        }

      });


      video.addEventListener("error", () => {

        videoWrap.classList.add(
          "video-load-error"
        );


        if (
          !videoWrap.querySelector(
            ".section5-video-error"
          )
        ) {

          const errorMessage =
            document.createElement("span");

          errorMessage.className =
            "section5-video-error";

          errorMessage.textContent =
            "VIDEO UNAVAILABLE — PLEASE CHECK THE FILE";

          videoWrap.appendChild(
            errorMessage
          );

        }

      });


      card.appendChild(videoWrap);
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(playLabel);

      section5Grid.appendChild(card);

    });

  }


  renderSection5Videos();


  /* =========================================================
     LONG-DISTANCE ARCADE

     8 permanent games supplied for the Society.
  ========================================================== */

  const defaultGames = [

    {
      title:
        "Codenames",

      description:
        "Team up, compete, and discover how differently your brains interpret one word.",

      url:
        "https://codenames.game/"
    },

    {
      title:
        "Gartic Phone",

      description:
        "Draw badly. Guess badly. Laugh at each other's artistic crimes.",

      url:
        "https://garticphone.com/"
    },

    {
      title:
        "GeoGuessr",

      description:
        "Drop into a random place and see who can figure out where you are.",

      url:
        "https://www.geoguessr.com/"
    },

    {
      title:
        "AlphaGuess",

      description:
        "Narrow down a secret mystery word by guessing words before and after it.",

      url:
        "https://alphaguess.com/"
    },

    {
      title:
        "City Distance",

      description:
        "Guess the precise distance between two random global cities.",

      url:
        "https://citydistance.io/quiz/distance-guess/"
    },

    {
      title:
        "Size It Up",

      description:
        "Resize silhouettes and objects to match their true real-world proportions.",

      url:
        "https://sizeitup.games/"
    },

    {
      title:
        "Stumble Guys",

      description:
        "Race and stumble through chaotic obstacle courses until only one winner remains.",

      url:
        "https://apps.apple.com/us/app/stumble-guys/id1541153375"
    },

    {
      title:
        "Brawlhalla",

      description:
        "Battle to knock each other off the stage.",

      url:
        "https://www.brawlhalla.com/"
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


    /*
      Remove any old malformed arcade entries.

      This specifically prevents cards labelled
      "undefined" from appearing if an incomplete
      game was previously saved in localStorage.
    */

    savedGames =
      savedGames.filter(game => {

        if (!game || typeof game !== "object") {
          return false;
        }

        if (!game.title) {
          return false;
        }

        if (
          String(game.title).trim().toLowerCase() ===
          "undefined"
        ) {
          return false;
        }

        if (
          String(game.title).trim().toLowerCase() ===
          "null"
        ) {
          return false;
        }

        if (!game.url) {
          return false;
        }

        return true;

      });


    /*
      Save the cleaned list back so the malformed
      "undefined" entry is permanently removed.
    */

    try {

      localStorage.setItem(
        "itsuRakhuGames",
        JSON.stringify(savedGames)
      );

    } catch (error) {
      /* Local storage may be unavailable. */
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

    const games =
      loadGames();

    gameGrid.innerHTML = "";


    games.forEach(game => {

      const card =
        document.createElement("article");

      card.className =
        "game-card";


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
        prompt("Paste the game link?");


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

    "Clay night! Find 5 inspirations and compare the moulds.",

    "Watch a movie of Itsu's choice.",

    "Watch a movie of Rakhu's choice.",

    "Make a grid of 9 images which show how you see each other.",

    "Watch the lowest rated Netflix movie and discuss.",

    "Recommend a book and read 2 chapters of it and discuss.",

    "Play ‘We’re not really strangers’ online.",

    "Rakhu plays a song from Rathi+Scott and Itsu has to guess the song in 5 seconds. 5 rounds, then swap roles.",

    "Play (free) NYT or LinkedIn games to see who can do them faster & better.",

    "Skincare night! Masks and Rakhu’s fav nose strips.",

    "Play a game out of Long Distance Arcade.",

    "Itsu gives a word and a 7 seconds timer for Rakhu to find a song with that word in it. 5 rounds, then swap roles.",

    "Have a 'first date' again, pretend we don't know each other.",

    "Influencers decide tonight! Open IG and recreate the first couples reel on each feed.",

    "Rich-Bitch time! Share a glass of wine over the day’s updates.",

    "Dress up for absolutely no reason and have a fancy virtual dinner.",

    "Cook the same meal together over video call.",

    "Have a PowerPoint night. The more unnecessary the topic, the better."

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

        dateResult.style.opacity =
          "1";

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


    modalTitle.textContent =
      title;

    modalBody.innerHTML =
      body;


    modal.classList.add("open");


    modal.setAttribute(
      "aria-hidden",
      "false"
    );


    document.body.classList.add(
      "modal-open"
    );

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


    modal.classList.remove(
      "open"
    );


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
                  <strong>
                    Unable to play this correspondence.
                  </strong>

                  The video could not be loaded.
                  Please check the Cloudinary file or try again.

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


          videoElement.addEventListener(
            "loadedmetadata",
            () => {

              if (loadingElement) {
                loadingElement.hidden = true;
              }

            },
            { once: true }
          );


          videoElement.addEventListener(
            "playing",
            () => {

              if (loadingElement) {
                loadingElement.hidden = true;
              }

            },
            { once: true }
          );


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

     Birthday: 25 October
     Diwali: 8 November

     The dates are assigned based on the vault card title.
     This means the existing HTML does not need to change
     as long as the cards are labelled Birthday and Diwali.
  ========================================================== */

  document
    .querySelectorAll(".vault-card")
    .forEach(card => {

      const button =
        card.querySelector(".vault-open");

      const status =
        card.querySelector(".vault-status");

      const titleElement =
        card.querySelector("h3");


      if (!button || !status) return;


      const title =
        titleElement?.textContent
          ?.trim()
          .toLowerCase() || "";


      /*
        Assign the correct dates to the existing vault cards.

        Birthday = 25 October
        Diwali   = 8 November
      */

      if (title.includes("birthday")) {

        card.dataset.month = "10";
        card.dataset.day = "25";

      } else if (title.includes("diwali")) {

        card.dataset.month = "11";
        card.dataset.day = "8";

      }


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
