<template>
  <div class="contact">
    <h5 class="title">Contact</h5>
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
import axios from "axios";
for (let rule in rules) {
  extend(rule, rules[rule]);
}
localize("ja", ja);
export default {
  data() {
    return {
      name: "",
      email: "",
      text: "",
    };
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  methods: {
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
            .then(() => {
              this.$router.replace("/thanks");
            })
            .catch(() => {
              alert(
                "メッセージの送信ができませんでした。お手数ですが、再度お試しください。"
              );
            });
        }
      });
    },
  },
};
</script>

<style scoped>
/* =====================
      Contact
====================== */
form {
  width: 60%;
  margin: 0 auto;
  padding-left: 40px;
  text-align: left;
}
input,
textarea {
  width: 90%;
  padding: 10px;
  border: none;
  outline: none;
  border: 1px dashed #907b62;
}
textarea {
  resize: none;
  vertical-align: top;
}
.contact_form li {
  margin-top: 30px;
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
  margin: 30px 50% 20px 50%;
  transform: translate(-50%);
}
.error {
  color: red;
  margin-left: 30px;
}
/* ===================
      レスポンシブ
==================== */
@media screen and (max-width: 768px) {
  .contact_form li {
    width: 100%;
  }
  input,
  textarea {
    box-sizing: border-box;
  }
  .icon {
    margin-top: 20px;
  }
  form {
    margin: 0 auto;
    padding-left: 0;
    width: 100%;
  }
  .button {
    margin: 30px 0 20px 50%;
  }
}
</style>
