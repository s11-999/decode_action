
/*
中国联通 v2.08
​
包含以下功能:
阅光宝盒, 首页签到, 立减金打卡, 阅读专区抽奖, 云盘抽奖, 联通祝福
支付日活动 (每个月26-28号)
618集卡活动 (5.31-6.20)
​
首页签到默认运行, 需要关闭的设置变量 chinaUnicomSign='false'
联通祝福默认运行, 需要关闭的设置变量 chinaUnicomLtzf='false'
​
定时每天两三次
需要在联通APP中选择退出登录-切换账号登录, 捉下面这个包
https://m.client.10010.com/mobileService/onLine.htm
把请求体(body)里面的token_online参数填到变量 chinaUnicomCookie 里, 多账号换行或&或@隔开:
export chinaUnicomCookie="a3e4c1ff25da2xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
​
cron: 0 0,7,20 * * *
const $ = new Env("中国联通");
*/
function _0x2abc(_0x2dbfcb, _0x396f1d) {
  const _0xab101c = _0x1e63();
  _0x2abc = function (_0x56ec87, _0x11ef09) {
    _0x56ec87 = _0x56ec87 - 164;
    let _0x5807b9 = _0xab101c[_0x56ec87];
    return _0x5807b9;
  };
  return _0x2abc(_0x2dbfcb, _0x396f1d);
}
const _0x381c30 = _0x2abc;
(function (_0x35bba7, _0x306df8) {
  const _0x2766bc = _0x2abc,
    _0x31874d = _0x35bba7();
  while (true) {
    try {
      const _0x2d43d9 = parseInt(_0x2766bc(689)) / 1 * (parseInt(_0x2766bc(204)) / 2) + -parseInt(_0x2766bc(1119)) / 3 + -parseInt(_0x2766bc(808)) / 4 + -parseInt(_0x2766bc(725)) / 5 * (parseInt(_0x2766bc(2013)) / 6) + -parseInt(_0x2766bc(1118)) / 7 + parseInt(_0x2766bc(259)) / 8 * (-parseInt(_0x2766bc(1718)) / 9) + -parseInt(_0x2766bc(1554)) / 10 * (-parseInt(_0x2766bc(838)) / 11);
      if (_0x2d43d9 === _0x306df8) {
        break;
      } else {
        _0x31874d.push(_0x31874d.shift());
      }
    } catch (_0xfde96f) {
      _0x31874d.push(_0x31874d.shift());
    }
  }
})(_0x1e63, 476776);
const _0x4c672b = _0x4a9430(_0x381c30(558)),
  _0x2bba68 = require("got"),
  _0x2bbc1d = require(_0x381c30(385)),
  {
    exec: _0x526718
  } = require(_0x381c30(594) + _0x381c30(1008) + "ess"),
  _0x368aa5 = require(_0x381c30(595) + "o-js"),
  {
    CookieJar: _0x4484a5
  } = require(_0x381c30(1729) + _0x381c30(1693) + "ie"),
  _0x24434b = _0x381c30(378) + _0x381c30(827) + "m",
  _0x55899c = ["\n", "&", "@"],
  _0x52f10b = [_0x24434b + (_0x381c30(2045) + "e")],
  _0x159493 = process[_0x381c30(430)][_0x24434b + "Sign"] === "false",
  _0xedc529 = process[_0x381c30(430)][_0x24434b + _0x381c30(391)] === _0x381c30(1857),
  _0x148eb1 = 50000,
  _0x1cbe1e = 3;
const _0x2bad9c = 2.08,
  _0x4a2c68 = _0x381c30(378) + _0x381c30(827) + "m",
  _0x2eca5f = "https://leafxcy" + _0x381c30(805) + _0x381c30(1828) + _0x381c30(1767) + "/user" + _0x381c30(1612) + "xcy/p" + _0x381c30(376) + "t/val" + _0x381c30(1800) + _0x381c30(1946) + _0x381c30(473) + _0x381c30(1407) + "valid" + _0x381c30(1350) + _0x381c30(1414) + _0x381c30(483) + _0x381c30(340) + _0x381c30(1043) + _0x381c30(1655),
