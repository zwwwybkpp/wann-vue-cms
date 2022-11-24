export const rules = {
  name: [
    { required: true, message: '账号是必传内容~', trigger: 'blur' },
    {
      pattern: /^[\w-]{4,16}$/,
      message: '账号为4到16位(字母,数字,下划线,减号)',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码是必传内容~', trigger: 'blur' },
    {
      pattern: /^[a-zA-z0-9]{6,16}$/,
      message: '密码为6到16位字母和数字的组合',
      trigger: 'blur'
    }
  ]
}
