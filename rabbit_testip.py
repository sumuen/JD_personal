try:
    res = requests.get("http://api.madrabbit.cf/api/ips", timeout=3)
    print(res.text)
    print("Host:\tapi.madrabbit.cf\t yes")
except:
    print("Host:\tapi.madrabbit.cf\t no")

try:
    res = requests.get("http://62.204.54.137:1804/api/ips", timeout=3)
    print(res.text)
    print("Host:\t62.204.54.137:1804\t yes")
except Exception as e:
    print("Host:\t62.204.54.137:1804\t no")
