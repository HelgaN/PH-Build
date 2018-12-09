(function () {
  'use strict';

  const getElementFromTemplate = (elementTemplate) => {
    const container = document.createElement(`div`);
    container.innerHTML = elementTemplate;
    return container;
  };

  const changeView = (view) => {
    const container = document.querySelector(`.central`);
    container.innerHTML = ``;
    container.appendChild(view);
  };

  /*export const fetch = window.fetch(`https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`)
    .then(function(response) {
      if(response.status === 200) {
        return response.json();
      } else {
        throw new Error (`Ошибка соединения!`);
      }
    })
    .then((data)=> console.log(data));
  */

  const Result = {
    PAINT: `paint`,
    PHOTO: `photo`
  };
  /*
  const Questions = [
    {
      src: `https://k42.kn3.net/CF42609C8.jpg`,
      answer: Result.PAINT
    },
    {
      src: `http://i.imgur.com/1KegWPz.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `https://k42.kn3.net/D2F0370D6.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `https://i.imgur.com/DiHM5Zb.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k32.kn3.net/5C7060EC5.jpg`,
      answer: Result.PAINT
    },
    {
      src: `http://i.imgur.com/DKR1HtB.jpg`,
      answer: Result.PHOTO
    }
  ];*/
  const Questions1 = [
    {
      src: `https://k41.kn3.net/CF684A85A.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k42.kn3.net/D2F0370D6.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k42.kn3.net/CF42609C8.jpg`,
      answer: Result.PAINT
    },
    {
      src: `http://i.imgur.com/jBLSxQ9.png`,
      answer: Result.PHOTO
    },
    {
      src: `https://i.redd.it/l08jq66vul2y.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `http://i.imgur.com/1KegWPz.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `http://i.imgur.com/mz0MSsy.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `https://k37.kn3.net/47F2604E3.jpg`,
      answer: Result.PAINT
    },
    {
      src: `http://i.imgur.com/q7rBB8Y.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `http://i.imgur.com/gUeK0qE.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `http://i.imgur.com/Gvq3jc2.jpg`,
      answer: Result.PHOTO
    }
  ];

  Array.prototype.shuffle = function() {
    let m = this.length, i;
    while (m) {
      i = (Math.random() * m--) >>> 0;
      [this[m], this[i]] = [this[i], this[m]];
    }
    return this;
  };

  const Questions2 = [
    {
      src: `https://k36.kn3.net/E9B401148.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k42.kn3.net/D660F0768.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://i.redd.it/bj70zjl196kx.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `https://k35.kn3.net/2B925F44D.jpg`,
      answer: Result.PAINT
    },
    {
      src: `http://i.imgur.com/dWTKNtv.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `https://k36.kn3.net/1619797DF.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://i.imgur.com/DiHM5Zb.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `https://k41.kn3.net/FF5009BF0.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `http://i.imgur.com/GbcYNPw.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `https://k38.kn3.net/20B8A2B58.jpg`,
      answer: Result.PAINT
    },
    {
      src: `http://i.imgur.com/jP4C1IS.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `https://k37.kn3.net/695A61B3C.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k42.kn3.net/F588C1419.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k32.kn3.net/5C7060EC5.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k40.kn3.net/6A7A24F7C.jpg`,
      answer: Result.PAINT
    }
  ].shuffle();


  const Questions3pt = [
    {
      src: `https://k37.kn3.net/0F4598844.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k35.kn3.net/9ACD0AC56.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k43.kn3.net/1C4F7F5D5.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k31.kn3.net/4BF6BBF0E.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k34.kn3.net/4244FE50B.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k36.kn3.net/E9B401148.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k37.kn3.net/695A61B3C.jpg`,
      answer: Result.PAINT
    },
    {
      src: `https://k39.kn3.net/B27A12A74.jpg`,
      answer: Result.PAINT
    }
  ].shuffle();

  const Questions3ph = [
    {
      src: `http://i.imgur.com/DKR1HtB.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `https://i.imgur.com/NXlVX48.png`,
      answer: Result.PHOTO
    },
    {
      src: `https://i.redd.it/0uvt7jy0hy2y.jpg`,
      answer: Result.PHOTO
    },
     {
      src: `http://i.imgur.com/zHRZW1C.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `http://i.imgur.com/Jvzh3pk.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `https://i.imgur.com/DiHM5Zb.jpg`,
      answer: Result.PHOTO
    },
    {
      src: `http://i.imgur.com/mz0MSsy.jpg`,
      answer: Result.PHOTO
    }
  ].shuffle();

  let rand1 = Math.floor(Math.random() * Questions1.length);
  /*
  export const types = {
    TWO: 'two-pic',
    ONE: 'one-pic',
    THREE: 'three-pic'
  }*/
  const types = {
    TWO: 'two-of-two',
    ONE: 'tinder-like',
    THREE: 'one-of-three'
  };

  const game = Object.freeze([
    {
      type: 'two-pic',
      title: `Угадайте для каждого изображения фото или рисунок?`,
      imgOne: Questions2[0],
      imgTwo: Questions2[1]
    },
    {
      type: 'one-pic',
      title: `Угадай, фото или рисунок?`,
      imgOne: Questions1[rand1]
    },
    {
      type: 'three-pic',
      title: `Найдите фото среди изображений`,
      imgOne: Questions3pt[0],
      imgTwo: Questions3pt[1],
      imgThree: Questions3ph[0]
    },
    {
      type: 'two-pic',
      title: `Угадайте для каждого изображения фото или рисунок?`,
      imgOne: Questions2[2],
      imgTwo: Questions2[3]
    },
    {
      type: 'one-pic',
      title: `Угадай, фото или рисунок?`,
      imgOne: Questions1[1]
    },
    {
      type: 'three-pic',
      title: `Найдите рисунок среди изображений`,
      imgOne: Questions3ph[1],
      imgTwo: Questions3pt[2],
      imgThree: Questions3ph[2]
    },
    {
      type: 'two-pic',
      title: `Угадайте для каждого изображения фото или рисунок?`,
      imgOne: Questions2[4],
      imgTwo: Questions2[5]
    },
    {
      type: 'one-pic',
      title: `Угадай, фото или рисунок?`,
      imgOne: Questions1[rand1]
    },
    {
      type: 'three-pic',
      title: `Найдите рисунок среди изображений`,
      imgOne: Questions3pt[3],
      imgTwo: Questions3ph[4],
      imgThree: Questions3ph[5]
    },
    {
      type: 'two-pic',
      title: `Угадайте для каждого изображения фото или рисунок?`,
      imgOne: Questions2[6],
      imgTwo: Questions2[7]
    }
  ]);

  const Stats = {
    WRONG: `wrong`,
    SLOW: `slow`,
    FAST: `fast`,
    CORRECT: `correct`,
    UNKNOWN: `unknown`
  };

  const initialState = Object.freeze({
    numberOfQuestions: 0,
    level: game[0],
    lives: 3,
    time: 30,
    userAnswers: Array(10).fill(Stats.UNKNOWN)
  });

  let currentState = Object.assign({}, initialState);

  let prevStates = [
    {
      lives: 3,
      userAnswers: Array(10).fill(Stats.UNKNOWN)
    },
    {
      lives: 3,
      userAnswers: Array(10).fill(Stats.UNKNOWN)
    }
  ];

  class GamePresenter {
    constructor(state) {
      this.state = state;
    }

    transitionPrevPage() {
      const backButton = document.querySelector(`.back`);

      backButton.onclick = () => {
        prevStates[1].userAnswers = prevStates[0].userAnswers;
        prevStates[1].lives = prevStates[0].lives;
        prevStates[0].userAnswers = currentState.userAnswers;
        prevStates[0].lives = currentState.lives;
        application$1.reset();
      };
    }

    updateLives() {   // header-game
      const div = document.querySelector(`.game__lives`);
      div.innerHTML = ``;
      div.innerHTML = `
     ${new Array(3 - this.state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
        ${new Array(this.state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}`;
      return div;
    }

    countQuestions (game$$1) {
      game$$1.numberOfQuestions++;
      console.log(game$$1);
      return game$$1;
    }

    timer() {   // timer
      const time = document.querySelector('.game__timer');
      function updateClock() {
        time.innerHTML--;

        if (time.innerHTML <= 0) {
          clearInterval(timeinterval);
        }

        if (time.innerHTML == 10) {
          time.style.color = `red`;
        }
      }
      const timeinterval = setInterval(updateClock, 1000);
    }

    analyzeTheSpeedOfAnswer (time) {
      if (time < 10) {
        return `slow`;
      } else if (time > 20) {
        return `fast`;
      } else {
        return `correct`;
      }
    }

    updateStats (state) {
      const elements = document.querySelectorAll(`.stats__result`);
      elements.forEach(function (el, i) {
        el.classList.remove(`stats__result--unknown`);
        el.classList.add(`stats__result--${state.userAnswers[i]}`);
      });
    };

    handlingAnInvalidResponse() {
      this.state.userAnswers[this.state.numberOfQuestions] = `wrong`;
      (this.state.lives > 0) ? this.state.lives -= 1 : this.state.lives;
      return this.state.lives;
    };

    checkTheAnswerOfTypeTwo (data, time, gameState) {
      const inputsSelected = document.querySelectorAll(`input:checked`);
      ((inputsSelected[0].value == data[gameState.numberOfQuestions].imgOneAnswer && inputsSelected[1].value == data[gameState.numberOfQuestions].imgTwoAnswer)) ? gameState.userAnswers[gameState.numberOfQuestions] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
    }

    checkTheAnswerOfTypeOne (data, time, gameState) {
      const inputSelected = document.querySelector(`input:checked`);
      (inputSelected.value == data[gameState.numberOfQuestions].imgOneAnswer) ? gameState.userAnswers[gameState.numberOfQuestions] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
    }

    checkTheAnswerOfTypeThree (evt, data, time, gameState) {
      const img = evt.target.querySelector(`img`);
      const srcImg = img.src;
      const imgs = [data[gameState.numberOfQuestions].imgOneUrl, data[gameState.numberOfQuestions].imgTwoUrl, data[gameState.numberOfQuestions].imgThreeUrl];
      const indexImg = imgs.indexOf(srcImg);
      const picQuestion = data[gameState.numberOfQuestions].question.includes(`рисунок`);

      if(picQuestion) {
        if(indexImg === 0) {
          (data[gameState.numberOfQuestions].imgOneAnswer === `painting`) ? gameState.userAnswers[gameState.numberOfQuestions] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
        } else if(indexImg === 1) {
          (data[gameState.numberOfQuestions].imgTwoAnswer === `painting`) ? gameState.userAnswers[gameState.numberOfQuestions] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
        } else {
          (data[gameState.numberOfQuestions].imgThreeAnswer === `painting`) ? gameState.userAnswers[gameState.numberOfQuestions] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
        }
      } else {
        if(indexImg === 0) {
          (data[gameState.numberOfQuestions].imgOneAnswer === `photo`) ? gameState.userAnswers[gameState.numberOfQuestions] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
        } else if(indexImg === 1) {
          (data[gameState.numberOfQuestions].imgTwoAnswer === `photo`) ? gameState.userAnswers[gameState.numberOfQuestions] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
        } else {
          (data[gameState.numberOfQuestions].imgThreeAnswer === `photo`) ? gameState.userAnswers[gameState.numberOfQuestions] = this.analyzeTheSpeedOfAnswer(time) : this.handlingAnInvalidResponse();
        }
      }

    }

    assessTheSuccess (state) {
      const userAnswers = (state.userAnswers).filter((answer) => {
        if(answer !== `unknown` && state.lives != 0) return answer;
      });
      let result;
      if (userAnswers.length == state.userAnswers.length) {
        return result = `Победа!`;
      }

      return result = `Поражение!`;
    }

    calculateRightAnswers (state) {
      const userAnswers = (state.userAnswers).filter((answer) => {
        if(answer !== `unknown` && answer !== `wrong`) return answer;
      });
      return userAnswers.length * 100;
    }

    calculateQuickAnswers (state) {
      const userAnswers = (state.userAnswers).filter((answer) => {
        if(answer === `fast`) return answer;
      });
      return userAnswers.length;
    }

    calculateQuickAnswersPoints (state) {
      const userAnswers = (state.userAnswers).filter((answer) => {
        if(answer === `fast`) return answer;
      });
      return userAnswers.length * 50;
    }

    calculateLivesBonus (state) {
      return state.lives;
    }

    calculateLivesBonusPoints (state) {
      return state.lives * 50;
    }

    calculateSlowAnswers (state) {
      const userAnswers = (state.userAnswers).filter((answer) => {
        if(answer === `slow`) return answer;
      });
      return userAnswers.length;
    }

    calculateSlowAnswersPoints (state) {
      const userAnswers = (state.userAnswers).filter((answer) => {
        if(answer === `slow`) return answer;
      });
      return userAnswers.length * (-50);
    }

    calculateTotalPoints (state) {
      const right = this.calculateRightAnswers(state);
      const quick = this.calculateQuickAnswersPoints(state);
      const live = this.calculateLivesBonusPoints(state);
      const slow = this.calculateSlowAnswersPoints(state);

      return right + quick + live + slow;
    }




    /*Конструктор должен принимать состояние игры state

     Конструктор должен создавать и управлять представлением игры GameView

    Запускать/останавливать отсчет времени в игре и обновлять состояние state и представление соответствующим образом

    Должен реагировать на действия происходящие в представлении (выбор ответа игроком), обрабатывать его и обновлять состояние и представление в соответсвии с ответом*/
    get template() {
      throw new Error(`You have to define template for view`);
    }

    getTemplate() {
      return getElementFromTemplate(this.template);
    }

    newScreenHandler() {

    }

    get element() {
      if (!this._element) {
        this._element = this.GameView();
        this.bind();
      }
      return this._element;
    }

  }

  class WelcomeView extends GamePresenter {
    get template() {
      return `<div id="main" class="central__content">
        <div id="intro" class="intro">
          <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
        </div>
      </div>`.trim();
    }

    newScreenHandler() {
      const button = document.querySelector(`.intro__asterisk`);
      button.onclick = () => {
        this.onStart();
      };
    }

    onStart() {

    }
  }

  class Welcome {
    constructor() {
      this.view = new WelcomeView();
    }

    init() {
      changeView(this.view.getTemplate());
      this.view.newScreenHandler();

      this.view.onStart = () => {
        application$1.showGreeting();
      };
    }
  }

  const logo = `<img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter">`;

  const title = `<h3>Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!</h3>`;

  const rules = `<p>Правила игры просты.<br>
        Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
        Задача кажется тривиальной, но не думай, что все так просто.<br>
        Фотореализм обманчив и коварен.<br>
        Помни, главное — смотреть очень внимательно.</p>`;

  class GreetingView extends GamePresenter {
    get template() {
      const greeting = `
      <div class="greeting central--blur">
        <div class="greeting__logo">${logo}</div>
          <h1 class="greeting__asterisk">*</h1>
          <div class="greeting__challenge">
            ${title}
            ${rules}
          </div>
        <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
      </div>
   `;
     return greeting;
    }

    newScreenHandler() {
      const button = document.querySelector(`.greeting__continue`);
      button.onclick = () => {
        this.onStart();
      };
    }

    onStart() {

    }
  }

  class Greeting {
    constructor() {
      this.view = new GreetingView();
    }

    init() {
      changeView(this.view.getTemplate());
      this.view.newScreenHandler();

      this.view.onStart = () => {
        application$1.showRules();
      };
    }
  }

  const header = `  <header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>`;

  const gameRules = `Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>`;

  const form = `<form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>`;

  class RulesView extends GamePresenter {
    get template() {
      const rules = `
      ${header}
      <div class="rules">
        <h1 class="rules__title">Правила</h1>
        <p class="rules__description">
          ${gameRules}
          <br>
          Готовы?
        </p>
        ${form}
      </div>
    `;
      return rules;
    }

    newScreenHandler() {
      const inputChange = (input, button) => {
        if (input.value !== ``) {
          button.disabled = false;
          button.onclick = () => this.onStart();
        } else {
          button.disabled = true;
        }
      };

      this.transitionPrevPage();
      const input = document.querySelector(`.rules__input`);
      const button = document.querySelector(`.rules__button`);
      input.onchange = () => inputChange(input, button);
    }

    onStart() {

    }

  }

  class Rules {
    constructor() {
      this.view = new RulesView();
    }

    init() {
      changeView(this.view.getTemplate());
      this.view.newScreenHandler();

      this.view.onStart = () => {
        application$1.showGame();
      };
    }
  }

  const headerGame = (state) => `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
    <h1 class="game__timer">${state.time}</h1>
    <div class="game__lives">
      ${new Array(3 - state.lives).fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
      ${new Array(state.lives).fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">`).join(``)}
    </div>
  </header>`;

  const gameTwoState = (state) => `<p class="game__task">${state.question}<!--Угадайте для каждого изображения фото или рисунок?--></p>
    <form class="game__content">
      <div class="game__option">
      <!--http://placehold.it/468x458 -->
        <img src="${state.imgOneUrl}" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
      <!--http://placehold.it/468x458 -->
        <img src="${state.imgTwoUrl}" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;

  const gameOneState = (state) => `<p class="game__task">${state.question}<!--Угадай, фото или рисунок?--></p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
      <!-- http://placehold.it/705x455-->
        <img src="${state.imgOneUrl}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="painting">
          <span>Рисунок</span>
        </label>
      </div>
    </form>`;

  const gameThreeState = (state) => `<p class="game__task">${state.question}<!--Найдите рисунок среди изображений--></p>
    <form class="game__content  game__content--triple">
    <!-- http://placehold.it/304x455-->
      <div class="game__option">
        <img src="${state.imgOneUrl}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${state.imgTwoUrl}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${state.imgThreeUrl}" alt="Option 1" width="304" height="455">
      </div>
    </form>`;
  /*
  const stats = (statsData) => `<div class="stats">${console.log(statsData.userAnswers)}
    <ul class="stats">
      ${new Array(statsData.userAnswers.length).fill(`<li class="stats__result stats__result--unknown"></li>`).join(``)}
    </ul>
  </div>`;*/

  const stats = (statsData) => `<div class="stats">
  <ul class="stats">
    ${statsData.userAnswers.map((item, i) => {
      return `<li class="stats__result stats__result--${statsData.userAnswers[i]}"></li>`
    })}
  </ul>
</div>`;

  class LevelView extends GamePresenter {
    constructor(state, data) {
      super();
      this.state = state;
      this.data = data;
    }

    newScreenHandlerTypeTwo() {
      this.transitionPrevPage();
      let timer = this.timer();
      const setNextLevel = this.countQuestions;
      const setTime = setTimeout(() => {
        this.handlingAnInvalidResponse();
        setNextLevel(this.state);
        this.onStart();
      }, 31000);

      const inputs = document.querySelectorAll(`input`);

      inputs.forEach((input) => {
        input.addEventListener(`change`, () => {
          let inputsSelected = document.querySelectorAll(`input:checked`);
          if (inputsSelected.length === 2) {
            const time = document.querySelector('.game__timer').textContent;
            clearInterval(timer);
            clearInterval(setTime);
            this.checkTheAnswerOfTypeTwo(this.data, time, this.state);
            setNextLevel(this.state);
            this.onStart();
            inputsSelected[0].checked = false;
            inputsSelected[1].checked = false;
          }
        });
      });
  }

  newScreenHandlerTypeOne() {
    this.transitionPrevPage();
    let timer = this.timer();
    const setNextLevel = this.countQuestions;
    const setTime = setTimeout(() => {
      this.handlingAnInvalidResponse();
      setNextLevel(this.state);
      this.onStart();
    }, 31000);

    const inputs = document.querySelectorAll(`input`);
    inputs.forEach((input) => {
      input.addEventListener(`change`, () => {
        const time = document.querySelector('.game__timer').textContent;
        clearInterval(timer);
        clearInterval(setTime);
        this.checkTheAnswerOfTypeOne(this.data, time, this.state);
        setNextLevel(this.state);
        this.onStart();
        input.checked = false;
      });
    });
  };

  newScreenHandlerTypeThree() {
    this.transitionPrevPage();
    let timer = this.timer();
    const setNextLevel = this.countQuestions;
    const setTime = setTimeout(() => {
      this.handlingAnInvalidResponse();
      setNextLevel(this.state);
      this.onStart();
    }, 31000);

    const imgs = document.querySelectorAll(`.game__option`);

    imgs.forEach((img) => {
      img.addEventListener(`click`, (evt) => {
        const time = document.querySelector('.game__timer').textContent;
        clearInterval(timer);
        clearInterval(setTime);
        this.checkTheAnswerOfTypeThree(evt, this.data, time, this.state);
        setNextLevel(this.state);
        this.onStart();
      });
    });

  }

    get template() {
      let question = this.data[this.state.numberOfQuestions];
      console.log(question);
      let thisLevelType = question.type;
      let levelType;

      switch (thisLevelType) {
        case types.ONE:
          levelType = gameOneState(question);
          break;
        case types.TWO:
          levelType = gameTwoState(question);
          break;
        case types.THREE:
          levelType = gameThreeState(question);
          break;
        default:
        }
      let level = `${headerGame(this.state)}
      <div class="game">
        ${levelType}
        ${stats(this.state)}
      </div>`;

     return level;
    }

    get handler() {
      let question = this.data[this.state.numberOfQuestions];
      let thisLevelType = question.type;
      let handler;

      switch (thisLevelType) {
        case types.ONE:
          handler = this.newScreenHandlerTypeOne;
          break;
        case types.TWO:
          handler = this.newScreenHandlerTypeTwo;
          break;
        case types.THREE:
          handler = this.newScreenHandlerTypeThree;
          break;
        default:
        }
     return handler;
    }

    onStart() {

    }

  }

  class Level {
    constructor(state, data) {
      this.state = state;
      this.data = data;
      this.view = new LevelView(this.state, this.data);
    }

    init() {
      changeView(this.view.getTemplate());
      this.view.handler();

      this.view.onStart = () => {
        if(this.state.lives > 0 && this.state.numberOfQuestions < 10) {
          this.view = new LevelView(this.state, this.data);
          this.init();
        } else {
          application$1.showStats();
        }
      };
    }
  }

  const header$1 = `<header class="header">
    <div class="header__back">
      <button class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.svg" width="101" height="44">
      </button>
    </div>
  </header>`;

    const loss = `<td class="result__total"></td>
    <td class="result__total  result__total--final">fail</td>`;


      class statsView extends GamePresenter {
        constructor(state = currentState, states = prevStates) {
            super();
            this.state = state;
            this.states = states;
        }

        get template() {
          const victory = (state) => `<td class="result__points">×&nbsp;100</td>
                <td class="result__total">${this.calculateRightAnswers(state)}</td>
              </tr>
              <tr>
                <td></td>
                <td class="result__extra">Бонус за скорость:</td>
                <td class="result__extra">${this.calculateQuickAnswers(state)}&nbsp;<span class="stats__result stats__result--fast"></span></td>
                <td class="result__points">×&nbsp;50</td>
                <td class="result__total">${this.calculateQuickAnswersPoints(state)}</td>
              </tr>
              <tr>
                <td></td>
                <td class="result__extra">Бонус за жизни:</td>
                <td class="result__extra">${this.calculateLivesBonus(state)}&nbsp;<span class="stats__result stats__result--alive"></span></td>
                <td class="result__points">×&nbsp;50</td>
                <td class="result__total">${this.calculateLivesBonusPoints(state)}</td>
              </tr>
              <tr>
                <td></td>
                <td class="result__extra">Штраф за медлительность:</td>
                <td class="result__extra">${this.calculateSlowAnswers(state)}&nbsp;<span class="stats__result stats__result--slow"></span></td>
                <td class="result__points">×&nbsp;50</td>
                <td class="result__total">${this.calculateSlowAnswersPoints(state)}</td>
              </tr>
              <tr>
                <td colspan="5" class="result__total  result__total--final">${this.calculateTotalPoints(state)}</td>
        `;

          const stats = `
          ${header$1}
          <div class="result">
            <h1>${this.assessTheSuccess(this.state)}</h1>
            <table class="result__table">
              <tr>
                <td class="result__number">1.</td>
                <td colspan="2">
                  <ul class="stats">
                    ${this.state.userAnswers.map((item, i) => `<li class="stats__result stats__result--${item}"></li>`)}
                  </ul>
                </td>
                ${(this.assessTheSuccess(this.state) == `Победа!`) ? victory(this.state) : loss}
               </tr>
            </table>
            <table class="result__table">
              <tr>
                <td class="result__number">2.</td>
                <td colspan="2">
                  <ul class="stats">
                    ${this.states[0].userAnswers.map((item, i) => `<li class="stats__result stats__result--${item}"></li>`)}
                  </ul>
                </td>
                ${(this.assessTheSuccess(this.states[0]) == `Победа!`) ? victory(this.states[0]) : loss}
              </tr>
            </table>
            <table class="result__table">
              <tr>
                <td class="result__number">3.</td>
                <td colspan="2">
                  <ul class="stats">
                    ${this.states[1].userAnswers.map((item, i) => `<li class="stats__result stats__result--${item}"></li>`)}
                  </ul>
                </td>
                ${(this.assessTheSuccess(this.states[1]) == `Победа!`) ? victory(this.states[1]) : loss}
              </tr>
            </table>
          </div>
        `;

          return stats;
        }

        newScreenHandler() {
          this.transitionPrevPage();
        }

        onStart() {

        }

      }

  class Stats$1 {
    constructor() {
      this.view = new statsView();
    }

    init() {
      changeView(this.view.getTemplate());
      this.view.newScreenHandler();

      this.view.onStart = () => {
      /*  application.showGame();*/
      };
    }
  }

  class DefaultAdapter {
    constructor() {
      if(new.target === DefaultAdapter) {
        throw new Error();
      }
    }

    preprocess(data) {  // преобразовать данные для клиента
      return data;
    }

    toServer(data) {   // преобразовать данные для сервера
      return data;
    }
  }

  const defaultAdapter = new class extends DefaultAdapter {} ();

  class Model {
    get urlRead() {
      throw new Error(`Define the URL for the model`);
    }

    get urlWrite() {
      throw new Error(`Define the URL for the model`);
    }

    load(adapter = defaultAdapter) {
      return fetch(this.urlRead)
        .then((response) => response.json())
        .then(adapter.preprocess);
    }

    send(data, adapter = defaultAdapter) {

    }
  }

  var gameAdapter = new class extends DefaultAdapter {

    preprocess(data) {
      let dataArray = [];
      data.forEach((item, i) => {
        switch (item.type) {
          case `tinder-like`:
            item.imgOneUrl = item.answers[0].image.url;
            item.imgOneWidth = item.answers[0].image.width;
            item.imgOneHeight = item.answers[0].image.height;
            item.imgOneAnswer = item.answers[0].type;
            delete item.answers;
            break;
          case `two-of-two`:
            item.imgOneUrl = item.answers[0].image.url;
            item.imgOneWidth = item.answers[0].image.width;
            item.imgOneHeight = item.answers[0].image.height;
            item.imgOneAnswer = item.answers[0].type;
            item.imgTwoUrl = item.answers[1].image.url;
            item.imgTwoWidth = item.answers[1].image.width;
            item.imgTwoHeight = item.answers[1].image.height;
            item.imgTwoAnswer = item.answers[1].type;
            delete item.answers;
            break;
          case `one-of-three`:
            item.imgOneUrl = item.answers[0].image.url;
            item.imgOneWidth = item.answers[0].image.width;
            item.imgOneHeight = item.answers[0].image.height;
            item.imgOneAnswer = item.answers[0].type;
            item.imgTwoUrl = item.answers[1].image.url;
            item.imgTwoWidth = item.answers[1].image.width;
            item.imgTwoHeight = item.answers[1].image.height;
            item.imgTwoAnswer = item.answers[1].type;
            item.imgThreeUrl = item.answers[2].image.url;
            item.imgThreeWidth = item.answers[2].image.width;
            item.imgThreeHeight = item.answers[2].image.height;
            item.imgThreeAnswer = item.answers[2].type;
            delete item.answers;
            break;
          default:
          }
      });
      dataArray = data;

      return dataArray;
    }

    toServer(data) {
      return JSON.stringify(data);
    }
  };

  const ControllerID = {
    WELCOME: ``,
    GREETING: `greeting`,
    RULES: `rules`,
    GAME: `game`,
    STATS: `stats`
  };

  const getControllerIDFromHash = (hash) => hash.replace(`#`, ``);
  let resetValue = true;

  class Application {
    constructor() {
      this.model = new class extends Model {
        get urlRead() {
          return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/questions`;
        }

        get urlWrite() {
          return `https://intensive-ecmascript-server-btfgudlkpi.now.sh/pixel-hunter/stats/:username`;
        }
      }();

      this.model.load(gameAdapter)
        .then((data) => this.setup(data))
        .then(() => {
          if (resetValue) this.changeController(getControllerIDFromHash(location.hash));
        });
    }

    setup(data) {
      this.routes = {
        [ControllerID.WELCOME]: new Welcome(),
        [ControllerID.GREETING]: new Greeting(),
        [ControllerID.RULES]: new Rules(),
        [ControllerID.GAME]: new Level(currentState, data),
        [ControllerID.STATS]: new Stats$1()
      };

      window.onhashchange = () => {
        this.changeController(getControllerIDFromHash(location.hash));
      };
    }

    changeController(route = ``) {
    /*const Controller = this.routes[route];
      new Controller().init();*/
      this.routes[route].init();
    }

  /*
    init() {
      this.changeController(getControllerIDFromHash(location.hash));
    }*/

    showWelcome() {
      location.hash = ControllerID.WELCOME;
    }

    showGreeting() {
      location.hash = ControllerID.GREETING;
    }

    showRules() {
      location.hash = ControllerID.RULES;
    }

    showGame() {
      location.hash = ControllerID.GAME;
    }

    showStats(state) {
      location.hash = ControllerID.STATS;
    }

    reset() {
      location.hash = ControllerID.GREETING;
      application = new Application();
      currentState.numberOfQuestions = 0;
      currentState.level = ``;
      currentState.lives = 3;
      currentState.time = 30;
      currentState.userAnswers = Array(10).fill(`unknown`);
      resetValue = false;
    }

  }

  let application = new Application();

  /*application.init();*/

  var application$1 = application;

}());

//# sourceMappingURL=main.js.map
