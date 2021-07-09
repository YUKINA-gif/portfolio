<template>
<!-- フッター -->
  <footer class="flex">
    <div>
      <a href="https://twitter.com/o4s_b">
        <font-awesome-icon :icon="['fab', 'twitter']" class="icon twitter" />
      </a>
      <a href="https://github.com/YUKINA-gif">
        <font-awesome-icon :icon="['fab', 'github']" class="icon github" />
      </a>
    </div>
    <div>
      <small>CopyRight@Yukina Nakanishi 2021</small>
    </div>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  height: 60px;
  background-color: #6b5a46;
  color: #fff;
  line-height: 60px;
  justify-content: flex-end;
}
small {
  color: #fff;
  display: block;
  padding-right: 30px;
}
.icon {
  color: #fff;
  width: 25px;
  height: 25px;
  margin: 15px 10px 0 0;
  cursor: pointer;
}
/* =====================
      レスポンシブ
====================== */
@media screen and (max-width: 768px) {
  footer {
    margin: 0 auto;
    justify-content: center;
  }
  small {
    padding: 0;
  }
}
</style>
