<template>
  <div class="aboutme">
    <h2 class="title">About me</h2>
    <div class="flex">
      <div class="aboutme_image">
        <div class="image_back"></div>
      </div>
      <div class="aboutme_text">
        <p>中西 由季奈</p>
        <p>1993年生まれ</p>
        <p>
          ECサイト運営の受注としてお客様対応する中でサイトについてのエラーや問い合わせを答えられないことにもどかしく感じ、プログラミングの勉強をはじめる。それがとても楽しく、自分にはモノづくりがあっていることに気付き、1月下旬から本格的に勉強を開始。
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* =====================
      About me
====================== */
#aboutme {
  width: 100%;
  margin: 0 auto;
}
.aboutme_image {
  position: relative;
  width: 350px;
  height: 320px;
  border-radius: 10%;
  background-image: url(https://yn-portfolio.s3.ap-northeast-3.amazonaws.com/profile.jpg);
  background-size: cover;
}
.image_back {
  width: 100%;
  height: 320px;
  position: absolute;
  border-radius: 10%;
  top: 20px;
  left: 20px;
  background-color: #f9efdc;
  z-index: -10;
}
.aboutme_text {
  width: 30%;
  text-align: left;
  font-size: 18px;
  margin-left: 60px;
}
.flex {
  justify-content: center;
}

/* ===================
      レスポンシブ
==================== */
@media screen and (max-width: 768px) {
  .aboutme,
  .aboutme_image,
  .aboutme_text {
    width: 90%;
    margin: 0 auto;
  }
  .flex {
    flex-wrap: wrap;
  }
  .aboutme_text {
    margin-top: 50px;
  }
}
</style>
