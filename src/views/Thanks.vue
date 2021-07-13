<template>
  <div class="thanks">
    <p>お問い合わせありがとうございます</p>
    <button class="button" @click="$router.push('/')">戻る</button>
  </div>
</template>

<style scoped>
/* ===================
       Thanks
==================== */
.thanks {
  width: 100%;
  margin: 80px auto;
}
p {
  font-size: 20px;
  font-weight: bold;
  color: #907b62;
}
.button {
  color: #fff;
  background-color: #907b62;
  border: 1px solid #907b62;
  cursor: pointer;
  padding: 5px 15px;
  margin-top: 20px;
}
</style>
