const PRIZE = Vue.component("app-prize", {
  name: "prize",
  template: "#prizeTemplate",
  props: {
    color: {
      required: true,
      type: String,
    },
    imgUrl: {
      required: true,
      type: String,
    },
  },
  data: () => ({
    colors: {
      blue: { color: "#184BFF", background: "#050E1A" },
      pink: { color: "#E23386", background: "#1A0011" },
      red: { color: "#DA0E1E", background: "#270205" },
      gold: { color: "#FF9900", background: "#1C0700" },
      lightBlue: { color: "#18C8FF", background: "#" },
    },
  }),
  computed: {
    lineColor() {
      return this.colors[this.color].color;
    },
    bgColor() {
      return this.colors[this.color].background;
    },
  },
});

try {
  new Vue({
    el: "#app",
    data: () => ({
      isRoll: false,
      prizes: [
        {
          color: "gold",
          imgUrl: "./images/prizes/balance+0.25.png",
          label: "+ 0.25$ на баланс пользователя",
        },
        {
          color: "gold",
          imgUrl: "./images/prizes/balance+0.5.png",
          label: "+ 0.50$ на баланс пользователя",
        },
        {
          color: "gold",
          imgUrl: "./images/prizes/balance+1.png",
          label: "+ 1.00$ на баланс пользователя",
        },
        {
          color: "gold",
          imgUrl: "./images/prizes/balance+5.png",
          label: "+ 5.00$ на баланс пользователя",
        },
        {
          color: "gold",
          imgUrl: "./images/prizes/balance+10.png",
          label: "+ 10.00$ на баланс пользователя",
        },

        {
          color: "pink",
          imgUrl: "./images/prizes/balance+15percent.png",
          label: "Бонус к пополнению баланса +15%",
        },
        {
          color: "pink",
          imgUrl: "./images/prizes/balance+20percent.png",
          label: "Бонус к пополнению баланса +20%",
        },
        {
          color: "pink",
          imgUrl: "./images/prizes/balance+25percent.png",
          label: "Бонус к пополнению баланса +25%",
        },
        {
          color: "pink",
          imgUrl: "./images/prizes/balance+30percent.png",
          label: "Бонус к пополнению баланса +30%",
        },
        {
          color: "pink",
          imgUrl: "./images/prizes/balance+40percent.png",
          label: "Бонус к пополнению баланса +40%",
        },
        {
          color: "pink",
          imgUrl: "./images/prizes/balance+50percent.png",
          label: "Бонус к пополнению баланса +50%",
        },
        {
          color: "pink",
          imgUrl: "./images/prizes/balance+100percent.png",
          label: "Бонус к пополнению баланса +100%",
        },

        {
          color: "red",
          imgUrl: "./images/prizes/bet-x2.png",
          label: "Безумная ставка на х2",
        },
        {
          color: "red",
          imgUrl: "./images/prizes/bet-x5.png",
          label: "Безумная ставка на х5",
        },
        {
          color: "red",
          imgUrl: "./images/prizes/bet-x10.png",
          label: "Безумная ставка на х10",
        },
        {
          color: "red",
          imgUrl: "./images/prizes/bet-x25.png",
          label: "Безумная ставка на х25",
        },
        {
          color: "red",
          imgUrl: "./images/prizes/bet-x50.png",
          label: "Безумная ставка на х50",
        },

        {
          color: "blue",
          imgUrl: "./images/prizes/spin+1.png",
          label: "+1 бесплатный спин колеса бонусов",
        },
        {
          color: "blue",
          imgUrl: "./images/prizes/spin+2.png",
          label: "+2 бесплатный спин колеса бонусов",
        },
        {
          color: "blue",
          imgUrl: "./images/prizes/spin+3.png",
          label: "+3 бесплатный спин колеса бонусов",
        },
        {
          color: "blue",
          imgUrl: "./images/prizes/spin+4.png",
          label: "+4 бесплатный спин колеса бонусов",
        },
        {
          color: "blue",
          imgUrl: "./images/prizes/spin+5.png",
          label: "+5 бесплатный спин колеса бонусов",
        },

        {
          color: "blue",
          imgUrl: "./images/prizes/strahovka-any.png",
          label: "Страховка на любую ставку в режиме Double",
        },

        {
          color: "blue",
          imgUrl: "./images/prizes/strahovka-double-x2.png",
          label: "Страховка х2.0 на ставку в режиме Double",
        },
        {
          color: "blue",
          imgUrl: "./images/prizes/strahovka-double-x5.png",
          label: "Страховка х5.0 на ставку в режиме Double",
        },

        {
          color: "red",
          imgUrl: "./images/prizes/strahovka-crash-x1.5.png",
          label: "Страховка х1.5 на ставку в режиме CRASH",
        },
        {
          color: "red",
          imgUrl: "./images/prizes/strahovka-crash-x2.png",
          label: "Страховка х2.0 на ставку в режиме CRASH",
        },
        {
          color: "red",
          imgUrl: "./images/prizes/strahovka-crash-x5.png",
          label: "Страховка х5.0 на ставку в режиме CRASH",
        },
      ],

      prizesMin: [
        { color: "blue", imgUrl: "./images/prizes/strahovka-double-x2.png" },
        { color: "red", imgUrl: "./images/prizes/strahovka-crash-x5.png" },
        { color: "blue", imgUrl: "./images/prizes/strahovka-any.png" },
        { color: "red", imgUrl: "./images/prizes/strahovka-crash-x1.5.png" },
        { color: "blue", imgUrl: "./images/prizes/spin+5.png" },
        { color: "red", imgUrl: "./images/prizes/bet-x5.png" },
        { color: "blue", imgUrl: "./images/prizes/spin+4.png" },
        { color: "blue", imgUrl: "./images/prizes/strahovka-double-x2.png" },
        { color: "gold", imgUrl: "./images/prizes/balance+1.png" },
        { color: "pink", imgUrl: "./images/prizes/balance+25percent.png" },
      ],
    }),
    components: {
      "app-prize": PRIZE,
    },
    methods: {
      roll() {},
    },
  });
} catch (err) {
  
}
try {
  new Vue({
    el: "#doubleApp",
    data: () => ({
      game: {
        timer: 20,
        multiplier: 0,
        bets: { 1: [], 2: [], 3: [], 4: [] },
      },
      cells: {
        2: [
          0,
          2,
          4,
          6,
          8,
          10,
          12,
          15,
          17,
          19,
          21,
          23,
          25,
          27,
          30,
          33,
          36,
          39,
          42,
          44,
          46,
        ],
        3: [1, 3, 7, 11, 14, 16, 20, 22, 28, 32, 35, 40, 43, 47],
        5: [5, 9, 13, 18, 24, 26, 29, 31, 34, 38, 41, 45],
        50: [37],
      },
      colors: {
        2: { color: "red", start: "#EB5050", end: "#E22D2D" },
        3: { color: "purple", start: "#923DFF", end: "#7419E9" },
        5: { color: "blue", start: "#507CEB", end: "#1C54E3" },
        50: { color: "green", start: "#00FFAA", end: "#00A656" },
      },
      classes: { 1: "red", 2: "purple", 3: "blue", 4: "green" },

      roll_time: 4500,
      rollout_time: 500,
      cell_size: 360 / 56,

      duration: 0,
      rotate: 0,
      history: [],

      isRoll: false,
      prizes: [
        { color: "red", value: "2" },
        { color: "pink", value: "3" },
        { color: "blue", value: "5" },
        { color: "green", value: "50" },
        { color: "red", value: "2" },
        { color: "pink", value: "3" },
        { color: "blue", value: "5" },
        { color: "green", value: "50" },
        { color: "red", value: "2" },
        { color: "pink", value: "3" },
        { color: "blue", value: "5" },
        { color: "green", value: "50" },
        { color: "red", value: "2" },
        { color: "pink", value: "3" },
        { color: "blue", value: "5" },
        { color: "green", value: "50" },
        { color: "red", value: "2" },
        { color: "pink", value: "3" },
        { color: "blue", value: "5" },
        { color: "green", value: "50" },
        { color: "red", value: "2" },
        { color: "pink", value: "3" },
        { color: "blue", value: "5" },
        { color: "green", value: "50" },
        { color: "red", value: "2" },
        { color: "pink", value: "3" },
        { color: "blue", value: "5" },
        { color: "green", value: "50" },
        { color: "red", value: "2" },
        { color: "pink", value: "3" },
      ],
      history: [
        { color: "red", result: "1", value: "2X" },
        { color: "pink", result: "2", value: "3X" },
        { color: "blue", result: "3", value: "5X" },
        { color: "green", result: "4", value: "50X" },
        { color: "red", result: "1", value: "2X" },
        { color: "pink", result: "2", value: "3X" },
        { color: "blue", result: "3", value: "5X" },
        { color: "green", result: "4", value: "50X" },
      ],
    }),
    mounted() {
      setTimeout(() => { 
        this.showCell(2000)
       }, 1000)
    },
    methods: {
      showCell(x) {
        // let x = this.cells[m][Math.floor(Math.random() * this.cells[m].length)];
        let r = 2 * 360 + x * this.cell_size;
        this.duration = this.roll_time;
        this.rotate = r + Math.random() * this.cell_size;
        setTimeout(() => {
          this.duration = this.rollout_time;
          this.rotate = r + this.cell_size / 2;
          setTimeout(() => {
            this.duration = 0;
            this.rotate = r - 2 * 360 + this.cell_size / 2 + 0.5;
          }, this.rollout_time);
        }, this.roll_time + 100);
      },
    },
  });
} catch (error) {
  
}
