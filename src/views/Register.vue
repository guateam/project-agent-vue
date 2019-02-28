<template>
  <div class="register">
    <v-container>
      <div class="head">
        <h1>你好，<br/>欢迎来到<span style="color: #ffcc00">&nbsp;&nbsp;&nbsp;批批乎</span></h1>
      </div>
      <form class="form">
        <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="邮箱"
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
        ></v-text-field>
        <v-text-field
            v-model="password"
            :error-messages="passwordErrors"
            label="密码"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            :append-icon="show ? 'visibility_off' : 'visibility'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
        ></v-text-field>
        <v-text-field
            v-model="password"
            :error-messages="passwordErrors"
            label="确认密码"
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
            :append-icon="show ? 'visibility_off' : 'visibility'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
        ></v-text-field>

        <v-btn @click="register">注册</v-btn>
        <v-btn @click="$router.push({name: 'login'})">返回</v-btn>
      </form>
    </v-container>
  </div>
</template>

<style scoped>
  .form {
    margin-top: 2em;
  }
  .head{
    margin-top: 3em;
  }
</style>