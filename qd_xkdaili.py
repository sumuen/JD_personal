"""
const $ = new Env("星空代理签到");
cron: 1
"""

import os
import re

import requests

xingkong = os.environ["xingkong"]

try:
    a1 = re.findall(r"(ASP\.NET_SessionId)=(.*?);", xingkong)
    a2 = re.findall(r"(Hm_lvt_\w+)=(\d+),", xingkong)
    a3 = re.findall(r"(Hm_lpvt_\w+)=(\d+);", xingkong)
    a4 = re.findall(r"(dt_cookie.*?)=(DTcms=\d+)", xingkong)
    cookies = {
        a1[0][0]: a1[0][1],
        a2[0][0]: a2[0][1],
        a3[0][0]: a3[0][1],
        a4[0][0]: a4[0][1],
    }
    headers = {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
        'Connection': 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        # Requests sorts cookies= alphabetically
        # 'Cookie': 'ASP.NET_SessionId=23dfn2mafqhzkuuzosirclt1; Hm_lvt_d76458121a7604d3e55d998f66ef0be6=1659492634; dt_cookie_user_name_remember=DTcms=18729469208; Hm_lpvt_d76458121a7604d3e55d998f66ef0be6=1659493214',
        'DNT': '1',
        'Origin': 'http://www.xkdaili.com',
        'Referer': 'http://www.xkdaili.com/main/usercenter.aspx',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36 Edg/103.0.1264.77',
        'X-Requested-With': 'XMLHttpRequest',
    }

    params = {
        'action': 'user_receive_point',
    }

    data = {
        'type': 'login',
    }

    response = requests.post('http://www.xkdaili.com/tools/submit_ajax.ashx', params=params, cookies=cookies, headers=headers, data=data, verify=False)
    print(response.json())
except Exception as e:
    print("没有获取到参数" + str(e))
