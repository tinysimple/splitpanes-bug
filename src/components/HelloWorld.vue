<script setup>
import { onBeforeMount, onMounted, ref } from "vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";

const show = ref(true);

const storageValue = localStorage.getItem("type") || "1";
const type = ref(storageValue);
const loginForm = ref({
  username: "1212312",
  password: type.value === "2" ? "123" : "",
});

const handleTypeChange = (val) => {
  console.log(val);
  type.value = val;
  localStorage.setItem("type", val);
  // 刷新当前页面
  window.location.reload();
};

const psw = ref("");

onMounted(() => {
  if (type.value === "1") {
    psw.value.value = "123456";
  }
});
</script>

<template>
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: auto;
      width: 100vw;
    "
  >
    <div v-if="show" style="height: 100px; width: 60vw; margin: auto">
      <splitpanes class="default-theme">
        <pane size="16"> 16%左边面板 </pane>
        <pane size="84"> 84%右边面板 </pane>
      </splitpanes>
    </div>
    <div>
      <div style="margin-top: 20px">
        密码框（有初始值）：
        <el-radio-group v-model="type" @change="handleTypeChange">
          <el-radio value="1">原生密码输入框</el-radio>
          <el-radio value="2">element-plus密码输入框</el-radio>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        密码框（无初始值）：
        <el-radio-group v-model="type" @change="handleTypeChange">
          <el-radio value="-1">无初始值</el-radio>
        </el-radio-group>
      </div>
    </div>

    <div class="login" style="flex-direction: column">
      <div class="login-form">
        <label>原生密码框：</label><input ref="psw" type="password" />
      </div>
      <el-form ref="loginRef" :model="loginForm" class="login-form">
        <el-form-item prop="password">
          <label>element-ui 密码框：</label>
          <el-input
            v-model="loginForm.password"
            type="password"
            size="large"
            auto-complete="off"
            placeholder="密码"
          />
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>

<style lang='scss' scoped>
.login {
  display: flex;
  justify-content: right;
  align-items: center;
  height: 100%;
  // background-image: url("../assets/vue.svg");
  background-size: cover;
  padding-right: 50px;
  /* 增加右内边距，将内容整体离右边 30 像素 */
  padding-left: 50px;

  /* 语言切换按钮 */
  .lang-switch {
    position: absolute;
    top: 15px;
    right: 15px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 10px;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background: rgba(0, 0, 0, 0.05);
    }

    // .el-icon {
    //   color: #409eff;
    // }
    .earth-icon {
      font-size: 24px;
      color: #409eff;
    }

    // .lang-tag {
    //   font-size: 12px;
    //   color: #666;
    //   font-weight: 500;
    // }
  }
}

.logo-container {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  /* 可根据需要调整间距 */
}

.centered-logo {
  max-width: 100%;
  /* 确保图片不超出容器 */
}

.title {
  margin: 10px auto 30px auto;
  text-align: center;
  // color: #a9bec5;
  color: #1696d7;
}

.login-form {
  border-radius: 6px;
  background: #ffffff;
  //background: rgba(5, 87, 170, 0.8);
  width: 400px;
  height: auto; // 420p为固定大小
  // opacity: 0.8;
  padding: 25px 25px 5px 25px;

  .el-input {
    height: 40px;

    input {
      height: 40px;
    }
  }

  .input-icon {
    height: 39px;
    width: 14px;
    margin-left: 0px;
  }

  .smsbtn-text {
    color: rgb(61, 151, 249);
  }

  .is-active {
    background-color: #409eff; // 修改激活状态的背景颜色
    color: #101011; // 修改激活状态的字体颜色
  }

  // 按钮容器样式
  .button-container {
    position: relative;
    display: flex;
    margin-bottom: 20px;
  }

  // 滑动按钮样式
  .slide-button {
    flex: 1;
    text-align: center;
    padding: 10px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    // background-color: #ccc; // 添加默认背景颜色
    // color: #333; // 添加默认字体颜色
  }

  // 滑块样式
  .slider {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 2px;
    background-color: #409eff;
    transition: left 0.3s ease;
  }
}

.login-tip {
  font-size: 13px;
  text-align: center;
  color: #bfbfbf;
}

.login-code {
  width: 33%;
  height: 40px;
  float: right;

  img {
    cursor: pointer;
    vertical-align: middle;
  }
}

.el-login-footer {
  height: 40px;
  line-height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  text-align: center;
  color: #fff;
  font-family: Arial;
  font-size: 12px;
  letter-spacing: 1px;
}

.login-code-img {
  height: 40px;
  padding-left: 12px;
}
</style>
