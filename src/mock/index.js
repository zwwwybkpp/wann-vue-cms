/* eslint-disable no-undef */
// 引入 mock
const Mock = require('mockjs')
const Random = Mock.Random

Mock.Random.extend({
  phone: function () {
    var phonePrefixs = ['132', '135', '189', '177'] // 自己写前缀哈
    return this.pick(phonePrefixs) + Mock.mock(/\d{8}/) //Number()
  }
})

module.exports = () => {
  const data = { list: [] }
  for (let index = 0; index < 20; index++) {
    data.list.push({
      id: index,
      name: Random.cname(),
      sex: Random.boolean() ? '女' : '男',
      tel: Random.phone()
    })
  }
  return data
}
