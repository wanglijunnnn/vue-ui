<template>
  <div class="container">
    <div class="main">
      <div class="login-box">
        <h1>YOUKONW</h1>
        <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
            <i-input type="text" v-model="formInline.user" size='large' placeholder="Username">
            </i-input>
          </FormItem>
          <FormItem prop="password">
            <i-input type="password" v-model="formInline.password" size='large' placeholder="Password">
            </i-input>
          </FormItem>
          <FormItem>
            <Button type="primary" @click="handleSubmit('formInline')" shape="circle" size='large' style="width:100%">登陆</Button>
          </FormItem>
        </Form>
      </div>
      <div class="img-box">
        <img src="../../assets/images/login/ch.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "Please fill in the user name",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please fill in the password.",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "The password length cannot be less than 6 bits",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success("Success!");
        } else {
          this.$Message.error("Fail!");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
$theme-color: #fff;
.container {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("../../assets/images/login/bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.main {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -325px;
  margin-left: -600px;
  width: 1200px;
  height: 650px;
  background: $theme-color;
  border-radius: 8px;
  box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
}
.login-box {
  float: left;
  width: 350px;
  padding: 25px;
  margin: 140px 0 0 0;
}
.login-box h1{
  padding: 0 0 15px 0;
  text-align: center;
}
.img-box {
  float: right;
  width: 850px;
  height: 650px;
}
.img-box img {
  width: 100%;
  height: 100%;
  display: block;
}
</style>