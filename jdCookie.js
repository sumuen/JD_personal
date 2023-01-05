/*
================================================================================
魔改自 https://github.com/shufflewzc/faker2/blob/main/jdCookie.js
修改内容: 适配代理和活动项目的个人定制版本，如果执行报错nodejs依赖添加 global-agent
修改原因: 适应群内项目
所属组织：InteIJ群
================================================================================
添加代理变量 JK_ALL_PROXY
export JK_ALL_PROXY="http://IP:端口";
脚本黑白名单

定时任务 BAN_TIMING
export BAN_TIMING="0&1&2";
时间0-23 如果问为什么没有24 那就别玩了，添加的时间都不执行代理

脚本黑白名单 PASS_SCRIPT
export PASS_SCRIPT="jd_fruit_task.js&jd_wsdlb.js";
如果代理使用白名单，就把63 64行删了, 如果使用黑名单就把48 49 行删了，默认添加都走代理
bootstrap();
GLOBAL_AGENT.HTTP_PROXY = JK_ALL_PROXY;

专门适配活动参数的
export NOT_CJ="pt_pin1&pt_pin2" CJ开头黑名单
export NOT_LZ="pt_pin1&pt_pin2" LZ开头黑名单
 */
const {bootstrap} = require("global-agent");
// 代理api的变量
let JK_ALL_PROXY = process.env.JK_ALL_PROXY ? process.env.JK_ALL_PROXY : '';
// 定时任务黑名单
let BAN_TIMING = process.env.BAN_TIMING ? process.env.BAN_TIMING : '';

// 获取活动参数类型, https://github.com/XgzK/QL_variable 专用
let NOT_TYPE = process.env.NOT_TYPE ? process.env.NOT_TYPE : '';

const White_date = new Date();
let NOT_CJ = [];
let NOT_LZ = [];

let hours_ti = White_date.getHours();
// 定时任务,默认填写的为黑名单时间
if (BAN_TIMING.split('&').indexOf(String(hours_ti)) > -1) {
    console.log(`检测到 ${hours_ti} 时在 BAN_TIMING 变量中执行此输出`);
} else {
    // 代理获取执行脚本名称的
    let PASS_SCRIPT = process.env.PASS_SCRIPT ? process.env.PASS_SCRIPT : '';
    // 检测脚本在不在黑白名单
    if (PASS_SCRIPT.split('&').indexOf(process.argv[1].split('/').reverse()[0]) !== -1) {
        console.log("这里可以填写代理 PASS_SCRIPT为白名单");
        bootstrap();
        GLOBAL_AGENT.HTTP_PROXY = JK_ALL_PROXY;
    } else if (NOT_TYPE) {
        // 这里是活动的，如果你只是使用代理而没有使用活动请勿修改
        if (NOT_TYPE) {
            // QL_variable 项目的，执行活动必进来
            NOT_CJ = process.env.NOT_CJ ? process.env.NOT_CJ : '';
            NOT_LZ = process.env.NOT_LZ ? process.env.NOT_LZ : '';
            NOT_LZ = NOT_LZ.split('&');
            NOT_CJ = NOT_CJ.split('&');
            bootstrap();
            GLOBAL_AGENT.HTTP_PROXY = JK_ALL_PROXY;
        }
    } else {
        console.log("这里也可以填写代理 PASS_SCRIPT 为黑名单");
        bootstrap();
        GLOBAL_AGENT.HTTP_PROXY = JK_ALL_PROXY;
    }

}
//此处填写京东账号cookie。
let CookieJDs = []
// 判断环境变量里面是否有京东ck
if (process.env.JD_COOKIE) {
    if (process.env.JD_COOKIE.indexOf('&') > -1) {
        CookieJDs = process.env.JD_COOKIE.split('&');
    } else if (process.env.JD_COOKIE.indexOf('\n') > -1) {
        CookieJDs = process.env.JD_COOKIE.split('\n');
    } else {
        CookieJDs = [process.env.JD_COOKIE];
    }
}
if (JSON.stringify(process.env).indexOf('GITHUB')>-1) {
    console.log(`请勿使用github action运行此脚本,无论你是从你自己的私库还是其他哪里拉取的源代码，都会导致我被封号\n`);
    !(async () => {
        await require('./sendNotify').sendNotify('提醒', `请勿使用github action、滥用github资源会封我仓库以及账号`)
        await process.exit(0);
    })()
}
CookieJDs = [...new Set(CookieJDs.filter(item => !!item))]
console.log(`\n====================共${CookieJDs.length}个京东账号Cookie=========\n`);
console.log(`==================脚本执行- 北京时间(UTC+8)：${new Date(new Date().getTime() + new Date().getTimezoneOffset()*60*1000 + 8*60*60*1000).toLocaleString('zh', {hour12: false}).replace(' 24:',' 00:')}=====================\n`)
if (process.env.JD_DEBUG && process.env.JD_DEBUG === 'false') console.log = () => {
};
if (NOT_TYPE) {
    for (let i = 0; i < CookieJDs.length; i++) {
        if (!CookieJDs[i].match(/pt_pin=(.+?);/) || !CookieJDs[i].match(/pt_key=(.+?);/)) console.log(`\n提示:京东cookie 【${CookieJDs[i]}】填写不规范,可能会影响部分脚本正常使用。正确格式为: pt_key=xxx;pt_pin=xxx;（分号;不可少）\n`);
        const index = (i + 1 === 1) ? '' : (i + 1);
        if (NOT_TYPE === 'lz') {
            jd_ck = CookieJDs[i].match(/pt_pin=(.+?);/)[1]
            if (NOT_LZ.indexOf(jd_ck) > -1) {
                console.log(jd_ck + "在LZ黑名单中,跳过本次线报执行")
                continue
            }
        } else if (NOT_TYPE === 'cj') {
            jd_ck = CookieJDs[i].match(/pt_pin=(.+?);/)[1]
            if (NOT_CJ.indexOf(jd_ck) > -1) {
                console.log(jd_ck + "在CJ黑名单中,跳过本次线报执行")
                continue
            }
        }
        exports['CookieJD' + index] = CookieJDs[i].trim();
    }
} else if (process.env.JD_COOKIE) {
    for (let i = 0; i < CookieJDs.length; i++) {
        if (!CookieJDs[i].match(/pt_pin=(.+?);/) || !CookieJDs[i].match(/pt_key=(.+?);/)) console.log(`\n提示:京东cookie 【${CookieJDs[i]}】填写不规范,可能会影响部分脚本正常使用。正确格式为: pt_key=xxx;pt_pin=xxx;（分号;不可少）\n`);
        const index = (i + 1 === 1) ? '' : (i + 1);
        exports['CookieJD' + index] = CookieJDs[i].trim();
    }
}

