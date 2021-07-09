<template>
  <div :class="header" class="header">
    <!-- ヘッダー -->
    <div class="menu">
      <nav class="nav">
        <ul class="flex">
          <li>
            <a href="#aboutme">About me</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <!-- ハンバーガーメニュー -->
      <div class="hamburger" @click="hamburger()" :class="{ active: menu }">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav :class="{ open: menu }" class="menu_content">
        <ul class="hamburger_memu">
          <li>
            <a href="#aboutme"> About me</a>
          </li>
          <li>
            <a href="#portfolio"> Portfolio</a>
          </li>
          <li>
            <a href="#skill"> Skill</a>
          </li>
          <li>
            <a href="#contact"> Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
      header: "default",
    };
  },
  methods: {
    hamburger() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style scoped>
/* ====================
      ヘッダー
==================== */
.header {
  height: 60px;
  line-height: 60px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color: #899a7f;
}
.menu a {
  color: #fff;
}
h1 {
  font-size: 28px;
  cursor: pointer;
}
.nav,
h1 {
  color: #fff;
  margin-left: 20px;
}
.nav {
  position: absolute;
  right: 0;
}
.nav ul li {
  padding-right: 30px;
  font-weight: bold;
  cursor: pointer;
}
.menu_content {
  display: none;
}
.icon {
  width: 19px;
  height: auto;
  cursor: pointer;
  color: #fff;
  margin-right: 2px;
}
.title_icon {
  width: 30px;
  height: auto;
}
/* ====================
      レスポンシブ
==================== */
@media screen and (max-width: 768px) {
  .nav {
    display: none;
  }
  .hamburger {
    width: 40px;
    height: 40px;
    cursor: pointer;
    z-index: 100;
    transition: 0.4s;
    position: absolute;
    right: 30px;
  }
  .hamburger span {
    margin-top: 7px;
    display: inline-block;
    position: absolute;
    width: 35px;
    height: 3px;
    background-color: #fff;
    transition: 0.3s;
  }
  .hamburger span:nth-of-type(1) {
    top: 10px;
  }
  .hamburger span:nth-of-type(2) {
    top: 20px;
  }
  .hamburger span:nth-of-type(3) {
    top: 30px;
  }
  .hamburger.active span:nth-of-type(1) {
    top: 20px;
    transform: rotate(45deg);
  }
  .hamburger.active span:nth-of-type(2) {
    opacity: 0;
  }
  .hamburger.active span:nth-of-type(3) {
    top: 20px;
    transform: rotate(-45deg);
  }
  .menu_content {
    display: block;
    width: 200px;
    text-align: center;
    position: fixed;
    transition: 0.3s;
    top: 60px;
    right: calc(-100% - 80px);
    background: rgb(255, 255, 255, 0.7);
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.4);
    z-index: 999;
    font-weight: bold;
  }
  .menu_content li {
    margin: 15px;
    padding: 5px;
    border-bottom: 0.5px solid #899a7f;
    text-decoration: none;
    display: block;
    width: 100%;
    text-align: left;
    cursor: pointer;
  }
  .menu_content.open {
    right: 0;
  }
  .menu_content li a {
    display: inline-block;
    text-decoration: none;
    color: #6b5a46;
    display: block;
  }
  .hamburger_icon {
    margin-right: 3px;
  }
}
</style>
