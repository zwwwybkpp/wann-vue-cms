export const rules = {
  name: [
    { required: true, message: '账号是必传内容~', trigger: 'blur' },
    {
      pattern: /^[\w-]{5,16}$/,
      message: '账号为5到16位(字母,数字,下划线,减号)',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码是必传内容~', trigger: 'blur' },
    {
      pattern: /^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/,
      message: '密码为6到10位含大小写字母和数字的组合',
      trigger: 'blur'
    }
  ]
}
