#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
File: jd_pqdtk.py(店铺签到简化版)
Author: HarbourJ
Date: 2022/11/11 12:00
TG: https://t.me/InteIJ
cron: 1
new Env('店铺签到简化版');
"""
import json
import os
import re
import sys
import time

import requests

from USER_AGENTS import get_user_agent

try:
    from jdCookie import get_cookies

    getCk = get_cookies()
except:
    print("请先下载依赖脚本，\njdCookie.py")
    sys.exit(3)

JD_API_HOST = 'https://api.m.jd.com/api?appid=interCenter_shopSign'


def signCollectGift(cookie, token, venderId, activityId):
    """
    店铺签到
    :param cookie:
    :param token:
    :param venderId:
    :param activityId:
    :return:
    """
    try:
        url = f'{JD_API_HOST}&t={int(time.time())}&loginType=2&functionId=interact_center_shopSign_signCollectGift&body=' + '{"token":"' + f'{token}","venderId":{venderId},"activityId":{activityId},"type":2,"actionType":' + '7}&jsonp=jsonp1004'
        headers = {
            "accept": "accept",
            "accept-encoding": "gzip, deflate",
            "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
            "cookie": cookie,
            "referer": f"https://h5.m.jd.com/babelDiy/Zeus/2PAAf74aG3D61qvfKUM5dxUssJQ9/index.html?token=${token}&sceneval=2&jxsid=16105853541009626903&cu=true&utm_source=kong&utm_medium=jingfen&utm_campaign=t_1001280291_&utm_term=fa3f8f38c56f44e2b4bfc2f37bce9713",
            "User-Agent": get_user_agent()
        }
        pq_data = requests.get(url, headers=headers)
        # 筛选所有非200问题
        if pq_data.status_code != 200:
            print(f'失败店铺店铺token值是: {token}\n失败状态码: {pq_data.status_code}')
            return []
        codata = re.findall('"code":(\d+)', pq_data.text)
        if codata:
            if int(codata[0]) == 200:
                print(f'店铺 {token} 签到成功')
                return [200]
            else:
                codata1 = re.findall('"msg":"(.*?)",', pq_data.text)
                if codata1:
                    print(f'失败店铺店铺token1值是: {token}\n签到失败信息: {codata1[0]}')
                    if codata1[0] == "用户达到签到上限":
                        return [-1]
                    return []
                print(f'失败店铺店铺token2值是: {token}\n签到失败返回值: {codata[0]}')
                return []
        return []
    except Exception as e:
        print(f'失败店铺店铺token值是: {token}\n签到异常: {e}')
        return []


def taskUrl(cookie, token, venderId, activityId):
    """
    店铺获取签到信息
    :param cookie:
    :param token:
    :param venderId:
    :param activityId:
    :return:
    """
    try:
        url = f'{JD_API_HOST}&t={int(time.time())}&loginType=2&functionId=interact_center_shopSign_getSignRecord&body=' + '{"token":"' + f'{token}","venderId":{venderId},"activityId":{activityId},"type":2' + '}&jsonp=jsonp1006'
        headers = {
            "accept": "application/json",
            "accept-encoding": "gzip, deflate, br",
            "accept-language": "zh-CN,zh;q=0.9",
            "cookie": cookie,
            "referer": "https://h5.m.jd.com/",
            "User-Agent": get_user_agent()
        }
        # 店铺获取签到
        pq_data = requests.get(url, headers=headers)
        # 筛选所有非200问题
        if pq_data.status_code != 200:
            return []
        days = re.findall('"days":(\d+)', pq_data.text)[0]
        print(f'店铺 {token} 已经签到 {days} 天')
        return [200]
    except Exception as e:
        print(f'店铺 {token} 获取签到信息异常: ', e)
        return []


if __name__ == '__main__':
    filename = 'pqdtk.json'
    if os.path.exists(filename) is False:
        print('没有检测到同目录下有pqdtk.json存在')
        sys.exit(3)
    with open(filename, mode='r', encoding='utf-8') as f:
        js = json.load(f)
    for ck in getCk:
        for token in js.keys():
            res = signCollectGift(ck, str(token), js[token]['venderId'], js[token]['activityId'])
            # 结束本次循环
            if res and res[0] == -1:
                break
    for ck in getCk:
        for token in js.keys():
            taskUrl(ck, token, js[token]['venderId'], js[token]['activityId'])
