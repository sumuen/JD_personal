/*
lzkj签到有礼
不自动入会，不自动入会，不自动入会
地址：
export jd_lzkj_signActivity2_ids = "id1&id2&id3"     活动Id   必须
export jd_lzkj_signActivity2_num="10"                执行前多少个号  不设置则默认执行前10个
export jd_lzkj_signActivity2_openCard="1"            设置为1则默认不入会 不设置或者设置为0则自动入会
cron "1" jd_lzkj_signActivity2.js
*/

const $ = new Env('lzkj签到有礼')
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';


var __encode = 'jsjiami.com', _a = {},
    _0xb483 = ["\x5F\x64\x65\x63\x6F\x64\x65", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];
(function (_0xd642x1) {
    _0xd642x1[_0xb483[0]] = _0xb483[1]
})(_a);
var __Oxeb34e = ["", "\x6A\x64\x5F\x6C\x7A\x6B\x6A\x5F\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x32\x5F\x69\x64\x73", "\x65\x6E\x76", "\x6A\x64\x5F\x6C\x7A\x6B\x6A\x5F\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x32\x5F\x6E\x75\x6D", "\x6A\x64\x5F\x6C\x7A\x6B\x6A\x5F\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x32\x5F\x6F\x70\x65\x6E\x43\x61\x72\x64", "\x69\x73\x4E\x6F\x64\x65", "\x70\x75\x73\x68", "\x66\x6F\x72\x45\x61\x63\x68", "\x6B\x65\x79\x73", "\x4A\x44\x5F\x44\x45\x42\x55\x47", "\x66\x61\x6C\x73\x65", "\x6C\x6F\x67", "\x66\x69\x6C\x74\x65\x72", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44", "\x67\x65\x74\x64\x61\x74\x61", "\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32", "\x63\x6F\x6F\x6B\x69\x65", "\x6D\x61\x70", "\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44", "\x5B\x5D", "\x68\x6F\x74\x46\x6C\x61\x67", "\x6F\x75\x74\x46\x6C\x61\x67", "\x61\x63\x74\x69\x76\x69\x74\x79\x45\x6E\x64", "\x62\x65\x61\x6E\x4E\x75\x6C\x6C", "\x70\x72\x69\x7A\x65\x4C\x69\x73\x74", "\x26", "\x69\x6E\x64\x65\x78\x4F\x66", "\x73\x70\x6C\x69\x74", "\x64\x6F\x6E\x65", "\x66\x69\x6E\x61\x6C\x6C\x79", "\x6C\x6F\x67\x45\x72\x72", "\x63\x61\x74\x63\x68", "\x6E\x61\x6D\x65", "\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x6D\x73\x67", "\x6C\x65\x6E\x67\x74\x68", "\x65\x78\x70\x6F\x72\x74\x20\x6A\x64\x5F\x6C\x7A\x6B\x6A\x5F\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x32\x5F\x69\x64\x73\x3D\x22\x69\x64\x31\x26\x69\x64\x32\x26\x69\x64\x33\x2E\x2E\x2E\x22\x20\u672A\u8BBE\u7F6E\x20\u9000\u51FA\uFF01\uFF01\uFF01", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x72\x61\x6E\x64\x6F\x6D\x4E\x75\x6D", "\x61\x63\x74\x69\x76\x69\x74\x79\x55\x72\x6C", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x6B\x6A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D\x2F\x73\x69\x67\x6E\x2F\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x32\x3F\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x73\x69\x64\x3D\x26\x75\x6E\x5F\x61\x72\x65\x61\x3D", "\u5F53\u524D\u6D3B\u52A8\x3A\x20", "\u6D3B\u52A8\u5730\u5740\x3A\x20", "\x72\x61\x6E\x64\x6F\x6D", "\x77\x61\x69\x74", "\x55\x73\x65\x72\x4E\x61\x6D\x65", "\x6D\x61\x74\x63\x68", "\x69\x6E\x64\x65\x78", "\x62\x65\x61\x6E", "\x6E\x69\x63\x6B\x4E\x61\x6D\x65", "\x69\x73\x4C\x6F\x67\x69\x6E", "\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7", "\u3011", "\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A", "\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548", "\u4EAC\u4E1C\u8D26\u53F7", "\x20", "\x5C\x6E\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x5C\x6E\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E", "\u6267\u884C\u4E86", "\u4E2A\u9000\u51FA", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C", "\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79", "\x54\x6F\x6B\x65\x6E", "\x50\x69\x6E", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72", "\u83B7\u53D6\x5B\x74\x6F\x6B\x65\x6E\x5D\u5931\u8D25\uFF01", "\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\u5931\u8D25", "\x67\x65\x74\x53\x69\x6D\x70\x6C\x65\x41\x63\x74\x49\x6E\x66\x6F\x56\x6F", "\x67\x65\x74\x4D\x79\x50\x69\x6E\x67", "\x67\x65\x74\x4D\x79\x50\x69\x6E\x67\x20\u83B7\u53D6\u5931\u8D25", "\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44", "\x67\x65\x74\x41\x63\x74\x69\x76\x69\x74\x79", "\u62BD\u5956\u89C4\u5219\x3A", "\x72\x75\x6C\x65", "\x67\x65\x74\x53\x68\x6F\x70\x49\x6E\x66\x6F", "\u5E97\u94FA\x3A\x20", "\x73\x68\x6F\x70\x4E\x61\x6D\x65", "\u4F1A\u5458\x3A\x20", "\x75\x73\x65\x72\x49\x64", "\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F", "\x67\x65\x74\x53\x69\x67\x6E\x49\x6E\x66\x6F", "\x6C\x61\x73\x74\x53\x69\x67\x6E\x44\x61\x74\x65", "\u4ECA\u65E5\u5DF2\u7B7E\u5230", "\x67\x65\x74\x41\x63\x74\x4D\x65\x6D\x62\x65\x72\x49\x6E\x66\x6F", "\x6F\x70\x65\x6E\x65\x64\x43\x61\x72\x64", "\u53BB\u5165\u4F1A\x3A", "\x6A\x6F\x69\x6E\x56\x65\x6E\x64\x65\x72\x49\x64", "\u6D3B\u52A8\u592A\u706B\u7206\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5", "\x65\x72\x72\x6F\x72\x4A\x6F\x69\x6E\x53\x68\x6F\x70", "\u52A0\u5165\u5E97\u94FA\u4F1A\u5458\u5931\u8D25", "\u7B2C\x31\u6B21\u91CD\u8BD5", "\u7B2C\x32\u6B21\u91CD\u8BD5", "\u7B2C\x33\u6B21\u91CD\u8BD5", "\u5982\u9700\u81EA\u52A8\u5165\u4F1A\x2C\x20\u8BF7\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF\x3A\x20\x65\x78\x70\x6F\x72\x74\x20\x6A\x64\x5F\x6C\x7A\x6B\x6A\x5F\x73\x69\x67\x6E\x41\x63\x74\x69\x76\x69\x74\x79\x32\x5F\x6F\x70\x65\x6E\x43\x61\x72\x64\x3D\x22\x31\x22", "\u5DF2\u5165\u4F1A\x3A", "\x73\x69\x67\x6E\x55\x70", "\x61\x74\x74\x65\x6E\x64\x4C\x6F\x67", "\u4EAC\u8C46\u8BA1\u5212\u4F59\u989D\u4E0D\u8DB3\x2C\x20\u9000\u51FA", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x7A\x6B\x6A\x2D\x69\x73\x76\x2E\x69\x73\x76\x6A\x63\x6C\x6F\x75\x64\x2E\x63\x6F\x6D", "\x50\x4F\x53\x54", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x26\x6C\x6D\x74\x3D\x30", "\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x53\x69\x6D\x70\x6C\x65\x41\x63\x74\x49\x6E\x66\x6F\x56\x6F", "\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x2F\x63\x75\x73\x74\x6F\x6D\x65\x72\x2F\x67\x65\x74\x4D\x79\x50\x69\x6E\x67", "\x75\x73\x65\x72\x49\x64\x3D", "\x26\x74\x6F\x6B\x65\x6E\x3D", "\x26\x66\x72\x6F\x6D\x54\x79\x70\x65\x3D\x41\x50\x50", "\x2F\x73\x69\x67\x6E\x2F\x77\x78\x2F\x67\x65\x74\x41\x63\x74\x69\x76\x69\x74\x79", "\x61\x63\x74\x49\x64\x3D", "\x26\x76\x65\x6E\x64\x65\x72\x49\x64\x3D", "\x2F\x73\x69\x67\x6E\x2F\x77\x78\x2F\x67\x65\x74\x53\x69\x67\x6E\x49\x6E\x66\x6F", "\x26\x70\x69\x6E\x3D", "\x2F\x73\x69\x67\x6E\x2F\x77\x78\x2F\x67\x65\x74\x53\x68\x6F\x70\x49\x6E\x66\x6F", "\x76\x65\x6E\x64\x65\x72\x49\x64\x3D", "\x2F\x77\x78\x44\x72\x61\x77\x41\x63\x74\x69\x76\x69\x74\x79\x2F\x64\x72\x61\x77\x4D\x79\x4F\x6B\x4C\x69\x73\x74", "\x26\x74\x79\x70\x65\x3D", "\x61\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65", "\x64\x72\x61\x77\x4D\x79\x4F\x6B\x4C\x69\x73\x74", "\x2F\x77\x78\x41\x63\x74\x69\x6F\x6E\x43\x6F\x6D\x6D\x6F\x6E\x2F\x67\x65\x74\x55\x73\x65\x72\x49\x6E\x66\x6F", "\x70\x69\x6E\x3D", "\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44", "\x26\x63\x6F\x64\x65\x3D", "\x26\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x3D", "\x26\x70\x61\x67\x65\x55\x72\x6C\x3D", "\x26\x73\x75\x62\x54\x79\x70\x65\x3D\x61\x70\x70\x26\x61\x64\x53\x6F\x75\x72\x63\x65\x3D", "\x2F\x77\x78\x43\x6F\x6D\x6D\x6F\x6E\x49\x6E\x66\x6F\x2F\x67\x65\x74\x41\x63\x74\x4D\x65\x6D\x62\x65\x72\x49\x6E\x66\x6F", "\x2F\x73\x69\x67\x6E\x2F\x77\x78\x2F\x73\x69\x67\x6E\x55\x70", "\x2F\x63\x6F\x6D\x6D\x6F\x6E\x2F\x61\x74\x74\x65\x6E\x64\x4C\x6F\x67", "\x26\x61\x63\x74\x69\x76\x69\x74\x79\x54\x79\x70\x65\x3D", "\x26\x63\x6C\x69\x65\x6E\x74\x54\x79\x70\x65\x3D\x61\x70\x70", "\u9519\u8BEF", "\x73\x74\x61\x74\x75\x73\x43\x6F\x64\x65", "\x75\x6E\x64\x65\x66\x69\x6E\x65\x64", "\u6B64\x69\x70\u5DF2\u88AB\u9650\u5236\uFF0C\u8BF7\u8FC7\x31\x30\u5206\u949F\u540E\u518D\u6267\u884C\u811A\u672C\x0A", "\x74\x6F\x53\x74\x72", "\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\x70\x6F\x73\x74", "\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44\x57\x69\x74\x68\x41\x44", "\x64\x72\x61\x77\x43\x6F\x6E\x74\x65\x6E\x74", "\x70\x61\x72\x73\x65", "\x20\u6267\u884C\u4EFB\u52A1\u5F02\u5E38", "\x72\x75\x6E\x46\x61\x6C\x61\x67", "\x6F\x62\x6A\x65\x63\x74", "\x65\x72\x72\x63\x6F\x64\x65", "\x74\x6F\x6B\x65\x6E", "\x6D\x65\x73\x73\x61\x67\x65", "\x69\x73\x76\x4F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x20", "\x72\x65\x73\x75\x6C\x74", "\x64\x61\x74\x61", "\x6A\x64\x41\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x73\x68\x6F\x70\x49\x64", "\x76\x65\x6E\x64\x65\x72\x49\x64", "\x73\x65\x63\x72\x65\x74\x50\x69\x6E", "\x74\x6F\x75\x78\x69\x61\x6E\x67\x49\x6D\x67", "\x79\x75\x6E\x4D\x69\x64\x49\x6D\x61\x67\x65\x55\x72\x6C", "\x69\x73\x4F\x6B", "\x61\x63\x74", "\x61\x63\x74\x52\x75\x6C\x65", "\x66\x6F\x6C\x6C\x6F\x77\x44\x61\x79\x73", "\x63\x6F\x6E\x74\x69\x53\x69\x67\x6E\x4E\x75\x6D", "\x73\x69\x67\x6E\x52\x65\x63\x6F\x72\x64", "\x74\x6F\x74\x61\x6C\x53\x69\x67\x6E\x4E\x75\x6D", "\u5173\u6CE8\u5929\u6570\x3A\x20", "\x20\u5929", "\u8FDE\u7EED\u7B7E\u5230\x3A\x20", "\u7B7E\u5230\u603B\u6570\x3A\x20", "\x73\x68\x6F\x70\x49\x6E\x66\x6F", "\x61\x63\x63\x65\x73\x73\x4C\x6F\x67\x57\x69\x74\x68\x41\x44\x3A", "\x6F\x70\x65\x6E\x43\x61\x72\x64", "\x67\x69\x66\x74", "\x64\x72\x61\x77\x4E\x61\x6D\x65", "\x67\x69\x66\x74\x4E\x61\x6D\x65", "\u7A7A\u6C14", "\u7B7E\u5230\u7ED3\u679C\x3A", "\u4F59\u989D\u4E0D\u8DB3", "\u6765\u665A\u4E86", "\u7ED3\u675F", "\u660E\u65E5\u518D\u6765", "\u7B7E\u5230\u7ED3\u679C\x3A\x20", "\x61\x74\x74\x65\x6E\x64\x4C\x6F\x67\x3A", "\x2D\x3E\x20", "\x65\x72\x72\x6F\x72\x4D\x65\x73\x73\x61\x67\x65", "\u706B\u7206", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E", "\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72", "\x7A\x68\x2D\x63\x6E", "\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65", "\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64", "\x55\x41", "\x58\x4D\x4C\x48\x74\x74\x70\x52\x65\x71\x75\x65\x73\x74", "\x52\x65\x66\x65\x72\x65\x72", "\x43\x6F\x6F\x6B\x69\x65", "\x41\x55\x54\x48\x5F\x43\x5F\x55\x53\x45\x52\x3D", "\x74\x65\x78\x74\x2F\x68\x74\x6D\x6C\x2C\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x68\x74\x6D\x6C\x2B\x78\x6D\x6C\x2C\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x6D\x6C\x3B\x71\x3D\x30\x2E\x39\x2C\x69\x6D\x61\x67\x65\x2F\x61\x76\x69\x66\x2C\x69\x6D\x61\x67\x65\x2F\x77\x65\x62\x70\x2C\x69\x6D\x61\x67\x65\x2F\x61\x70\x6E\x67\x2C\x69\x6D\x61\x67\x65\x2F\x74\x70\x67\x2C\x2A\x2F\x2A\x3B\x71\x3D\x30\x2E\x38\x2C\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x73\x69\x67\x6E\x65\x64\x2D\x65\x78\x63\x68\x61\x6E\x67\x65\x3B\x76\x3D\x62\x33\x3B\x71\x3D\x30\x2E\x39", "\x63\x6F\x6D\x2E\x6A\x69\x6E\x67\x64\x6F\x6E\x67\x2E\x61\x70\x70\x2E\x6D\x61\x6C\x6C", "\x20\x63\x6F\x6F\x6B\x69\x65\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5", "\u6D3B\u52A8\u5DF2\u7ED3\u675F", "\x67\x65\x74", "\x72\x65\x61\x6C\x41\x63\x74\x69\x76\x69\x74\x79\x55\x52\x4C", "\x73\x65\x74\x2D\x63\x6F\x6F\x6B\x69\x65", "\x68\x65\x61\x64\x65\x72\x73", "\x3B", "\x3D", "\x73\x75\x62\x73\x74\x72", "\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x31\x30\x2E\x34\x2E\x36\x3B\x31\x33\x2E\x31\x2E\x32\x3B", "\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x38\x2C\x31\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x36\x37\x38\x31\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x31\x5F\x32\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31", "\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x66\x6C\x6F\x6F\x72", "\x63\x68\x61\x72\x41\x74", "\x73\x74\x72\x69\x6E\x67", "\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6D\x65\x2D\x61\x70\x69\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x5F\x6E\x65\x77\x2F\x69\x6E\x66\x6F\x2F\x47\x65\x74\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x55\x6E\x69\x6F\x6E", "\x6D\x65\x2D\x61\x70\x69\x2E\x6A\x64\x2E\x63\x6F\x6D", "\x2A\x2F\x2A", "\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x31\x34\x2E\x30\x2E\x32\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x20\x53\x61\x66\x61\x72\x69\x2F\x36\x30\x34\x2E\x31", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x68\x6F\x6D\x65\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x4A\x64\x2F\x6E\x65\x77\x68\x6F\x6D\x65\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32\x26\x75\x66\x63\x3D\x26", "\x72\x65\x74\x63\x6F\x64\x65", "\x31\x30\x30\x31", "\x30", "\x75\x73\x65\x72\x49\x6E\x66\x6F", "\x68\x61\x73\x4F\x77\x6E\x50\x72\x6F\x70\x65\x72\x74\x79", "\x6E\x69\x63\x6B\x6E\x61\x6D\x65", "\x62\x61\x73\x65\x49\x6E\x66\x6F", "\u4EAC\u4E1C\u8FD4\u56DE\u4E86\u7A7A\u6570\u636E", "\x68\x74\x74\x70\x3A\x2F\x2F\x68\x7A\x2E\x66\x65\x76\x65\x72\x72\x75\x6E\x2E\x74\x6F\x70\x3A\x39\x39\x2F\x73\x68\x61\x72\x65\x2F\x63\x61\x72\x64\x2F\x67\x65\x74\x54\x6F\x6B\x65\x6E\x3F\x74\x79\x70\x65\x3D\x6C\x7A\x6B\x6A", "\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x31\x2E\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x20\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x31\x30\x3B\x20\x50\x43\x43\x4D\x30\x30\x20\x42\x75\x69\x6C\x64\x2F\x51\x4B\x51\x31\x2E\x31\x39\x31\x30\x32\x31\x2E\x30\x30\x32\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x30\x31\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36", "\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF", "\x63\x6F\x64\x65", "\x73\x68\x6F\x70\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64", "\x2C\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3A", "\x7B\x22\x76\x65\x6E\x64\x65\x72\x49\x64\x22\x3A\x22", "\x22\x2C\x22\x62\x69\x6E\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6F\x64\x65\x46\x6C\x61\x67\x22\x3A\x31\x2C\x22\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6E\x64\x22\x3A\x7B\x7D\x2C\x22\x77\x72\x69\x74\x65\x43\x68\x69\x6C\x64\x46\x6C\x61\x67\x22\x3A\x30", "\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x31\x7D", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x62\x69\x6E\x64\x57\x69\x74\x68\x56\x65\x6E\x64\x65\x72\x26\x62\x6F\x64\x79\x3D", "\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3D", "\x7A\x68\x2D\x43\x4E\x2C\x7A\x68\x3B\x71\x3D\x30\x2E\x39\x2C\x65\x6E\x2D\x55\x53\x3B\x71\x3D\x30\x2E\x38\x2C\x65\x6E\x3B\x71\x3D\x30\x2E\x37", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x73\x68\x6F\x70\x6D\x65\x6D\x62\x65\x72\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F", "\x74\x6F\x4F\x62\x6A", "\x73\x75\x63\x63\x65\x73\x73", "\x67\x69\x66\x74\x49\x6E\x66\x6F", "\x67\x69\x66\x74\x4C\x69\x73\x74", "\u5165\u4F1A\u83B7\u5F97\x3A", "\x64\x69\x73\x63\x6F\x75\x6E\x74\x53\x74\x72\x69\x6E\x67", "\x70\x72\x69\x7A\x65\x4E\x61\x6D\x65", "\x73\x65\x63\x6F\x6E\x64\x4C\x69\x6E\x65\x44\x65\x73\x63", "\x22\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x31\x2C\x22\x70\x61\x79\x55\x70\x53\x68\x6F\x70\x22\x3A\x74\x72\x75\x65\x2C\x22\x71\x75\x65\x72\x79\x56\x65\x72\x73\x69\x6F\x6E\x22\x3A\x22\x31\x30\x2E\x35\x2E\x32\x22\x7D", "\x79\x79\x79\x79\x4D\x4D\x64\x64\x68\x68\x6D\x6D\x73\x73\x53\x53\x53", "\x6E\x6F\x77", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x37\x31\x34\x31\x31\x61\x39\x65\x31\x38\x6E\x38\x6A\x6D\x6D\x44\x4B\x48\x4D\x35\x71\x59\x32\x47\x51\x45\x48\x4E\x38\x4D\x45\x44\x6E\x78\x6E\x4D\x4E\x42\x56\x55\x47\x56\x49\x74\x52\x65\x65\x54\x33\x30\x46\x78\x41\x33\x4E\x49\x6F\x49\x6A\x71\x70\x57\x54\x37\x54\x65\x38\x62\x46\x33\x37\x46\x4A\x32\x57\x2B\x57\x7A\x69\x69\x78\x4C\x48\x68\x46\x30\x31\x3B\x33\x39\x32\x63\x66\x39\x62\x61\x64\x65\x34\x65\x31\x62\x30\x32\x65\x36\x66\x61\x38\x33\x63\x31\x64\x34\x37\x64\x37\x66\x31\x32\x34\x35\x65\x35\x61\x37\x61\x65\x39\x65\x62\x39\x32\x36\x34\x35\x31\x34\x32\x32\x37\x61\x64\x36\x66\x39\x33\x35\x64\x66\x39\x65\x3B\x33\x2E\x30\x3B", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x67\x65\x74\x53\x68\x6F\x70\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F\x26\x62\x6F\x64\x79\x3D", "\u5165\u4F1A\x3A", "\x76\x65\x6E\x64\x65\x72\x43\x61\x72\x64\x4E\x61\x6D\x65", "\x73\x68\x6F\x70\x4D\x65\x6D\x62\x65\x72\x43\x61\x72\x64\x49\x6E\x66\x6F", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6C\x65\x4C\x69\x73\x74", "\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x49\x6E\x66\x6F", "\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39", "\x73\x6C\x69\x63\x65", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x39\x62\x63\x31\x62\x39\x38\x31\x38\x6E\x38\x75\x46\x68\x52\x38\x6B\x73\x33\x72\x79\x51\x57\x4D\x4F\x5A\x7A\x6A\x70\x44\x56\x43\x49\x4E\x4A\x4A\x48\x38\x61\x50\x30\x79\x32\x52\x57\x46\x4C\x69\x4A\x42\x6D\x4C\x6B\x33\x5A\x37\x6A\x39\x72\x68\x6D\x35\x63\x6A\x37\x44\x4E\x30\x77\x39\x6D\x49\x48\x65\x73\x71\x6F\x6D\x75\x30\x42\x34\x36\x68\x30\x68\x3B\x35\x61\x62\x35\x65\x66\x64\x35\x64\x63\x37\x63\x33\x64\x35\x32\x64\x64\x31\x39\x61\x38\x65\x61\x61\x62\x63\x37\x62\x63\x39\x39\x63\x31\x62\x39\x64\x62\x38\x30\x30\x61\x34\x32\x30\x38\x62\x61\x31\x31\x34\x32\x63\x38\x61\x37\x63\x37\x62\x66\x38\x35\x32\x65\x3B\x33\x2E\x30\x3B", "\x3B\x31\x36\x39\x66\x31\x3B\x74\x6B\x30\x32\x77\x63\x30\x66\x39\x31\x63\x38\x61\x31\x38\x6E\x76\x57\x56\x4D\x47\x72\x51\x4F\x31\x69\x46\x6C\x70\x51\x72\x65\x32\x53\x68\x32\x6D\x47\x74\x4E\x72\x6F\x31\x6C\x30\x55\x70\x5A\x71\x47\x4C\x52\x62\x48\x69\x79\x71\x66\x61\x55\x51\x61\x50\x79\x36\x34\x57\x54\x37\x75\x7A\x37\x45\x2F\x67\x75\x6A\x47\x41\x42\x35\x30\x6B\x79\x4F\x37\x68\x77\x42\x79\x57\x4B\x3B\x37\x37\x63\x38\x61\x30\x35\x65\x36\x61\x36\x36\x66\x61\x65\x65\x64\x30\x30\x65\x34\x65\x32\x38\x30\x61\x64\x38\x63\x34\x30\x66\x61\x62\x36\x30\x37\x32\x33\x62\x35\x62\x35\x36\x31\x32\x33\x30\x33\x38\x30\x65\x62\x34\x30\x37\x65\x31\x39\x33\x35\x34\x66\x37\x3B\x33\x2E\x30\x3B", "\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x32\x36\x33\x31\x62\x66\x61\x31\x38\x6E\x68\x44\x34\x75\x62\x66\x33\x51\x66\x4E\x69\x55\x38\x45\x44\x32\x50\x49\x32\x37\x30\x79\x67\x73\x6E\x2B\x76\x61\x6D\x75\x42\x51\x68\x30\x6C\x56\x45\x36\x76\x37\x55\x41\x77\x63\x6B\x7A\x33\x73\x32\x4F\x74\x6C\x46\x45\x66\x74\x68\x35\x4C\x62\x51\x64\x57\x4F\x50\x4E\x76\x50\x45\x59\x48\x75\x55\x32\x54\x77\x3B\x30\x66\x33\x36\x64\x64\x64\x65\x66\x66\x33\x66\x38\x37\x38\x36\x36\x36\x33\x62\x35\x30\x62\x62\x33\x34\x36\x36\x35\x63\x34\x65\x39\x64\x36\x30\x38\x35\x39\x66\x38\x66\x62\x65\x38\x32\x32\x66\x62\x35\x35\x66\x64\x30\x32\x65\x64\x32\x65\x38\x34\x66\x64\x32\x3B\x33\x2E\x30\x3B", "\x46\x6F\x72\x6D\x61\x74", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x67\x65\x74\x4D\x6F\x6E\x74\x68", "\x67\x65\x74\x44\x61\x74\x65", "\x67\x65\x74\x48\x6F\x75\x72\x73", "\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73", "\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73", "\x67\x65\x74\x44\x61\x79", "\x67\x65\x74\x4D\x69\x6C\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73", "\x74\x65\x73\x74", "\x24\x31", "\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72", "\x63\x6F\x6E\x63\x61\x74", "\x72\x65\x70\x6C\x61\x63\x65", "\x29", "\x28", "\x53\x2B", "\x30\x30\x30", "\x30\x30", "\x68\x72\x65\x66", "\x28\x5E\x7C\x5B\x26\x3F\x5D\x29", "\x3D\x28\x5B\x5E\x26\x5D\x2A\x29\x28\x26\x7C\x24\x29", "\u5220\u9664", "\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A", "\u671F\u5F39\u7A97\uFF0C", "\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C", "\x6A\x73\x6A\x69\x61", "\x6D\x69\x2E\x63\x6F\x6D"];
let cookiesArr = [], cookie = __Oxeb34e[0x0];
let jd_lzkj_signActivity2_ids = process[__Oxeb34e[0x2]][__Oxeb34e[0x1]] ? process[__Oxeb34e[0x2]][__Oxeb34e[0x1]] : __Oxeb34e[0x0];
let jd_lzkj_signActivity2_num = parseInt(process[__Oxeb34e[0x2]][__Oxeb34e[0x3]]) ? parseInt(process[__Oxeb34e[0x2]][__Oxeb34e[0x3]]) : 10;
let jd_lzkj_signActivity2_openCard = parseInt(process[__Oxeb34e[0x2]][__Oxeb34e[0x4]]) ? parseInt(process[__Oxeb34e[0x2]][__Oxeb34e[0x4]]) : 0;
if ($[__Oxeb34e[0x5]]()) {
    Object[__Oxeb34e[0x8]](jdCookieNode)[__Oxeb34e[0x7]]((_0x3fedx6) => {
        cookiesArr[__Oxeb34e[0x6]](jdCookieNode[_0x3fedx6])
    });
    if (process[__Oxeb34e[0x2]][__Oxeb34e[0x9]] && process[__Oxeb34e[0x2]][__Oxeb34e[0x9]] === __Oxeb34e[0xa]) {
        console[__Oxeb34e[0xb]] = () => {
        }
    }
} else {
    cookiesArr = [$[__Oxeb34e[0xe]](__Oxeb34e[0xd]), $[__Oxeb34e[0xe]](__Oxeb34e[0xf]), ...jsonParse($[__Oxeb34e[0xe]](__Oxeb34e[0x12]) || __Oxeb34e[0x13])[__Oxeb34e[0x11]]((_0x3fedx6) => {
        return _0x3fedx6[__Oxeb34e[0x10]]
    })][__Oxeb34e[0xc]]((_0x3fedx6) => {
        return !!_0x3fedx6
    })
}
;allMessage = __Oxeb34e[0x0], message = __Oxeb34e[0x0];
$[__Oxeb34e[0x14]] = false;
$[__Oxeb34e[0x15]] = false;
$[__Oxeb34e[0x16]] = false;
$[__Oxeb34e[0x17]] = false;
let lz_jdpin_token_cookie = __Oxeb34e[0x0];
let activityCookie = __Oxeb34e[0x0];
let lz_cookie = {};
let ids = [];
$[__Oxeb34e[0x18]] = [];
if (jd_lzkj_signActivity2_ids[__Oxeb34e[0x1a]](__Oxeb34e[0x19]) > -1) {
    ids = jd_lzkj_signActivity2_ids[__Oxeb34e[0x1b]](__Oxeb34e[0x19])
} else {
    ids = [jd_lzkj_signActivity2_ids]
}
;!(async () => {
    if (!cookiesArr[0x0]) {
        $[__Oxeb34e[0x23]]($[__Oxeb34e[0x20]], __Oxeb34e[0x21], __Oxeb34e[0x22], {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxeb34e[0x22]});
        return
    }
    ;
    if (ids[__Oxeb34e[0x24]] < 1) {
        console[__Oxeb34e[0xb]](`${__Oxeb34e[0x25]}`);
        return
    }
    ;
    for (let _0x3fedxc = 0; _0x3fedxc < ids[__Oxeb34e[0x24]]; _0x3fedxc++) {
        $[__Oxeb34e[0x26]] = ids[_0x3fedxc];
        $[__Oxeb34e[0x27]] = $[__Oxeb34e[0x26]];
        $[__Oxeb34e[0x28]] = `${__Oxeb34e[0x29]}${$[__Oxeb34e[0x26]]}${__Oxeb34e[0x2a]}`;
        console[__Oxeb34e[0xb]](`${__Oxeb34e[0x2b]}${$[__Oxeb34e[0x26]]}${__Oxeb34e[0x0]}`);
        console[__Oxeb34e[0xb]](`${__Oxeb34e[0x2c]}${$[__Oxeb34e[0x28]]}${__Oxeb34e[0x0]}`);
        await $[__Oxeb34e[0x2e]](parseInt(Math[__Oxeb34e[0x2d]]() * 1500 + 1500, 10));
        for (let _0x3fedxd = 0; _0x3fedxd < cookiesArr[__Oxeb34e[0x24]]; _0x3fedxd++) {
            cookie = cookiesArr[_0x3fedxd];
            originCookie = cookiesArr[_0x3fedxd];
            if (cookie) {
                $[__Oxeb34e[0x2f]] = decodeURIComponent(cookie[__Oxeb34e[0x30]](/pt_pin=([^; ]+)(?=;?)/) && cookie[__Oxeb34e[0x30]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);
                $[__Oxeb34e[0x31]] = _0x3fedxd + 1;
                message = __Oxeb34e[0x0];
                $[__Oxeb34e[0x32]] = 0;
                $[__Oxeb34e[0x14]] = false;
                $[__Oxeb34e[0x33]] = __Oxeb34e[0x0];
                $[__Oxeb34e[0x34]] = true;
                await checkCookie();
                console[__Oxeb34e[0xb]](`${__Oxeb34e[0x35]}${$[__Oxeb34e[0x31]]}${__Oxeb34e[0x36]}${$[__Oxeb34e[0x33]] || $[__Oxeb34e[0x2f]]}${__Oxeb34e[0x37]}`);
                if (!$[__Oxeb34e[0x34]]) {
                    $[__Oxeb34e[0x23]]($[__Oxeb34e[0x20]], `${__Oxeb34e[0x38]}`, `${__Oxeb34e[0x39]}${$[__Oxeb34e[0x31]]}${__Oxeb34e[0x3a]}${$[__Oxeb34e[0x33]] || $[__Oxeb34e[0x2f]]}${__Oxeb34e[0x3b]}`, {"\x6F\x70\x65\x6E\x2D\x75\x72\x6C": __Oxeb34e[0x3c]});
                    if ($[__Oxeb34e[0x5]]()) {
                    }
                    ;
                    continue
                }
                ;await getUA();
                try {
                    await run()
                } catch (e) {
                    console[__Oxeb34e[0xb]](e)
                }
                ;
                if ($[__Oxeb34e[0x31]] >= jd_lzkj_signActivity2_num) {
                    console[__Oxeb34e[0xb]](`${__Oxeb34e[0x3d]}${jd_lzkj_signActivity2_num}${__Oxeb34e[0x3e]}`);
                    break
                }
                ;
                if ($[__Oxeb34e[0x17]] == true) {
                    break
                }
                ;
                if ($[__Oxeb34e[0x15]] || $[__Oxeb34e[0x16]]) {
                    break
                }
                ;await $[__Oxeb34e[0x2e]](parseInt(Math[__Oxeb34e[0x2d]]() * 2500 + 2500, 10));
                if ($[__Oxeb34e[0x31]] % 3 == 0) {
                    await $[__Oxeb34e[0x2e]](parseInt(Math[__Oxeb34e[0x2d]]() * 15000 + 15000, 10))
                }
            }
        }
        ;await $[__Oxeb34e[0x2e]](parseInt(Math[__Oxeb34e[0x2d]]() * 30000 + 30000, 10))
    }
    ;
    if ($[__Oxeb34e[0x15]]) {
        let _0x3fedxe = __Oxeb34e[0x3f];
        $[__Oxeb34e[0x23]]($[__Oxeb34e[0x20]], `${__Oxeb34e[0x0]}`, `${__Oxeb34e[0x0]}${_0x3fedxe}${__Oxeb34e[0x0]}`);
        if ($[__Oxeb34e[0x5]]()) {
            await notify[__Oxeb34e[0x40]](`${__Oxeb34e[0x0]}${$[__Oxeb34e[0x20]]}${__Oxeb34e[0x0]}`, `${__Oxeb34e[0x0]}${_0x3fedxe}${__Oxeb34e[0x0]}`)
        }
    }
})()[__Oxeb34e[0x1f]]((_0x3fedxb) => {
    return $[__Oxeb34e[0x1e]](_0x3fedxb)
})[__Oxeb34e[0x1d]](() => {
    return $[__Oxeb34e[0x1c]]()
});

async function run() {
    try {
        lz_jdpin_token_cookie = __Oxeb34e[0x0];
        $[__Oxeb34e[0x41]] = __Oxeb34e[0x0];
        $[__Oxeb34e[0x42]] = __Oxeb34e[0x0];
        $[__Oxeb34e[0x16]] = false;
        $[__Oxeb34e[0x17]] = false;
        let _0x3fedx10 = false;
        await takePostRequest(__Oxeb34e[0x43]);
        if ($[__Oxeb34e[0x41]] == __Oxeb34e[0x0]) {
            console[__Oxeb34e[0xb]](__Oxeb34e[0x44]);
            return
        }
        ;await getCk();
        if ($[__Oxeb34e[0x16]] == true) {
            return
        }
        ;
        if (activityCookie == __Oxeb34e[0x0]) {
            console[__Oxeb34e[0xb]](`${__Oxeb34e[0x45]}`);
            return
        }
        ;await takePostRequest(__Oxeb34e[0x46]);
        await takePostRequest(__Oxeb34e[0x47]);
        if (!$[__Oxeb34e[0x42]]) {
            console[__Oxeb34e[0xb]](`${__Oxeb34e[0x48]}`);
            return
        }
        ;await takePostRequest(__Oxeb34e[0x49]);
        await takePostRequest(__Oxeb34e[0x4a]);
        if ($[__Oxeb34e[0x31]] == 1) {
            console[__Oxeb34e[0xb]](`${__Oxeb34e[0x4b]}${$[__Oxeb34e[0x4c]]}${__Oxeb34e[0x0]}`)
        }
        ;await takePostRequest(__Oxeb34e[0x4d]);
        if ($[__Oxeb34e[0x31]] == 1) {
            console[__Oxeb34e[0xb]](`${__Oxeb34e[0x4e]}${$[__Oxeb34e[0x4f]]}${__Oxeb34e[0x0]}`);
            console[__Oxeb34e[0xb]](`${__Oxeb34e[0x50]}${$[__Oxeb34e[0x51]]}${__Oxeb34e[0x0]}`)
        }
        ;await takePostRequest(__Oxeb34e[0x4a]);
        await takePostRequest(__Oxeb34e[0x52]);
        await takePostRequest(__Oxeb34e[0x53]);
        let _0x3fedx11 = await getNowDate();
        if (_0x3fedx11 == $[__Oxeb34e[0x54]]) {
            console[__Oxeb34e[0xb]](`${__Oxeb34e[0x55]}`);
            await $[__Oxeb34e[0x2e]](parseInt(Math[__Oxeb34e[0x2d]]() * 2500 + 2500, 10));
            return
        }
        ;await takePostRequest(__Oxeb34e[0x56]);
        await $[__Oxeb34e[0x2e]](500);
        if ($[__Oxeb34e[0x57]] == false) {
            if (jd_lzkj_signActivity2_openCard == 1) {
                console[__Oxeb34e[0xb]](`${__Oxeb34e[0x58]}${$[__Oxeb34e[0x51]]}${__Oxeb34e[0x0]}`);
                _0x3fedx10 = true;
                $[__Oxeb34e[0x59]] = $[__Oxeb34e[0x51]];
                await joinShop();
                if ($[__Oxeb34e[0x5b]][__Oxeb34e[0x1a]](__Oxeb34e[0x5a]) > -1 || $[__Oxeb34e[0x5b]][__Oxeb34e[0x1a]](__Oxeb34e[0x5c]) > -1) {
                    console[__Oxeb34e[0xb]](__Oxeb34e[0x5d]);
                    await $[__Oxeb34e[0x2e]](parseInt(Math[__Oxeb34e[0x2d]]() * 1000 + 900, 10));
                    await joinShop()
                }
                ;
                if ($[__Oxeb34e[0x5b]][__Oxeb34e[0x1a]](__Oxeb34e[0x5a]) > -1 || $[__Oxeb34e[0x5b]][__Oxeb34e[0x1a]](__Oxeb34e[0x5c]) > -1) {
                    console[__Oxeb34e[0xb]](__Oxeb34e[0x5e]);
                    await $[__Oxeb34e[0x2e]](parseInt(Math[__Oxeb34e[0x2d]]() * 1000 + 1000, 10));
                    await joinShop()
                }
                ;
                if ($[__Oxeb34e[0x5b]][__Oxeb34e[0x1a]](__Oxeb34e[0x5a]) > -1 || $[__Oxeb34e[0x5b]][__Oxeb34e[0x1a]](__Oxeb34e[0x5c]) > -1) {
                    console[__Oxeb34e[0xb]](__Oxeb34e[0x5f]);
                    await $[__Oxeb34e[0x2e]](parseInt(Math[__Oxeb34e[0x2d]]() * 1500 + 1500, 10));
                    await joinShop()
                }
            } else {
                console[__Oxeb34e[0xb]](`${__Oxeb34e[0x60]}`)
            }
        } else {
            console[__Oxeb34e[0xb]](`${__Oxeb34e[0x61]}${$[__Oxeb34e[0x51]]}${__Oxeb34e[0x0]}`)
        }
        ;await takePostRequest(__Oxeb34e[0x62]);
        await takePostRequest(__Oxeb34e[0x63]);
        if ($[__Oxeb34e[0x17]] == true) {
            console[__Oxeb34e[0xb]](__Oxeb34e[0x64]);
            return
        }
        ;await $[__Oxeb34e[0x2e]](parseInt(Math[__Oxeb34e[0x2d]]() * 2500 + 2500, 10))
    } catch (e) {
        console[__Oxeb34e[0xb]](e)
    }
}

async function takePostRequest(_0x3fedx13) {
    if ($[__Oxeb34e[0x15]]) {
        return
    }
    ;let _0x3fedx14 = __Oxeb34e[0x65];
    let _0x3fedx15 = `${__Oxeb34e[0x0]}`;
    let _0x3fedx16 = __Oxeb34e[0x66];
    let _0x3fedx17 = __Oxeb34e[0x0];
    switch (_0x3fedx13) {
        case __Oxeb34e[0x43]:
            url = `${__Oxeb34e[0x67]}`;
            _0x3fedx15 = await getToken();
            break;
        case __Oxeb34e[0x46]:
            url = `${__Oxeb34e[0x68]}`;
            _0x3fedx15 = `${__Oxeb34e[0x69]}${$[__Oxeb34e[0x26]]}${__Oxeb34e[0x0]}`;
            break;
        case __Oxeb34e[0x47]:
            url = `${__Oxeb34e[0x6a]}`;
            _0x3fedx15 = `${__Oxeb34e[0x6b]}${$[__Oxeb34e[0x51]]}${__Oxeb34e[0x6c]}${$[__Oxeb34e[0x41]]}${__Oxeb34e[0x6d]}`;
            break;
        case __Oxeb34e[0x4a]:
            url = `${__Oxeb34e[0x6e]}`;
            _0x3fedx15 = `${__Oxeb34e[0x6f]}${$[__Oxeb34e[0x26]]}${__Oxeb34e[0x70]}${$[__Oxeb34e[0x51]]}${__Oxeb34e[0x0]}`;
            break;
        case __Oxeb34e[0x53]:
            url = __Oxeb34e[0x71];
            _0x3fedx15 = `${__Oxeb34e[0x6f]}${$[__Oxeb34e[0x26]]}${__Oxeb34e[0x70]}${$[__Oxeb34e[0x51]]}${__Oxeb34e[0x72]}${encodeURIComponent($.Pin)}${__Oxeb34e[0x0]}`;
            break;
        case __Oxeb34e[0x4d]:
            url = `${__Oxeb34e[0x73]}`;
            _0x3fedx15 = `${__Oxeb34e[0x74]}${$[__Oxeb34e[0x51]]}${__Oxeb34e[0x0]}`;
            break;
        case __Oxeb34e[0x78]:
            url = `${__Oxeb34e[0x75]}`;
            _0x3fedx15 = `${__Oxeb34e[0x69]}${$[__Oxeb34e[0x26]]}${__Oxeb34e[0x76]}${$[__Oxeb34e[0x77]]}${__Oxeb34e[0x72]}${encodeURIComponent($.Pin)}${__Oxeb34e[0x0]}`;
            break;
        case __Oxeb34e[0x52]:
            url = `${__Oxeb34e[0x79]}`;
            _0x3fedx15 = `${__Oxeb34e[0x7a]}${encodeURIComponent($.Pin)}${__Oxeb34e[0x0]}`;
            break;
        case __Oxeb34e[0x49]:
            url = `${__Oxeb34e[0x7b]}`;
            let _0x3fedx18 = `${__Oxeb34e[0x0]}${$[__Oxeb34e[0x28]]}${__Oxeb34e[0x0]}`;
            _0x3fedx15 = `${__Oxeb34e[0x74]}${$[__Oxeb34e[0x51]]}${__Oxeb34e[0x7c]}${$[__Oxeb34e[0x77]]}${__Oxeb34e[0x72]}${encodeURIComponent($.Pin)}${__Oxeb34e[0x7d]}${$[__Oxeb34e[0x26]]}${__Oxeb34e[0x7e]}${encodeURIComponent(_0x3fedx18)}${__Oxeb34e[0x7f]}`;
            break;
        case __Oxeb34e[0x56]:
            url = `${__Oxeb34e[0x80]}`;
            _0x3fedx15 = `${__Oxeb34e[0x74]}${$[__Oxeb34e[0x51]]}${__Oxeb34e[0x7d]}${$[__Oxeb34e[0x26]]}${__Oxeb34e[0x72]}${encodeURIComponent($.Pin)}${__Oxeb34e[0x0]}`;
            break;
        case __Oxeb34e[0x62]:
            url = `${__Oxeb34e[0x81]}`;
            _0x3fedx15 = `${__Oxeb34e[0x6f]}${$[__Oxeb34e[0x26]]}${__Oxeb34e[0x72]}${encodeURIComponent($.Pin)}${__Oxeb34e[0x0]}`;
            break;
        case __Oxeb34e[0x63]:
            url = `${__Oxeb34e[0x82]}`;
            _0x3fedx15 = `${__Oxeb34e[0x74]}${$[__Oxeb34e[0x51]]}${__Oxeb34e[0x83]}${$[__Oxeb34e[0x77]]}${__Oxeb34e[0x7d]}${$[__Oxeb34e[0x26]]}${__Oxeb34e[0x72]}${encodeURIComponent($.Pin)}${__Oxeb34e[0x84]}`;
            break;
        default:
            console[__Oxeb34e[0xb]](`${__Oxeb34e[0x85]}${_0x3fedx13}${__Oxeb34e[0x0]}`)
    }
    ;
    if (_0x3fedx13 == __Oxeb34e[0x43]) {
        url = url
    } else {
        url = __Oxeb34e[0x65] + url
    }
    ;let _0x3fedx19 = getPostRequest(url, _0x3fedx15, _0x3fedx16);
    await $[__Oxeb34e[0x2e]](parseInt(Math[__Oxeb34e[0x2d]]() * 500 + 500, 10));
    return new Promise(async (_0x3fedx1a) => {
        $[__Oxeb34e[0x8b]](_0x3fedx19, (_0x3fedx1b, _0x3fedx1c, _0x3fedx1d) => {
            try {
                setActivityCookie(_0x3fedx1c);
                if (_0x3fedx1b) {
                    if (_0x3fedx1c && typeof _0x3fedx1c[__Oxeb34e[0x86]] != __Oxeb34e[0x87]) {
                        if (_0x3fedx1c[__Oxeb34e[0x86]] == 493) {
                            console[__Oxeb34e[0xb]](__Oxeb34e[0x88]);
                            $[__Oxeb34e[0x15]] = true
                        }
                    }
                    ;console[__Oxeb34e[0xb]](`${__Oxeb34e[0x0]}${$[__Oxeb34e[0x89]](_0x3fedx1b, _0x3fedx1b)}${__Oxeb34e[0x0]}`);
                    console[__Oxeb34e[0xb]](`${__Oxeb34e[0x0]}${_0x3fedx13}${__Oxeb34e[0x8a]}`)
                } else {
                    dealReturn(_0x3fedx13, _0x3fedx1d)
                }
            } catch (e) {
                console[__Oxeb34e[0xb]](e, _0x3fedx1c)
            } finally {
                _0x3fedx1a()
            }
        })
    })
}

async function dealReturn(_0x3fedx13, _0x3fedx1d) {
    let _0x3fedx1f = __Oxeb34e[0x0];
    try {
        if (_0x3fedx13 != __Oxeb34e[0x8c] || _0x3fedx13 != __Oxeb34e[0x8d]) {
            if (_0x3fedx1d) {
                _0x3fedx1f = JSON[__Oxeb34e[0x8e]](_0x3fedx1d)
            }
        }
    } catch (e) {
        console[__Oxeb34e[0xb]](`${__Oxeb34e[0x0]}${_0x3fedx13}${__Oxeb34e[0x8f]}`);
        $[__Oxeb34e[0x90]] = false
    }
    ;
    try {
        switch (_0x3fedx13) {
            case __Oxeb34e[0x43]:
                if (typeof _0x3fedx1f == __Oxeb34e[0x91]) {
                    if (_0x3fedx1f[__Oxeb34e[0x92]] == 0) {
                        if (typeof _0x3fedx1f[__Oxeb34e[0x93]] != __Oxeb34e[0x87]) {
                            $[__Oxeb34e[0x41]] = _0x3fedx1f[__Oxeb34e[0x93]]
                        }
                    } else {
                        if (_0x3fedx1f[__Oxeb34e[0x94]]) {
                            console[__Oxeb34e[0xb]](`${__Oxeb34e[0x95]}${_0x3fedx1f[__Oxeb34e[0x94]] || __Oxeb34e[0x0]}${__Oxeb34e[0x0]}`)
                        } else {
                            console[__Oxeb34e[0xb]](_0x3fedx1d)
                        }
                    }
                } else {
                    console[__Oxeb34e[0xb]](_0x3fedx1d)
                }
                ;
                break;
            case __Oxeb34e[0x46]:
                if (_0x3fedx1f[__Oxeb34e[0x96]] == true && _0x3fedx1f[__Oxeb34e[0x97]]) {
                    $[__Oxeb34e[0x26]] = _0x3fedx1f[__Oxeb34e[0x97]][__Oxeb34e[0x26]];
                    $[__Oxeb34e[0x77]] = _0x3fedx1f[__Oxeb34e[0x97]][__Oxeb34e[0x77]];
                    $[__Oxeb34e[0x98]] = _0x3fedx1f[__Oxeb34e[0x97]][__Oxeb34e[0x98]];
                    $[__Oxeb34e[0x99]] = _0x3fedx1f[__Oxeb34e[0x97]][__Oxeb34e[0x99]];
                    $[__Oxeb34e[0x9a]] = _0x3fedx1f[__Oxeb34e[0x97]][__Oxeb34e[0x9a]]
                }
                ;
                break;
            case __Oxeb34e[0x47]:
                if (_0x3fedx1f[__Oxeb34e[0x96]] == true && _0x3fedx1f[__Oxeb34e[0x97]]) {
                    $[__Oxeb34e[0x42]] = _0x3fedx1f[__Oxeb34e[0x97]][__Oxeb34e[0x9b]];
                    $[__Oxeb34e[0x9c]] = _0x3fedx1f[__Oxeb34e[0x97]][__Oxeb34e[0x9d]]
                }
                ;
                break;
            case __Oxeb34e[0x4a]:
                if (_0x3fedx1f[__Oxeb34e[0x9e]] == true && _0x3fedx1f[__Oxeb34e[0x9f]]) {
                    $[__Oxeb34e[0x4c]] = _0x3fedx1f[__Oxeb34e[0x9f]][__Oxeb34e[0xa0]]
                }
                ;
                break;
            case __Oxeb34e[0x53]:
                if (_0x3fedx1f[__Oxeb34e[0x9e]] == true) {
                    $[__Oxeb34e[0xa1]] = _0x3fedx1f[__Oxeb34e[0xa1]] ? _0x3fedx1f[__Oxeb34e[0xa1]] : 0;
                    $[__Oxeb34e[0xa2]] = _0x3fedx1f[__Oxeb34e[0xa3]][__Oxeb34e[0xa2]] ? _0x3fedx1f[__Oxeb34e[0xa3]][__Oxeb34e[0xa2]] : 0;
                    $[__Oxeb34e[0xa4]] = _0x3fedx1f[__Oxeb34e[0xa3]][__Oxeb34e[0xa4]] ? _0x3fedx1f[__Oxeb34e[0xa3]][__Oxeb34e[0xa4]] : 0;
                    $[__Oxeb34e[0x54]] = _0x3fedx1f[__Oxeb34e[0xa3]][__Oxeb34e[0x54]] ? _0x3fedx1f[__Oxeb34e[0xa3]][__Oxeb34e[0x54]] : __Oxeb34e[0x0];
                    console[__Oxeb34e[0xb]](`${__Oxeb34e[0xa5]}${$[__Oxeb34e[0xa1]]}${__Oxeb34e[0xa6]}`);
                    console[__Oxeb34e[0xb]](`${__Oxeb34e[0xa7]}${$[__Oxeb34e[0xa2]]}${__Oxeb34e[0xa6]}`);
                    console[__Oxeb34e[0xb]](`${__Oxeb34e[0xa8]}${$[__Oxeb34e[0xa4]]}${__Oxeb34e[0xa6]}`)
                } else {
                    console[__Oxeb34e[0xb]](`${__Oxeb34e[0x0]}${_0x3fedx1f[__Oxeb34e[0x23]]}${__Oxeb34e[0x0]}`)
                }
                ;
                break;
            case __Oxeb34e[0x4d]:
                if (_0x3fedx1f[__Oxeb34e[0x9e]] == true && _0x3fedx1f[__Oxeb34e[0xa9]]) {
                    $[__Oxeb34e[0x4f]] = _0x3fedx1f[__Oxeb34e[0xa9]][__Oxeb34e[0x4f]]
                }
                ;
                break;
            case __Oxeb34e[0x78]:
                break;
            case __Oxeb34e[0x52]:
                break;
            case __Oxeb34e[0x49]:
                console[__Oxeb34e[0xb]](`${__Oxeb34e[0xaa]}${_0x3fedx1d}${__Oxeb34e[0x0]}`);
                break;
            case __Oxeb34e[0x56]:
                if (_0x3fedx1f[__Oxeb34e[0x96]] == true && _0x3fedx1f[__Oxeb34e[0x97]]) {
                    $[__Oxeb34e[0x57]] = _0x3fedx1f[__Oxeb34e[0x97]][__Oxeb34e[0xab]]
                }
                ;
                break;
            case __Oxeb34e[0x62]:
                if (_0x3fedx1f[__Oxeb34e[0x9e]] == true && _0x3fedx1f[__Oxeb34e[0xac]]) {
                    try {
                        $[__Oxeb34e[0xad]] = _0x3fedx1f[__Oxeb34e[0xac]][__Oxeb34e[0xae]] ? _0x3fedx1f[__Oxeb34e[0xac]][__Oxeb34e[0xae]] : __Oxeb34e[0xaf]
                    } catch (e) {
                        $[__Oxeb34e[0xad]] = __Oxeb34e[0xaf]
                    }
                    ;console[__Oxeb34e[0xb]](`${__Oxeb34e[0xb0]}${$[__Oxeb34e[0xad]]}${__Oxeb34e[0x0]}`)
                } else {
                    if (_0x3fedx1f[__Oxeb34e[0x23]][__Oxeb34e[0x1a]](__Oxeb34e[0xb1]) > -1) {
                        $[__Oxeb34e[0x17]] = true
                    }
                    ;
                    if (_0x3fedx1f[__Oxeb34e[0x23]][__Oxeb34e[0x1a]](__Oxeb34e[0xb2]) > -1) {
                        $[__Oxeb34e[0x17]] = true
                    }
                    ;
                    if (_0x3fedx1f[__Oxeb34e[0x23]][__Oxeb34e[0x1a]](__Oxeb34e[0xb3]) > -1) {
                        $[__Oxeb34e[0x17]] = true
                    }
                    ;
                    if (_0x3fedx1f[__Oxeb34e[0x23]][__Oxeb34e[0x1a]](__Oxeb34e[0xb4]) > -1) {
                        $[__Oxeb34e[0x17]] = true
                    }
                    ;console[__Oxeb34e[0xb]](`${__Oxeb34e[0xb5]}${_0x3fedx1f[__Oxeb34e[0x23]]}${__Oxeb34e[0x0]}`)
                }
                ;
                break;
            case __Oxeb34e[0x63]:
                console[__Oxeb34e[0xb]](`${__Oxeb34e[0xb6]}${_0x3fedx1d}${__Oxeb34e[0x0]}`);
                break;
            default:
                console[__Oxeb34e[0xb]](`${__Oxeb34e[0x0]}${_0x3fedx13}${__Oxeb34e[0xb7]}${_0x3fedx1d}${__Oxeb34e[0x0]}`);
                break
        }
        ;
        if (typeof _0x3fedx1f == __Oxeb34e[0x91]) {
            if (_0x3fedx1f[__Oxeb34e[0xb8]]) {
                if (_0x3fedx1f[__Oxeb34e[0xb8]][__Oxeb34e[0x1a]](__Oxeb34e[0xb9]) > -1) {
                    $[__Oxeb34e[0x14]] = true
                }
            }
        }
    } catch (e) {
        console[__Oxeb34e[0xb]](e)
    }
}

function getPostRequest(_0x3fedx21, _0x3fedx15, _0x3fedx16 = __Oxeb34e[0x66]) {
    let _0x3fedx22 = {
        "\x41\x63\x63\x65\x70\x74": __Oxeb34e[0xba],
        "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxeb34e[0xbb],
        "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxeb34e[0xbc],
        "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxeb34e[0xbd],
        "\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65": __Oxeb34e[0xbe],
        "\x43\x6F\x6F\x6B\x69\x65": cookie,
        "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxeb34e[0xbf]],
        "\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68": __Oxeb34e[0xc0]
    };
    if (_0x3fedx21[__Oxeb34e[0x1a]](__Oxeb34e[0x65]) > -1) {
        _0x3fedx22[__Oxeb34e[0xc1]] = `${__Oxeb34e[0x0]}${$[__Oxeb34e[0x28]]}${__Oxeb34e[0x2a]}`;
        _0x3fedx22[__Oxeb34e[0xc2]] = `${__Oxeb34e[0x0]}${activityCookie}${__Oxeb34e[0xc3]}${$[__Oxeb34e[0x42]]}${__Oxeb34e[0x0]}`
    } else {
        _0x3fedx22[__Oxeb34e[0xc2]] = cookie
    }
    ;
    return {url: _0x3fedx21, method: _0x3fedx16, headers: _0x3fedx22, body: _0x3fedx15, timeout: 30000}
}

function getCk() {
    return new Promise((_0x3fedx1a) => {
        let _0x3fedx24 = {
            url: `${__Oxeb34e[0x0]}${$[__Oxeb34e[0x28]]}${__Oxeb34e[0x2a]}`,
            headers: {
                "\x41\x63\x63\x65\x70\x74": __Oxeb34e[0xc4],
                "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxeb34e[0xbf]],
                "\x58\x2D\x52\x65\x71\x75\x65\x73\x74\x65\x64\x2D\x57\x69\x74\x68": __Oxeb34e[0xc5]
            },
            timeout: 30000
        };
        $[__Oxeb34e[0xc8]](_0x3fedx24, async (_0x3fedx1b, _0x3fedx1c, _0x3fedx1d) => {
            try {
                if (_0x3fedx1b) {
                    if (_0x3fedx1c && typeof _0x3fedx1c[__Oxeb34e[0x86]] != __Oxeb34e[0x87]) {
                        if (_0x3fedx1c[__Oxeb34e[0x86]] == 493) {
                            console[__Oxeb34e[0xb]](__Oxeb34e[0x88]);
                            $[__Oxeb34e[0x15]] = true
                        }
                    }
                    ;console[__Oxeb34e[0xb]](`${__Oxeb34e[0x0]}${$[__Oxeb34e[0x89]](_0x3fedx1b)}${__Oxeb34e[0x0]}`);
                    console[__Oxeb34e[0xb]](`${__Oxeb34e[0x0]}${$[__Oxeb34e[0x20]]}${__Oxeb34e[0xc6]}`)
                } else {
                    let _0x3fedx25 = _0x3fedx1d[__Oxeb34e[0x30]](/<title>(活动已结束)<\/title>/) && _0x3fedx1d[__Oxeb34e[0x30]](/<title>(活动已结束)<\/title>/)[0x1] || __Oxeb34e[0x0];
                    if (_0x3fedx25) {
                        $[__Oxeb34e[0x16]] = true;
                        console[__Oxeb34e[0xb]](__Oxeb34e[0xc7])
                    }
                    ;$[__Oxeb34e[0x9a]] = _0x3fedx1d[__Oxeb34e[0x30]](/<input type="hidden" id="venderId" value="(.\w+)">/) && _0x3fedx1d[__Oxeb34e[0x30]](/<input type="hidden" id="venderId" value="(.\w+)">/)[0x1] || __Oxeb34e[0x0];
                    $[__Oxeb34e[0x51]] = _0x3fedx1d[__Oxeb34e[0x30]](/<input type="hidden" id="userId" value="(.\w+)">/) && _0x3fedx1d[__Oxeb34e[0x30]](/<input type="hidden" id="userId" value="(.\w+)">/)[0x1] || __Oxeb34e[0x0];
                    setActivityCookie(_0x3fedx1c)
                }
            } catch (e) {
                $[__Oxeb34e[0x1e]](e, _0x3fedx1c)
            } finally {
                _0x3fedx1a()
            }
        })
    })
}

function getActInfo() {
    return new Promise((_0x3fedx1a) => {
        let _0x3fedx24 = {
            url: `${__Oxeb34e[0x0]}${$[__Oxeb34e[0xc9]]}${__Oxeb34e[0x0]}`,
            followRedirect: false,
            headers: {
                "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": $[__Oxeb34e[0xbf]],
                '\x52\x65\x66\x65\x72\x65\x72': $[__Oxeb34e[0x26]]
            },
            timeout: 30000
        };
        $[__Oxeb34e[0xc8]](_0x3fedx24, async (_0x3fedx1b, _0x3fedx1c, _0x3fedx1d) => {
            try {
                if (_0x3fedx1b) {
                } else {
                }
            } catch (e) {
                $[__Oxeb34e[0x1e]](e, _0x3fedx1c)
            } finally {
                _0x3fedx1a()
            }
        })
    })
}

function setActivityCookie(_0x3fedx1c) {
    if (_0x3fedx1c[__Oxeb34e[0xcb]][__Oxeb34e[0xca]]) {
        cookie = originCookie + __Oxeb34e[0xcc];
        for (let _0x3fedx28 of _0x3fedx1c[__Oxeb34e[0xcb]][__Oxeb34e[0xca]]) {
            lz_cookie[_0x3fedx28[__Oxeb34e[0x1b]](__Oxeb34e[0xcc])[0x0][__Oxeb34e[0xce]](0, _0x3fedx28[__Oxeb34e[0x1b]](__Oxeb34e[0xcc])[0x0][__Oxeb34e[0x1a]](__Oxeb34e[0xcd]))] = _0x3fedx28[__Oxeb34e[0x1b]](__Oxeb34e[0xcc])[0x0][__Oxeb34e[0xce]](_0x3fedx28[__Oxeb34e[0x1b]](__Oxeb34e[0xcc])[0x0][__Oxeb34e[0x1a]](__Oxeb34e[0xcd]) + 1)
        }
        ;
        for (const _0x3fedx29 of Object[__Oxeb34e[0x8]](lz_cookie)) {
            cookie += (_0x3fedx29 + __Oxeb34e[0xcd] + lz_cookie[_0x3fedx29] + __Oxeb34e[0xcc])
        }
        ;activityCookie = cookie
    }
}

async function getUA() {
    $[__Oxeb34e[0xbf]] = `${__Oxeb34e[0xcf]}${randomString(40)}${__Oxeb34e[0xd0]}`
}

function randomString(_0x3fedxb) {
    _0x3fedxb = _0x3fedxb || 32;
    let _0x3fedx2c = __Oxeb34e[0xd1], _0x3fedx2d = _0x3fedx2c[__Oxeb34e[0x24]], _0x3fedx2e = __Oxeb34e[0x0];
    for (i = 0; i < _0x3fedxb; i++) {
        _0x3fedx2e += _0x3fedx2c[__Oxeb34e[0xd3]](Math[__Oxeb34e[0xd2]](Math[__Oxeb34e[0x2d]]() * _0x3fedx2d))
    }
    ;
    return _0x3fedx2e
}

function jsonParse(_0x3fedx30) {
    if (typeof _0x3fedx30 == __Oxeb34e[0xd4]) {
        try {
            return JSON[__Oxeb34e[0x8e]](_0x3fedx30)
        } catch (e) {
            console[__Oxeb34e[0xb]](e);
            $[__Oxeb34e[0x23]]($[__Oxeb34e[0x20]], __Oxeb34e[0x0], __Oxeb34e[0xd5]);
            return []
        }
    }
}

function checkCookie() {
    const _0x3fedx32 = {
        url: __Oxeb34e[0xd6],
        headers: {
            "\x48\x6F\x73\x74": __Oxeb34e[0xd7],
            "\x41\x63\x63\x65\x70\x74": __Oxeb34e[0xd8],
            "\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E": __Oxeb34e[0xbd],
            "\x43\x6F\x6F\x6B\x69\x65": cookie,
            "\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": __Oxeb34e[0xd9],
            "\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65": __Oxeb34e[0xbc],
            "\x52\x65\x66\x65\x72\x65\x72": __Oxeb34e[0xda],
            "\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67": __Oxeb34e[0xbb]
        }
    };
    return new Promise((_0x3fedx1a) => {
        $[__Oxeb34e[0xc8]](_0x3fedx32, (_0x3fedx1b, _0x3fedx1c, _0x3fedx1d) => {
            try {
                if (_0x3fedx1b) {
                    $[__Oxeb34e[0x1e]](_0x3fedx1b)
                } else {
                    if (_0x3fedx1d) {
                        _0x3fedx1d = JSON[__Oxeb34e[0x8e]](_0x3fedx1d);
                        if (_0x3fedx1d[__Oxeb34e[0xdb]] == __Oxeb34e[0xdc]) {
                            $[__Oxeb34e[0x34]] = false;
                            return
                        } else {
                            $[__Oxeb34e[0x34]] = true;
                            return
                        }
                        ;
                        if (_0x3fedx1d[__Oxeb34e[0xdb]] === __Oxeb34e[0xdd] && _0x3fedx1d[__Oxeb34e[0x97]][__Oxeb34e[0xdf]](__Oxeb34e[0xde])) {
                            $[__Oxeb34e[0x33]] = _0x3fedx1d[__Oxeb34e[0x97]][__Oxeb34e[0xde]][__Oxeb34e[0xe1]][__Oxeb34e[0xe0]]
                        }
                    } else {
                        $[__Oxeb34e[0xb]](__Oxeb34e[0xe2])
                    }
                }
            } catch (e) {
                $[__Oxeb34e[0x1e]](e)
            } finally {
                _0x3fedx1a()
            }
        })
    })
}

function random(_0x3fedx34, _0x3fedx35) {
    return Math[__Oxeb34e[0xd2]](Math[__Oxeb34e[0x2d]]() * (_0x3fedx35 - _0x3fedx34)) + _0x3fedx34
}

function getToken() {
    return new Promise((_0x3fedx1a) => {
        $[__Oxeb34e[0xc8]]({
            url: `${__Oxeb34e[0xe3]}`,
            headers: {"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74": __Oxeb34e[0xe4]},
            timeout: 30000
        }, (_0x3fedx1b, _0x3fedx1c, _0x3fedx1d) => {
            try {
                if (_0x3fedx1b) {
                    console[__Oxeb34e[0xb]](`${__Oxeb34e[0xe5]}`)
                } else {
                    _0x3fedx1d = JSON[__Oxeb34e[0x8e]](_0x3fedx1d);
                    if (_0x3fedx1d[__Oxeb34e[0xe6]] == 0) {
                        _0x3fedx1d = _0x3fedx1d[__Oxeb34e[0x97]]
                    } else {
                        _0x3fedx1d = __Oxeb34e[0x0]
                    }
                }
            } catch (e) {
                $[__Oxeb34e[0x1e]](e, _0x3fedx1c)
            } finally {
                _0x3fedx1a(_0x3fedx1d || __Oxeb34e[0x0])
            }
        })
    })
}

async function joinShop() {
    if (!$[__Oxeb34e[0x59]]) {
        return
    }
    ;
    return new Promise(async (_0x3fedx1a) => {
        $[__Oxeb34e[0x5b]] = __Oxeb34e[0x5a];
        let _0x3fedx38 = `${__Oxeb34e[0x0]}`;
        await getshopactivityId();
        if ($[__Oxeb34e[0xe7]]) {
            _0x3fedx38 = `${__Oxeb34e[0xe8]}${$[__Oxeb34e[0xe7]]}${__Oxeb34e[0x0]}`
        }
        ;let _0x3fedx15 = `${__Oxeb34e[0xe9]}${$[__Oxeb34e[0x59]]}${__Oxeb34e[0xea]}${_0x3fedx38}${__Oxeb34e[0xeb]}`;
        let _0x3fedx39 = __Oxeb34e[0x0];
        _0x3fedx39 = await geth5st();
        const _0x3fedx32 = {
            url: `${__Oxeb34e[0xec]}${_0x3fedx15}${__Oxeb34e[0xed]}${_0x3fedx39}${__Oxeb34e[0x0]}`,
            headers: {
                '\x61\x63\x63\x65\x70\x74': __Oxeb34e[0xd8],
                '\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67': __Oxeb34e[0xbb],
                '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': __Oxeb34e[0xee],
                '\x63\x6F\x6F\x6B\x69\x65': cookie,
                '\x6F\x72\x69\x67\x69\x6E': __Oxeb34e[0xef],
                '\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74': $[__Oxeb34e[0xbf]]
            }
        };
        await $[__Oxeb34e[0x2e]](500);
        $[__Oxeb34e[0xc8]](_0x3fedx32, async (_0x3fedx1b, _0x3fedx1c, _0x3fedx1d) => {
            try {
                _0x3fedx1d = _0x3fedx1d && _0x3fedx1d[__Oxeb34e[0x30]](/jsonp_.*?\((.*?)\);/) && _0x3fedx1d[__Oxeb34e[0x30]](/jsonp_.*?\((.*?)\);/)[0x1] || _0x3fedx1d;
                let _0x3fedx1f = $[__Oxeb34e[0xf0]](_0x3fedx1d, _0x3fedx1d);
                if (_0x3fedx1f && typeof _0x3fedx1f == __Oxeb34e[0x91]) {
                    if (_0x3fedx1f && _0x3fedx1f[__Oxeb34e[0xf1]] === true) {
                        console[__Oxeb34e[0xb]](_0x3fedx1f[__Oxeb34e[0x94]]);
                        $[__Oxeb34e[0x5b]] = _0x3fedx1f[__Oxeb34e[0x94]];
                        if (_0x3fedx1f[__Oxeb34e[0x96]] && _0x3fedx1f[__Oxeb34e[0x96]][__Oxeb34e[0xf2]]) {
                            for (let _0x3fedxd of _0x3fedx1f[__Oxeb34e[0x96]][__Oxeb34e[0xf2]][__Oxeb34e[0xf3]]) {
                                console[__Oxeb34e[0xb]](`${__Oxeb34e[0xf4]}${_0x3fedxd[__Oxeb34e[0xf5]]}${__Oxeb34e[0x0]}${_0x3fedxd[__Oxeb34e[0xf6]]}${__Oxeb34e[0x0]}${_0x3fedxd[__Oxeb34e[0xf7]]}${__Oxeb34e[0x0]}`)
                            }
                        }
                    } else {
                        if (_0x3fedx1f && typeof _0x3fedx1f == __Oxeb34e[0x91] && _0x3fedx1f[__Oxeb34e[0x94]]) {
                            $[__Oxeb34e[0x5b]] = _0x3fedx1f[__Oxeb34e[0x94]];
                            console[__Oxeb34e[0xb]](`${__Oxeb34e[0x0]}${_0x3fedx1f[__Oxeb34e[0x94]] || __Oxeb34e[0x0]}${__Oxeb34e[0x0]}`)
                        } else {
                            console[__Oxeb34e[0xb]](_0x3fedx1d)
                        }
                    }
                } else {
                    console[__Oxeb34e[0xb]](_0x3fedx1d)
                }
            } catch (e) {
                $[__Oxeb34e[0x1e]](e, _0x3fedx1c)
            } finally {
                _0x3fedx1a()
            }
        })
    })
}

async function getshopactivityId() {
    return new Promise(async (_0x3fedx1a) => {
        let _0x3fedx15 = `${__Oxeb34e[0xe9]}${$[__Oxeb34e[0x59]]}${__Oxeb34e[0xf8]}`;
        let _0x3fedx39 = `${__Oxeb34e[0x0]}${new Date(Date[__Oxeb34e[0xfa]]()).Format(__Oxeb34e[0xf9])}${__Oxeb34e[0xcc]}${generateFp()}${__Oxeb34e[0xfb]}${Date[__Oxeb34e[0xfa]]()}${__Oxeb34e[0x0]}`;
        _0x3fedx39 = encodeURIComponent(_0x3fedx39);
        const _0x3fedx32 = {
            url: `${__Oxeb34e[0xfc]}${_0x3fedx15}${__Oxeb34e[0xed]}${_0x3fedx39}${__Oxeb34e[0x0]}`,
            headers: {
                '\x61\x63\x63\x65\x70\x74': __Oxeb34e[0xd8],
                '\x61\x63\x63\x65\x70\x74\x2D\x65\x6E\x63\x6F\x64\x69\x6E\x67': __Oxeb34e[0xbb],
                '\x61\x63\x63\x65\x70\x74\x2D\x6C\x61\x6E\x67\x75\x61\x67\x65': __Oxeb34e[0xee],
                '\x63\x6F\x6F\x6B\x69\x65': cookie,
                '\x6F\x72\x69\x67\x69\x6E': __Oxeb34e[0xef],
                '\x75\x73\x65\x72\x2D\x61\x67\x65\x6E\x74': $[__Oxeb34e[0xbf]]
            }
        };
        await $[__Oxeb34e[0x2e]](500);
        $[__Oxeb34e[0xc8]](_0x3fedx32, async (_0x3fedx1b, _0x3fedx1c, _0x3fedx1d) => {
            try {
                _0x3fedx1d = _0x3fedx1d && _0x3fedx1d[__Oxeb34e[0x30]](/jsonp_.*?\((.*?)\);/) && _0x3fedx1d[__Oxeb34e[0x30]](/jsonp_.*?\((.*?)\);/)[0x1] || _0x3fedx1d;
                let _0x3fedx1f = $[__Oxeb34e[0xf0]](_0x3fedx1d, _0x3fedx1d);
                if (_0x3fedx1f && typeof _0x3fedx1f == __Oxeb34e[0x91]) {
                    if (_0x3fedx1f && _0x3fedx1f[__Oxeb34e[0xf1]] == true) {
                        console[__Oxeb34e[0xb]](`${__Oxeb34e[0xfd]}${_0x3fedx1f[__Oxeb34e[0x96]][0x0][__Oxeb34e[0xff]][__Oxeb34e[0xfe]] || __Oxeb34e[0x0]}${__Oxeb34e[0x0]}`);
                        $[__Oxeb34e[0xe7]] = _0x3fedx1f[__Oxeb34e[0x96]][0x0][__Oxeb34e[0x100]] && _0x3fedx1f[__Oxeb34e[0x96]][0x0][__Oxeb34e[0x100]][0x0] && _0x3fedx1f[__Oxeb34e[0x96]][0x0][__Oxeb34e[0x100]][0x0][__Oxeb34e[0x101]] && _0x3fedx1f[__Oxeb34e[0x96]][0x0][__Oxeb34e[0x100]][0x0][__Oxeb34e[0x101]][__Oxeb34e[0x26]] || __Oxeb34e[0x0]
                    }
                } else {
                    console[__Oxeb34e[0xb]](_0x3fedx1d)
                }
            } catch (e) {
                $[__Oxeb34e[0x1e]](e, _0x3fedx1c)
            } finally {
                _0x3fedx1a()
            }
        })
    })
}

function generateFp() {
    let _0x3fedxb = __Oxeb34e[0x102];
    let _0x3fedx2d = 13;
    let _0x3fedxd = __Oxeb34e[0x0];
    for (; _0x3fedx2d--;) {
        _0x3fedxd += _0x3fedxb[Math[__Oxeb34e[0x2d]]() * _0x3fedxb[__Oxeb34e[0x24]] | 0]
    }
    ;
    return (_0x3fedxd + Date[__Oxeb34e[0xfa]]())[__Oxeb34e[0x103]](0, 16)
}

function geth5st() {
    let _0x3fedx3d = Date[__Oxeb34e[0xfa]]();
    let _0x3fedx3e = generateFp();
    let _0x3fedx3f = new Date(_0x3fedx3d).Format(__Oxeb34e[0xf9]);
    let _0x3fedx40 = __Oxeb34e[0x0];
    let _0x3fedx41 = __Oxeb34e[0x0];
    let _0x3fedx42 = [__Oxeb34e[0x104], __Oxeb34e[0x105], __Oxeb34e[0x106]];
    let _0x3fedx43 = _0x3fedx42[random(0, _0x3fedx42[__Oxeb34e[0x24]])];
    return encodeURIComponent(_0x3fedx3f + __Oxeb34e[0xcc] + _0x3fedx43 + _0x3fedx3e + __Oxeb34e[0x0] + Date[__Oxeb34e[0xfa]]())
}

function getH5st() {
    let _0x3fedx3d = Date[__Oxeb34e[0xfa]]();
    let _0x3fedx3e = generateFp();
    let _0x3fedx3f = new Date(_0x3fedx3d).Format(__Oxeb34e[0xf9]);
    return encodeURIComponent(_0x3fedx3f + __Oxeb34e[0xcc] + __Oxeb34e[0x0] + _0x3fedx3e + __Oxeb34e[0x105] + Date[__Oxeb34e[0xfa]]())
}

Date[__Oxeb34e[0x108]][__Oxeb34e[0x107]] = function (_0x3fedx45) {
    var _0x3fedxb, _0x3fedx2e = this, _0x3fedx46 = _0x3fedx45, _0x3fedx47 = {
        "\x4D\x2B": _0x3fedx2e[__Oxeb34e[0x109]]() + 1,
        "\x64\x2B": _0x3fedx2e[__Oxeb34e[0x10a]](),
        "\x44\x2B": _0x3fedx2e[__Oxeb34e[0x10a]](),
        "\x68\x2B": _0x3fedx2e[__Oxeb34e[0x10b]](),
        "\x48\x2B": _0x3fedx2e[__Oxeb34e[0x10b]](),
        "\x6D\x2B": _0x3fedx2e[__Oxeb34e[0x10c]](),
        "\x73\x2B": _0x3fedx2e[__Oxeb34e[0x10d]](),
        "\x77\x2B": _0x3fedx2e[__Oxeb34e[0x10e]](),
        "\x71\x2B": Math[__Oxeb34e[0xd2]]((_0x3fedx2e[__Oxeb34e[0x109]]() + 3) / 3),
        "\x53\x2B": _0x3fedx2e[__Oxeb34e[0x10f]]()
    };
    /(y+)/i[__Oxeb34e[0x110]](_0x3fedx46) && (_0x3fedx46 = _0x3fedx46[__Oxeb34e[0x114]](RegExp.$1, __Oxeb34e[0x0][__Oxeb34e[0x113]](_0x3fedx2e[__Oxeb34e[0x112]]())[__Oxeb34e[0xce]](4 - RegExp[__Oxeb34e[0x111]][__Oxeb34e[0x24]])));
    for (var _0x3fedx48 in _0x3fedx47) {
        if (new RegExp(__Oxeb34e[0x116][__Oxeb34e[0x113]](_0x3fedx48, __Oxeb34e[0x115]))[__Oxeb34e[0x110]](_0x3fedx46)) {
            var _0x3fedx2c, _0x3fedx2d = __Oxeb34e[0x117] === _0x3fedx48 ? __Oxeb34e[0x118] : __Oxeb34e[0x119];
            _0x3fedx46 = _0x3fedx46[__Oxeb34e[0x114]](RegExp.$1, 1 == RegExp[__Oxeb34e[0x111]][__Oxeb34e[0x24]] ? _0x3fedx47[_0x3fedx48] : (__Oxeb34e[0x0][__Oxeb34e[0x113]](_0x3fedx2d) + _0x3fedx47[_0x3fedx48])[__Oxeb34e[0xce]](__Oxeb34e[0x0][__Oxeb34e[0x113]](_0x3fedx47[_0x3fedx48])[__Oxeb34e[0x24]]))
        }
    }
    ;
    return _0x3fedx46
};

function random(_0x3fedx34, _0x3fedx35) {
    return Math[__Oxeb34e[0xd2]](Math[__Oxeb34e[0x2d]]() * (_0x3fedx35 - _0x3fedx34)) + _0x3fedx34
}

function getUrlQueryValueByKey(_0x3fedx4a, _0x3fedx21) {
    if (!_0x3fedx21) {
        _0x3fedx21 = location[__Oxeb34e[0x11a]]
    }
    ;var _0x3fedx4b = new RegExp(__Oxeb34e[0x11b] + _0x3fedx4a + __Oxeb34e[0x11c]);
    var _0x3fedx4c = _0x3fedx21[__Oxeb34e[0x30]](_0x3fedx4b);
    if (_0x3fedx4c != null) {
        return decodeURIComponent(_0x3fedx4c[0x2])
    }
    ;
    return __Oxeb34e[0x0]
}

function getNowDate() {
    let _0x3fedx4e = new Date();
    let _0x3fedx4f = _0x3fedx4e[__Oxeb34e[0x109]]() + 1;
    let _0x3fedx50 = _0x3fedx4e[__Oxeb34e[0x10a]]();
    let _0x3fedx51 = __Oxeb34e[0x0];
    if (_0x3fedx4f >= 1 && _0x3fedx4f <= 9) {
        _0x3fedx4f = __Oxeb34e[0xdd] + _0x3fedx4f
    }
    ;
    if (_0x3fedx50 >= 0 && _0x3fedx50 <= 9) {
        _0x3fedx50 = __Oxeb34e[0xdd] + _0x3fedx50
    }
    ;let _0x3fedx52 = _0x3fedx4e[__Oxeb34e[0x112]]() + _0x3fedx51 + _0x3fedx4f + _0x3fedx51 + _0x3fedx50;
    return _0x3fedx52
}

(function (_0x3fedx53, _0x3fedx54, _0x3fedx55, _0x3fedx56, _0x3fedx57, _0x3fedx48) {
    _0x3fedx48 = __Oxeb34e[0x87];
    _0x3fedx56 = function (_0x3fedx58) {
        if (typeof alert !== _0x3fedx48) {
            alert(_0x3fedx58)
        }
        ;
        if (typeof console !== _0x3fedx48) {
            console[__Oxeb34e[0xb]](_0x3fedx58)
        }
    };
    _0x3fedx55 = function (_0x3fedx2d, _0x3fedx53) {
        return _0x3fedx2d + _0x3fedx53
    };
    _0x3fedx57 = _0x3fedx55(__Oxeb34e[0x11d], _0x3fedx55(_0x3fedx55(__Oxeb34e[0x11e], __Oxeb34e[0x11f]), __Oxeb34e[0x120]));
    try {
        _0x3fedx53 = __encode;
        if (!(typeof _0x3fedx53 !== _0x3fedx48 && _0x3fedx53 === _0x3fedx55(__Oxeb34e[0x121], __Oxeb34e[0x122]))) {
            _0x3fedx56(_0x3fedx57)
        }
    } catch (e) {
        _0x3fedx56(_0x3fedx57)
    }
})({})


// prettier-ignore
function Env(t, e) {
    "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);

    class s {
        constructor(t) {
            this.env = t
        }

        send(t, e = "GET") {
            t = "string" == typeof t ? {url: t} : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }

        get(t) {
            return this.send.call(this.env, t)
        }

        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }

    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`)
        }

        isNode() {
            return "undefined" != typeof module && !!module.exports
        }

        isQuanX() {
            return "undefined" != typeof $task
        }

        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }

        isLoon() {
            return "undefined" != typeof $loon
        }

        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }

        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }

        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {
            }
            return s
        }

        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }

        getScript(t) {
            return new Promise(e => {
                this.get({url: t}, (t, s, i) => e(i))
            })
        }

        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, "").trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), n = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {script_text: t, mock_type: "cron", timeout: r},
                    headers: {"X-Key": o, Accept: "*/*"}
                };
                this.post(n, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }

        loaddata() {
            if (!this.isNode()) return {};
            {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e);
                if (!s && !i) return {};
                {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }

        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }

        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i) if (r = Object(r)[t], void 0 === r) return s;
            return r
        }

        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }

        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, "") : e
                } catch (t) {
                    e = ""
                }
            }
            return e
        }

        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i),
                    h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }

        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }

        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }

        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }

        get(t, e = (() => {
        })) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => {
                const {message: s, response: i} = t;
                e(s, i, i && i.body)
            }))
        }

        post(t, e = (() => {
        })) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {"X-Surge-Skip-Scripting": !1})), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {hints: !1})), $task.fetch(t).then(t => {
                const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                e(null, {status: s, statusCode: i, headers: r, body: o}, o)
            }, t => e(t)); else if (this.isNode()) {
                this.initGotEnv(t);
                const {url: s, ...i} = t;
                this.got.post(s, i).then(t => {
                    const {statusCode: s, statusCode: i, headers: r, body: o} = t;
                    e(null, {status: s, statusCode: i, headers: r, body: o}, o)
                }, t => {
                    const {message: s, response: i} = t;
                    e(s, i, i && i.body)
                })
            }
        }

        time(t, e = null) {
            const s = e ? new Date(e) : new Date;
            let i = {
                "M+": s.getMonth() + 1,
                "d+": s.getDate(),
                "H+": s.getHours(),
                "m+": s.getMinutes(),
                "s+": s.getSeconds(),
                "q+": Math.floor((s.getMonth() + 3) / 3),
                S: s.getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
            for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
            return t
        }

        msg(e = t, s = "", i = "", r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {"open-url": t} : this.isSurge() ? {url: t} : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"];
                        return {openUrl: e, mediaUrl: s}
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl;
                        return {"open-url": e, "media-url": s}
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {url: e}
                    }
                }
            };
            if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
                let t = ["", "==============📣系统通知📣=============="];
                t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t)
            }
        }

        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }

        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t)
        }

        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }

        done(t = {}) {
            const e = (new Date).getTime(), s = (e - this.startTime) / 1e3;
            this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}