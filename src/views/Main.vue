<template>
  <div class="main">
    <!-- メインイメージ -->
    <div class="main_title">
      <h1>Yukina Nakanishi's<br />Portfolio</h1>
    </div>
    <img
      src="https://yn-portfolio.s3.ap-northeast-3.amazonaws.com/main.jpg"
      alt="メイン画像"
      class="image"
    />
    <!-- About me -->
    <AboutMe id="aboutme" />
    <!-- Portfolio -->
    <div class="carousel" id="portfolio">
      <h3 class="title ptf_title" id="portfolio">Portfolio</h3>
      <carousel
        :per-page="3"
        :autoplay="autoplay"
        :loop="loop"
        :autoplayHoverPause="autoplayHoverPause"
      >
        <slide v-for="portfolio in portfolios" :key="portfolio.id">
          <div class="ptf_item" @click="openModal(portfolio)">
            <img
              :src="
                'https://yn-portfolio.s3.ap-northeast-3.amazonaws.com/' +
                  portfolio.image
              "
              alt="ポートフォリオ画像"
              class="image ptf_image"
            />
            <h3 class="ptf_name">{{ portfolio.name }}</h3>
          </div>
        </slide>
      </carousel>
    </div>
    <!-- モーダルウインドウ -->
    <Modal v-if="modal" @close="closeModal" :detail="detail"></Modal>
    <!-- Skill -->
    <div id="skill">
      <h4 class="title">Skill</h4>
      <Graph :styles="graph_css" class="graph" />
    </div>
    <!-- Contact -->
    <Contact id="contact" />
  </div>
</template>

<script>
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";
import AboutMe from "../components/AboutMe.vue";
import Modal from "../components/Modal.vue";
import Graph from "../components/Graph.vue";
import Contact from "../components/Contact.vue";
export default {
  data() {
    return {
      modal: false,
      height: 500,
      portfolios: [],
      autoplay: true,
      loop: true,
      autoplayHoverPause: true,
    };
  },
  components: {
    Carousel,
    AboutMe,
    Modal,
    Graph,
    Contact,
    Slide,
  },
  computed: {
    graph_css() {
      return {
        height: `${this.height}px`,
        position: "relative",
      };
    },
  },
  methods: {
    getPtf() {
      axios
        .get("https://yukinas-portfolio.herokuapp.com/api/portfolio")
        .then((res) => {
          this.portfolios = res.data.ptf;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openModal(portfolio) {
      this.modal = true;
      this.detail = portfolio;
    },
    closeModal() {
      this.modal = false;
    },
  },
  created() {
    this.getPtf();
  },
};
</script>

<style scoped>
/* ====================
      メイン画像
===================== */
.main {
  margin: 0 auto;
  width: 100%;
}
.main_title {
  width: 100%;
  font-size: 35px;
  position: absolute;
  top: 250px;
  color: #fff;
  text-align: left;
  background-color: rgb(137, 154, 127, 0.2);
}
.main_title h1 {
  padding-left: 40px;
}
.image {
  height: 600px;
}
/* ===================
        Skill
==================== */
#skill {
  width: 90%;
  margin: 0 auto;
}
.graph{
  width: 70%;
  margin: 0 auto;
}
/* =====================
      Portfolio
====================== */
.carousel {
  width: 70%;
  margin: 0 auto;
}
.ptf_item {
  width: 95%;
  border: 1px solid #c2c2c2;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  padding-bottom: 10px;
}
.ptf_image {
  width: 100%;
  height: 250px;
}
.ptf_item:hover {
  background: rgba(160, 118, 64, 0.2);
}
/* ===================
      レスポンシブ
==================== */
@media screen and (max-width: 768px) {
  #skill {
    width: 100%;
  }
  .graph {
    width: 95%;
  }
  input,
  textarea {
    width: 80%;
  }
  .carousel {
    width: 100%;
  }
  .ptf_item {
    height: 150px;
  }
  .ptf_image {
    height: 100px;
  }
}
</style>
