import requests
import time

url = "http://192.168.1.2:30775"
headers = {'Host': 'hello.default.example.com'}

while True:
    response = requests.get(url, headers=headers)
    print(response.text)
    time.sleep(0.01666666666)
