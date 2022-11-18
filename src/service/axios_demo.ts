import axios from 'axios';

const url =
  'http://scpc.fun/api/get-problem-list?limit=30&oj=Mine&currentPage=1';
// https://api.loj.ac.cn/api/problem/queryProblemSet
//https://m.weibo.cn/api/container/getIndex?sourceType=weixin&from=10CB295010&wm=9856_0004&uid=7713958069&containerid=106003_-_type:25_-_filter_type:mineband
axios.get(url).then(res => {
  console.log(res.data);
});
