<template>
  <div class="main">
    <!-- メインイメージ -->
    <h1 class="main_title">Yukina Nakanishi's</h1>
    <h1 class="main_title" id="main_title2">Portfolio</h1>
    <img
      src="https://yn-portfolio.s3.ap-northeast-3.amazonaws.com/main.jpg"
      alt="メイン画像"
      class="image"
    />
    <!-- About me -->
    <div class="flex contents">
      <div id="aboutme">
        <h2 class="title">About me</h2>
        <div class="flex flex_container">
          <div class="aboutme_image">
            <div class="image_back"></div>
          </div>
          <div class="aboutme_text">
            <p>中西 由季奈</p>
            <p>1993年生まれ。</p>
            <p>
              ECサイト運営の受注としてお客様対応する中でサイトについてのエラーや問い合わせを答えられないことにもどかしく感じ、プログラミングの勉強をはじめる。それがとても楽しく、自分にはモノづくりがあっていることに気付き、1月下旬から本格的に勉強を開始。
            </p>
          </div>
        </div>
        <div>
          <!-- Portfolio -->
          <h2 class="title ptf_title" id="portfolio">Portfolio</h2>
          <carousel :per-page="2" :autoplay="autoplay" :loop="loop">
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
          <!-- ポートフォリオ詳細 -->
          <Modal v-if="modal" @close="closeModal" :detail="detail"></Modal>
        </div>
      </div>
      <!-- タイムライン -->
      <div class="time_line">
        <h2 class="title">Tweets</h2>
        <h3 class="sab_title title">日々の積み上げツイート</h3>
        <Timeline
          :id="twitter_id"
          sourceType="profile"
          error-message="This tweet could not be loaded"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { Timeline } from "vue-tweet-embed";
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";
import Modal from "../components/Modal.vue";
export default {
  data() {
    return {
      skills: [],
      portfolios: [],
      twitter_id: "o4s_b",
      autoplay: true,
      loop: true,
      modal: false,
    };
  },
  components: {
    Timeline,
    Carousel,
    Slide,
    Modal,
  },
  methods: {
    async getPtf() {
      await axios
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
/* =====================
      メイン画像
====================== */
.main_title {
  font-size: 35px;
  position: absolute;
  top: 250px;
  left: 40px;
  color: #fff;
}
#main_title2 {
  position: absolute;
  top: 300px;
}
.image {
  height: 600px;
}
/* =====================
      タイムライン
====================== */
.time_line {
  width: 500px;
}
.contents {
  justify-content: space-around;
  padding: 0 90px;
  margin-top: 10px;
}
.sab_title {
  font-size: 18px;
}
/* =====================
      About me
====================== */
#aboutme {
  width: 100%;
  height: auto;
  margin: 0 auto;
}
.aboutme_image {
  position: relative;
  width: 300px;
  height: 280px;
  border-radius: 10%;
  background-image: url(https://yn-portfolio.s3.ap-northeast-3.amazonaws.com/profile.jpg);
  background-size: cover;
}
.image_back {
  width: 300px;
  height: 280px;
  position: absolute;
  border-radius: 10%;
  top: 20px;
  left: 20px;
  background-color: #f9efdc;
  z-index: -10;
}
.aboutme_text {
  width: 50%;
  text-align: left;
  font-size: 18px;
  margin-left: 30px;
}
.flex_container {
  justify-content: center;
}
/* =====================
      Portfolio
====================== */
.ptf_item {
  width: 90%;
  height: 300px;
  border: 1px solid #c2c2c2;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
  cursor: pointer;
}
.ptf_image {
  width: 100%;
  height: 250px;
}
.ptf_item:hover{
  background: #fff;
}
/* =====================
      Skill
====================== */

/* =====================
      contact
====================== */

/* =====================
      レスポンシブ
====================== */
@media screen and (max-width: 768px) {
  .aboutme {
    width: 100%;
  }
  .aboutme-imagediv {
    height: 300px;
    width: 90%;
    margin: 0 auto;
  }
  .aboutme-container {
    flex-wrap: wrap;
    width: 90%;
  }
  .aboutme-p {
    margin: 10% 0 0 5%;
  }
  .skill-container {
    width: 55%;
  }
  .works-container {
    width: 90%;
    flex-wrap: wrap;
  }
  .works-item {
    width: 90%;
    margin-bottom: 20px;
  }
  .contact-container {
    width: 90%;
    margin: 0 auto;
    height: 150px;
  }
  .contact-image {
    margin-top: 30px;
    height: 100px;
    display: inline-block;
  }
}
</style>
