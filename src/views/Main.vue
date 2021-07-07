<template>
  <div class="main">
    <h1 class="main_title">Yukina Nakanishi's</h1>
    <h1 class="main_title" id="main_title2">Portfolio</h1>
    <img src="../assets/main.jpg" alt="メイン画像" class="image" />
    <div class="flex">
    <div></div>
    <div class="time_line"></div>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      skills: [],
      works: [],
    };
  },
};
</script>

<style scoped>
/* =====================
      メイン画像
====================== */
.main_title {
  font-size: 35px;
  z-index: 1;
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
      About me
====================== */
.aboutme-container {
  justify-content: center;
}
.aboutme {
  width: 60%;
  height: auto;
  margin: 0 auto;
}
.aboutme-imagediv {
  position: relative;
  width: 60%;
  margin-right: 60px;
}
.aboutme-image {
  border-radius: 10%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.aboutme-p {
  font-size: 18px;
  text-align: left;
}
.aboutme-p span {
  font-weight: bold;
}
.shadow {
  position: absolute;
  border-radius: 10%;
  top: 60%;
  left: 60%;
  background-color: rgba(180, 180, 156, 0.3);
  z-index: -10;
}
/* =====================
      Skill
====================== */
.skill-container {
  width: 20%;
  margin: 0 auto;
}
.skill-left {
  width: 80%;
  text-align: left;
}
.skill-right {
  width: 10%;
  text-align: left;
  color: rgba(180, 180, 156, 0.8);
}
/* =====================
      Works
====================== */
.works-container {
  width: 80%;
  margin: 0 auto;
}
.works-item {
  width: 30%;
  margin: 0 20px;
  border: 1px solid rgba(180, 180, 156, 0.8);
}
.works-imagediv {
  height: 250px;
  position: relative;
}
.work-title {
  margin: 15px auto;
}
/* =====================
      contact
====================== */
.contact-container {
  position: relative;
  width: 100%;
  height: 100px;
  margin-bottom: 40px;
}
.contact-image {
  width: 100px;
  margin-top: 20px;
}
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
