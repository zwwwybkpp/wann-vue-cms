export const rules = {
  num: [
    { required: true, message: '手机号是必传内容~', trigger: 'blur' },
    {
      pattern: /^(?:(?:\+|00)86)?1[3-9]\d{9}$/,
      message: '请输入正确的手机号格式',
      trigger: 'blur'
    }
  ],
  code: [
    { required: true, message: '验证码是必传内容~', trigger: 'blur' },
    {
      pattern: /^[0-9]{4}$/,
      message: '验证码为4位数字',
      trigger: 'blur'
    }
  ]
}
