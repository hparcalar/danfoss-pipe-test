<!-- eslint-disable prettier/prettier -->
<template>
    <div class="container-fluid mt-4">
        <h5>Runtime Parameters</h5>
        <button type="button" 
        @click="showTestScreen"
        style="position:absolute; top:5px;right:55px;" class="btn btn-light">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
        </svg>
        </button>
        <button type="button" 
        @click="saveParams"
        style="position:absolute; top:5px;right:5px;" class="btn btn-primary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-database-check" viewBox="0 0 16 16">
            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
            <path d="M12.096 6.223A4.92 4.92 0 0 0 13 5.698V7c0 .289-.213.654-.753 1.007a4.493 4.493 0 0 1 1.753.25V4c0-1.007-.875-1.755-1.904-2.223C11.022 1.289 9.573 1 8 1s-3.022.289-4.096.777C2.875 2.245 2 2.993 2 4v9c0 1.007.875 1.755 1.904 2.223C4.978 15.71 6.427 16 8 16c.536 0 1.058-.034 1.555-.097a4.525 4.525 0 0 1-.813-.927C8.5 14.992 8.252 15 8 15c-1.464 0-2.766-.27-3.682-.687C3.356 13.875 3 13.373 3 13v-1.302c.271.202.58.378.904.525C4.978 12.71 6.427 13 8 13h.027a4.552 4.552 0 0 1 0-1H8c-1.464 0-2.766-.27-3.682-.687C3.356 10.875 3 10.373 3 10V8.698c.271.202.58.378.904.525C4.978 9.71 6.427 10 8 10c.262 0 .52-.008.774-.024a4.525 4.525 0 0 1 1.102-1.132C9.298 8.944 8.666 9 8 9c-1.464 0-2.766-.27-3.682-.687C3.356 7.875 3 7.373 3 7V5.698c.271.202.58.378.904.525C4.978 6.711 6.427 7 8 7s3.022-.289 4.096-.777ZM3 4c0-.374.356-.875 1.318-1.313C5.234 2.271 6.536 2 8 2s2.766.27 3.682.687C12.644 3.125 13 3.627 13 4c0 .374-.356.875-1.318 1.313C10.766 5.729 9.464 6 8 6s-2.766-.27-3.682-.687C3.356 4.875 3 4.373 3 4Z"/>
        </svg>
        </button>
        <div class="row mt-5">
            <div class="col">
                <div class="row">
                    <div class="col text-center">
                        <input type="text" class="form-control" v-model="formData.Multiplier1" placeholder="Multiplier Left" />
                    </div>
                    <div class="col text-center">
                        <input type="text" class="form-control" v-model="formData.Multiplier2" placeholder="Multiplier Right" />
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col text-center">
                        <input type="text" class="form-control" v-model="formData.BrandLeft" placeholder="Explanation Left" />
                    </div>
                    <div class="col text-center">
                        <input type="text" class="form-control" v-model="formData.BrandRight" placeholder="Explanation Right" />
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="col">
                        <div class="col text-center">
                            <input type="text" class="form-control" v-model="formData.Display" placeholder="Display" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" v-model="formData.BetterResult" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Result Optimization
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">&nbsp;</div>
        </div>
        
    </div>
  </template>

<script>
// @ is an alias to /src
const axios = require("axios");
import Store from "electron-store";

export default {
  name: "Settings",
  data() {
    return {
      stationId: 0,
      formData: {
        Display: "",
        Multiplier1: null,
        Multiplier2: null,
        BrandLeft: "",
        BrandRight: "",
        BetterResult: false,
      },
    };
  },
  async mounted() {
    try {
      const store = new Store();
      this.stationId = parseInt(store.get("station"));
      const response = await axios.get("http://127.0.0.1:1880/station?cell=" + this.stationId);

      if (response && response.data && response.data.length > 0) this.formData = response.data[0];
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    showTestScreen() {
      this.$router.push({ name: "Home" });
    },
    async saveParams() {
      try {
        const self = this;
        const response = await axios.post("http://127.0.0.1:1880/station", {
          ...self.formData,
          StationId: this.stationId,
        });
        if (response) alert("Saved successfully");
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
