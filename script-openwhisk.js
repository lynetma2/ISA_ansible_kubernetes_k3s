import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  insecureSkipTLSVerify: true,
  stages: [
    { duration: '10s', target: 50},
    { duration: '10s', target: 0},
  ]
};

export default function() {
  const url = "https://192.168.1.7:31001/api/v1/web/guest/demo/hello"
  http.get(url);
  sleep(1);
}
