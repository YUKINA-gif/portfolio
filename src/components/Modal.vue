<template>
  <transition name="modal">
    <!-- モーダルウインドウ -->
    <div class="overlay" @click.self="$emit('close')">
      <div class="modal_window">
        <div class="image_div">
          <img
            :src="
              'https://yn-portfolio.s3.ap-northeast-3.amazonaws.com/' +
                detail.image
            "
            alt="制作物画像"
            class="image"
          />
        </div>
        <h3 class="title">{{ detail.name }}</h3>
        <p>{{ detail.detail }}</p>
        <table>
          <tr>
            <th>フロントエンド:</th>
            <td>
              <a :href="detail.github_front">{{ detail.github_front }}</a>
            </td>
          </tr>
          <tr>
            <th>バックエンド:</th>
            <td>
              <a :href="detail.github_api">{{ detail.github_api }}</a>
            </td>
          </tr>
          <tr>
            <th>開発期間:</th>
            <td>{{ detail.created }}</td>
          </tr>
          <tr>
            <th>苦労した点:</th>
            <td>{{ detail.difficulties }}</td>
          </tr>
          <tr>
            <th>解決方法:</th>
            <td>{{ detail.solutions }}</td>
          </tr>
        </table>

        <button @click.self="$emit('close')" class="button">Back</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["detail"],
  data() {
    return {};
  },
};
</script>

<style scoped>
/* ====================
  モーダルウインドウ
==================== */
.overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal_window {
  text-align: center;
  z-index: 5;
  width: 50%;
  padding: 20px;
  background: #fff;
  font-size: 15px;
}
.title {
  margin: 0 auto;
  font-size: 25px;
  font-weight: bold;
}
.image_div {
  height: 320px;
}
li {
  list-style: none;
}
span {
  font-weight: bold;
  color: #907b62;
}
table {
  text-align: left;
}
tr {
  border-bottom: 1px dashed #907b62;
}
th {
  width: 20%;
}
td {
  width: 80%;
}
.button {
  color: #fff;
  background-color: #907b62;
  border: 1px solid #907b62;
  cursor: pointer;
  padding: 10px 15px;
  margin-top: 10px;
}
/* ====================
      レスポンシブ
==================== */
@media screen and (max-width: 768px) {
  .modal_window {
    width: 80%;
    font-size: 13px;
  }
  .image_div {
    height: 200px;
  }
}
</style>
