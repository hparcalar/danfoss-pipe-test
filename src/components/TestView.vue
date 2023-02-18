<!-- eslint-disable no-empty -->
<template>
  <div class="container-fluid" style="padding: 0px">
    <!-- absolute components -->
    <button
      type="button"
      @click="showWifiSettings"
      style="position: absolute; top: 5px; right: 5px; z-index: 99999"
      class="btn btn-primary"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-wifi"
        viewBox="0 0 16 16"
      >
        <path
          d="M15.384 6.115a.485.485 0 0 0-.047-.736A12.444 12.444 0 0 0 8 3C5.259 3 2.723 3.882.663 5.379a.485.485 0 0 0-.048.736.518.518 0 0 0 .668.05A11.448 11.448 0 0 1 8 4c2.507 0 4.827.802 6.716 2.164.205.148.49.13.668-.049z"
        />
        <path
          d="M13.229 8.271a.482.482 0 0 0-.063-.745A9.455 9.455 0 0 0 8 6c-1.905 0-3.68.56-5.166 1.526a.48.48 0 0 0-.063.745.525.525 0 0 0 .652.065A8.46 8.46 0 0 1 8 7a8.46 8.46 0 0 1 4.576 1.336c.206.132.48.108.653-.065zm-2.183 2.183c.226-.226.185-.605-.1-.75A6.473 6.473 0 0 0 8 9c-1.06 0-2.062.254-2.946.704-.285.145-.326.524-.1.75l.015.015c.16.16.407.19.611.09A5.478 5.478 0 0 1 8 10c.868 0 1.69.201 2.42.56.203.1.45.07.61-.091l.016-.015zM9.06 12.44c.196-.196.198-.52-.04-.66A1.99 1.99 0 0 0 8 11.5a1.99 1.99 0 0 0-1.02.28c-.238.14-.236.464-.04.66l.706.706a.5.5 0 0 0 .707 0l.707-.707z"
        />
      </svg>
    </button>

    <button
      type="button"
      @click="showParams"
      style="position: absolute; top: 5px; right: 55px; z-index: 99999"
      class="btn btn-light"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-gear"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
        />
        <path
          d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
        />
      </svg>
    </button>
    <!-- end of absolute components -->
    <div class="row" style="margin-top: 10px">
      <div class="col text-center" style="padding: 20px; z-index: 10000">
        <input type="number" v-model="leftVal" style="display: none" />
        <VueSvgGauge
          :start-angle="-110"
          :end-angle="110"
          :value="leftNewton"
          :separator-step="0"
          :min="0"
          :max="500"
          :transition-duration="300"
          :gauge-color="[
            { offset: 0, color: '#ff0000' },
            { offset: 100, color: '#00ff00' },
          ]"
          :scale-interval="0.2"
        >
          <div class="inner-text">
            {{ leftNewton.toFixed(1) }} <span style="font-size: small">N</span>
          </div>
        </VueSvgGauge>
        <div
          class="text-center display-4 brand-left"
          style="margin-top: -90px !important"
        >
          {{ stationParams.BrandLeft }}
        </div>
      </div>
      <div class="col text-center" style="padding: 20px; z-index: 10000">
        <input type="number" v-model="rightVal" style="display: none" />
        <VueSvgGauge
          :start-angle="-110"
          :end-angle="110"
          :value="rightNewton"
          :separator-step="0"
          :min="0"
          :max="500"
          :transition-duration="300"
          :gauge-color="[
            { offset: 0, color: '#ff0000' },
            { offset: 100, color: '#00ff00' },
          ]"
          :scale-interval="0.2"
        >
          <div class="inner-text">
            {{ rightNewton.toFixed(1) }} <span style="font-size: small">N</span>
          </div>
        </VueSvgGauge>
        <div
          class="text-center display-4 brand-right"
          style="margin-top: -90px !important"
        >
          {{ stationParams.BrandRight }}
        </div>
      </div>
    </div>
    <div
      class="pipes-container"
      style="min-height: 25vh; position: relative; margin-top: 2px"
    >
      <div
        style="position: absolute; width: 100%; height: 100%"
        class="paper-background"
      >
        &nbsp;
      </div>
      <div class="row">
        <div class="col text-center">
          <canvas id="cnvLeft" style="width: 80%"></canvas>
        </div>
        <div class="col text-center">
          <canvas id="cnvRight" style="width: 80%"></canvas>
        </div>
      </div>
    </div>

    <!-- danfoss logo -->
    <img
      style="position: absolute; top: 5px; left: 5px"
      height="8%"
      src="danfoss.png"
    />
  </div>
</template>

<script>
const axios = require("axios");
const spawn = require("child_process").spawn;

import { VueSvgGauge } from "vue-svg-gauge";
import Store from "electron-store";