// 以下为注入互助码环境变量（仅nodejs内起效）的代码
function SetShareCodesEnv(nameConfig = "", envName = "") {
    let rawCodeConfig = {}

    // 读取互助码
    let shareCodeLogPath = `${process.env.QL_DIR}/log/.ShareCode/${nameConfig}.log`
    let fs = require('fs')
    if (fs.existsSync(shareCodeLogPath)) {
        // 因为faker2目前没有自带ini，改用已有的dotenv来解析
        // // 利用ini模块读取原始互助码和互助组信息
        // let ini = require('ini')
        // rawCodeConfig = ini.parse(fs.readFileSync(shareCodeLogPath, 'utf-8'))

        // 使用env模块
        require('dotenv').config({path: shareCodeLogPath})
        rawCodeConfig = process.env
    }

    // 解析每个用户的互助码
    let codes = {}
    Object.keys(rawCodeConfig).forEach(function (key) {
        if (key.startsWith(`My${nameConfig}`)) {
            codes[key] = rawCodeConfig[key]
        }
    });

    // 解析每个用户要帮助的互助码组，将用户实际的互助码填充进去
    let helpOtherCodes = {}
    Object.keys(rawCodeConfig).forEach(function (key) {
        if (key.startsWith(`ForOther${nameConfig}`)) {
            helpCode = rawCodeConfig[key]
            for (const [codeEnv, codeVal] of Object.entries(codes)) {
                helpCode = helpCode.replace("${" + codeEnv + "}", codeVal)
            }

            helpOtherCodes[key] = helpCode
        }
    });

    // 按顺序用&拼凑到一起，并放入环境变量，供目标脚本使用
    let shareCodes = []
    let totalCodeCount = Object.keys(helpOtherCodes).length
    for (let idx = 1; idx <= totalCodeCount; idx++) {
        shareCodes.push(helpOtherCodes[`ForOther${nameConfig}${idx}`])
    }
    let shareCodesStr = shareCodes.join('&')
    process.env[envName] = shareCodesStr

    console.info(`【风之凌殇】 友情提示：为避免ck超过45以上时，互助码环境变量过大而导致调用一些系统命令（如date/cat）时报 Argument list too long，改为在nodejs中设置 ${nameConfig} 的 互助码环境变量 ${envName}，共计 ${totalCodeCount} 组互助码，总大小为 ${shareCodesStr.length}`)
}

// 若在task_before.sh 中设置了要设置互助码环境变量的活动名称和环境变量名称信息，则在nodejs中处理，供活动使用
let nameConfig = process.env.ShareCodeConfigName
let envName = process.env.ShareCodeEnvName
if (nameConfig && envName) {
    SetShareCodesEnv(nameConfig, envName)
} else {
    console.debug(`InteIJ群 友情提示：您的脚本正常运行中，jdCookie.js属于私人定制版,不放心请使用各大库的jdCookie.js`)
}
