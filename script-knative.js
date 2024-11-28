import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 500},
    { duration: '30s', target: 0},
  ]
};



export default function() {
  const ipaddress = "192.168.1.7:30854"
  const params = {
    headers: {
      'Host': 'hello.default.example.com'
    }
  }

  http.get('http://'+ipaddress, params);
  sleep(1);
}