export default {
  name: "HelloWorld",
  data() {
    return {
      leftVal: 0,
      rightVal: 0,
      leftPercent: 0,
      rightPercent: 0,
      leftNewton: 0,
      stationId: 0,
      rightNewton: 0,
      stationParams: {
        Display: "",
        Multiplier1: null,
        Multiplier2: null,
        BrandLeft: "",
        BrandRight: "",
        BetterResult: false,
      },
    };
  },
  components: {
    VueSvgGauge,
  },
  props: {
    msg: String,
  },
  async mounted() {
    const store = new Store();
    this.stationId = parseInt(store.get("station"));
    await this.requestParams();
    this.requestStation();
    this.drawPipes();
  },
  watch: {
    leftVal: function () {
      this.drawPipes();
    },
    rightVal: function () {
      this.drawPipes();
    },
  },
  methods: {
    async requestParams() {
      try {
        const response = await axios.get(
          "http://127.0.0.1:1880/station?cell=" + this.stationId
        );
        if (response && response.data && response.data.length > 0) {
          this.stationParams = response.data[0];
        }
      } catch (error) {
        console.log(error);
      }
    },
    async requestStation() {
      try {
        const self = this;
        setInterval(async () => {
          const response = await axios.get(
            "http://127.0.0.1:1880/loadcell?cell=" + this.stationId
          );
          self.leftVal = parseInt(response?.data?.cell_1);
          self.rightVal = parseInt(response?.data?.cell_2);
        }, 200);
      } catch (error) {
        console.log(error);
      }
    },
    showWifiSettings() {
      let bat = spawn("gnome-control-center", ["wifi"], { cwd: "/" });

      bat.stdout.on("data", (data) => {
        console.log(data);
        // Handle data...
      });

      bat.stderr.on("data", (err) => {
        console.log(err);
        // Handle error...
      });

      bat.on("exit", (code) => {
        console.log(code);
        // Handle exit
      });
    },
    showParams() {
      this.$router.push({ name: "Settings" });
    },
    drawPipes() {
      // curve formula: y = sin(x * 3.14/180) * 150(angle)
      let cnvLeft = document.getElementById("cnvLeft");
      let cnvRight = document.getElementById("cnvRight");

      this.leftPercent = parseInt(this.leftVal);
      this.rightPercent = parseInt(this.rightVal);

      this.leftNewton = isNaN(this.leftVal) ? 0 : this.leftVal * 9.81;
      this.rightNewton = isNaN(this.rightVal) ? 0 : this.rightVal * 9.81;

      this.drawPipeByAngle(cnvLeft, parseInt(this.leftVal) + 25);
      this.drawPipeByAngle(cnvRight, parseInt(this.rightVal) + 25);
    },
    drawPipeByAngle(canvas, angle) {
      let pipeColor = "";
      let pipeTorsion = 0.0;
      if (canvas.id == "cnvLeft") {
        pipeColor = "rgb(210,3,3)";
        pipeTorsion = this.leftPercent;
      } else {
        pipeColor = "rgb(73,152,243)";
        pipeTorsion = this.rightPercent;
      }

      let ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();

      // calc limit x
      let limitX = 0;
      for (let i = 0; i < canvas.width; i++) {
        const calcY = Math.sin((i * Math.PI) / 180) * angle;
        if (calcY >= 0) limitX = i;
        else break;
      }

      // draw outer pipe
      for (let i = 0; i <= limitX; i++) {
        const calcY = Math.sin((i * Math.PI) / 180) * angle;
        if (calcY >= 0) {
          ctx.lineWidth = 10;
          ctx.strokeStyle = pipeColor;
          ctx.lineTo(
            i + (canvas.width - limitX) / 2,
            canvas.height - Math.sin((i * Math.PI) / 180) * angle - 20
          );
        } else break;
      }
      ctx.stroke();

      // draw inner pipe
      ctx.beginPath();
      for (let i = 0; i <= limitX; i++) {
        const calcY = Math.sin((i * Math.PI) / 180) * angle;
        if (calcY >= 0) {
          ctx.lineWidth = 6;
          ctx.strokeStyle = "#000";
          ctx.lineTo(
            i + (canvas.width - limitX) / 2,
            canvas.height - Math.sin((i * Math.PI) / 180) * angle - 20
          );
        } else break;
      }
      ctx.stroke();

      // draw torsion percentage
      if (isNaN(pipeTorsion) || pipeTorsion < 0) pipeTorsion = 0.0;

      ctx.font = "14px Arial";

      ctx.fillText(
        "% " + parseInt(pipeTorsion).toString(),
        canvas.width / 2 - 15,
        canvas.height - 18
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.inner-text {
  margin-top: 75px;
  font-size: x-large;
  height: 100%;
  width: 100%;
}

.brand-left {
  text-shadow: 1px 2px 7px rgba(210, 3, 3, 1);
}

.brand-right {
  text-shadow: 1px 2px 7px rgba(73, 152, 243, 1);
}

.pipes-container {
  background: rgb(51, 51, 51);
  background: linear-gradient(
    180deg,
    rgba(51, 51, 51, 1) 0%,
    rgba(136, 136, 136, 1) 50%,
    rgba(239, 239, 239, 1) 100%
  );

  /* background-image:
    linear-gradient(to right, blue 1px, transparent 1px),
    linear-gradient(to bottom, blue 1px, transparent 1px); */
}

.paper-background {
  background-size: 40px 40px;
  background-image: linear-gradient(to right, #222 1px, transparent 1px),
    linear-gradient(to bottom, #222 1px, transparent 1px);
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.list-group {
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
  border-radius: 0.25rem;
}
.list-group-flush .list-group-item {
  border-right: 0;
  border-left: 0;
  border-radius: 0;
}
.list-group-flush:first-child .list-group-item:first-child {
  border-top: 0;
}
.list-group-item {
  position: relative;
  display: block;
  padding: 0.5rem 1rem;
  color: #212529;
  text-decoration: none;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  cursor: pointer;
}
.list-group-item:hover {
  background-color: #eee;
}
.flex-container {
  display: flex;
  align-items: center;
}
.thumbnail {
  width: 60px;
  height: 60px;
  border-radius: 30px;
  margin-right: 16px;
}
</style>
