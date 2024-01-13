//for component Table
const AXIS_X = "X:";
const AXIS_Y = "Y:";

//for component Nav
const pages = [
  {
    title: "mouse",
    path: "/page/mouse",
    id: 1,
  },
  {
    title: "timers",
    path: "/page/timers",
    id: 2,
  },
];

//for component Timers
const TIMERS_NUMBER = 3;

//for component Timers
const DEFAULTS = {
  start: 0,
  speed: 1,
  step: 1,
  interval: 1000,
  pause: 0,
};

//for component Timers
const BUTTONS_DATA = [
  {
    title: "slower",
    speed: 0.5,
    id: 1,
    isRun: true,
  },
  {
    title: "faster",
    speed: 2,
    id: 2,
    isRun: true,
  },
  {
    title: "reset",
    speed: 0,
    start: 0,
    id: 3,
    isRun: false,
  },
];

export { pages, AXIS_X, AXIS_Y, DEFAULTS, BUTTONS_DATA };

//specification
const TASK = [
  [
    "По нажатию на кнопку Slower - секундомеры замедляются на 50% от текущей скорости.",
    "По нажатию на кнопку Faster - секундомеры ускоряются на 100% от текущей скорости.",
    "По нажатию на кнопку Reset - секундомеры и показатель скорости сбрасываются.",
  ],

  {
    1: "начинает идти при открытии страницы. При покидании страницы - перестаёт идти. При посещении страницы снова - идёт с нуля.",
  },

  {
    2: "начинает идти при открытии страницы. При покидании страницы - сохраняет текущее значение. При посещении страницы снова - идёт с последнего сохранённого значения. Для сохранения не использовать localStorage и другие методы сохраненния информации в браузере. Сохранять данные в useState родительских компонент.",
  },

  {
    3: "начинает идти при открытии страницы. При покидании страницы - продолжает свою работу в фоне. При посещении страницы снова - отображается время, прошедшее со старта этого таймера (т.е. посещение другой страницы его не сбросило). Для сохранения не использовать localStorage и другие методы сохраненния информации в браузере. Сохранять данные в useState родительских компонент.",
  },
];
