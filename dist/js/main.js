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
      { color: "blue", imgUrl: "./images/prizes/prize_1.png" },
      { color: "red", imgUrl: "./images/prizes/prize_2.png" },
      { color: "blue", imgUrl: "./images/prizes/prize_3.png" },
      { color: "pink", imgUrl: "./images/prizes/prize_4.png" },
      { color: "blue", imgUrl: "./images/prizes/prize_5.png" },
      { color: "red", imgUrl: "./images/prizes/prize_1.png" },
      { color: "blue", imgUrl: "./images/prizes/prize_2.png" },
      { color: "pink", imgUrl: "./images/prizes/prize_3.png" },
      { color: "gold", imgUrl: "./images/prizes/prize_4.png" },
      { color: "pink", imgUrl: "./images/prizes/prize_5.png" },
    ],
  }),
  components: {
    "app-prize": PRIZE,
  },
  methods: {
    roll() {
      
    }
  }
});