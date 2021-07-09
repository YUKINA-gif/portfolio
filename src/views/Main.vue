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
          <!-- モーダルウインドウ表示 -->
          <Modal v-if="modal" @close="closeModal" :detail="detail"></Modal>
          <!-- Skill -->
          <div id="skill">
            <h2 class="title">Skill</h2>
            <Graph :styles="graph_css" class="graph" />
          </div>
          <!-- Contact -->
          <div id="contact">
            <h2 class="title">Contact</h2>
            <ValidationObserver ref="observer">
              <form action="">
                <ul class="contact_form">
                  <li>
                    <ValidationProvider
                      rules="required"
                      ref="myname"
                      v-slot="{ errors }"
                    >
                      <label for="name">
                        <font-awesome-icon icon="user" class="icon" />
                      </label>
                      <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        name="Name"
                        v-model="name"
                      /><br />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </li>
                  <li>
                    <ValidationProvider
                      rules="required|email"
                      ref="myname"
                      v-slot="{ errors }"
                    >
                      <label for="email">
                        <font-awesome-icon icon="envelope" class="icon" />
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="Email"
                        placeholder="Email"
                        v-model="email"
                      /><br />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </li>
                  <li>
                    <ValidationProvider
                      rules="required"
                      ref="myname"
                      v-slot="{ errors }"
                    >
                      <label for="text">
                        <font-awesome-icon icon="pen" class="icon" />
                      </label>
                      <textarea
                        name="Text"
                        id="text"
                        cols="40"
                        rows="8"
                        placeholder="Message"
                        v-model="text"
                      ></textarea
                      ><br />
                      <span class="error">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </li>
                </ul>
                <button class="button" type="button" @click="contact">
                  Send
                </button>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
      <!-- タイムライン -->
      <div class="time_line">
        <h2 class="tweet_title">Tweets</h2>
        <h3 class="sab_title">日々の積み上げツイート</h3>
        <h1 class="sab_title">(1/20~毎日投稿中)</h1>
        <Timeline
          :id="twitter_id"
          sourceType="profile"
          error-message="This tweet could not be loaded"
          :options="{ tweetLimit: '9' }"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
  extend,
  localize,
} from "vee-validate";
import ja from "vee-validate/dist/locale/ja";
import * as rules from "vee-validate/dist/rules";
for (let rule in rules) {
  extend(rule, rules[rule]);
}
localize("ja", ja);
import { Timeline } from "vue-tweet-embed";
import { Carousel, Slide } from "vue-carousel";
import axios from "axios";
import Modal from "../components/Modal.vue";
import Graph from "../components/Graph.vue";
export default {
  data() {
    return {
      portfolios: [],
      twitter_id: "o4s_b",
      autoplay: true,
      loop: true,
      modal: false,
      height: 500,
      name: "",
      email: "",
      text: "",
    };
  },
  components: {
    Timeline,
    Carousel,
    Slide,
    Modal,
    Graph,
    ValidationObserver,
    ValidationProvider,
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
    contact() {
      // バリデーション
      this.$refs.observer.validate().then((res) => {
        // バリデーションが有効ならスルー
        if (res == false) {
          console.log(res);
          // そうでなければ送信
        } else {
          axios
            .post("https://yukinas-portfolio.herokuapp.com/api/contact", {
              name: this.name,
              email: this.email,
              text: this.text,
            })
            .then((res) => {
              alert("メッセージの送信が完了しました。");
              console.log(res);
              this.$router.go({
                path: this.$router.currentRoute.path,
                force: true,
              });
            })
            .catch((err) => {
              alert(
                "メッセージの送信ができませんでした。お手数ですが、再度お試しください。"
              );
              console.log(err);
            });
        }
      });
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
/* =====================
      タイムライン
====================== */
.time_line {
  width: 500px;
}
.contents {
  justify-content: space-around;
  padding: 0 80px;
  margin-top: 10px;
}
.tweet_title {
  margin-top: 60px;
  font-size: 30px;
  color: #907b62;
}
.sab_title {
  font-size: 18px;
  color: #907b62;
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
  width: 350px;
  height: 330px;
  border-radius: 10%;
  background-image: url(https://yn-portfolio.s3.ap-northeast-3.amazonaws.com/profile.jpg);
  background-size: cover;
}
.image_back {
  width: 100%;
  height: 330px;
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
  margin-left: 60px;
}
/* =====================
      Portfolio
====================== */
.ptf_item {
  width: 90%;
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
  background: rgba(160, 118, 64, 0.4);
}
/* =====================
      Skill
====================== */
.graph {
  width: 90%;
}
/* =====================
      Contact
====================== */
#contact {
  width: 80%;
  margin: 0 auto;
}
.contact_form li {
  margin-bottom: 30px;
  text-align: left;
}
input,
textarea {
  width: 85%;
  padding: 10px;
  border: none;
  outline: none;
  border: 1px dashed #907b62;
}
textarea {
  resize: none;
  vertical-align: top;
}
.icon {
  color: #907b62;
  width: 25px;
  height: 20px;
  margin-right: 5px;
}
.button {
  color: #fff;
  background-color: #907b62;
  border: 1px solid #907b62;
  cursor: pointer;
  padding: 10px 15px;
  margin-bottom: 10px;
}
.error {
  color: red;
  margin-left: 30px;
}
/* =====================
      レスポンシブ
====================== */
@media screen and (max-width: 768px) {
  .main {
    width: 100%;
  }
  .flex {
    flex-wrap: wrap;
  }
  .aboutme_image,
  .aboutme_text,
  #contact {
    width: 100%;
  }
  .aboutme_text {
    margin: 30px 0;
  }
  .contents {
    width: 90%;
    padding: 0;
    margin: 0 auto;
  }
  .image_back {
    left: 0;
  }
  .ptf_image {
    height: 130px;
  }
  .graph {
    width: 100%;
  }
  input,
  textarea {
    width: 80%;
  }
}
</style>
