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