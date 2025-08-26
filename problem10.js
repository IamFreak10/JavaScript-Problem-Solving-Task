// Problem 10: PingPong Challenge
function pingPong() {
  let str = '';
  for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      str += 'PingPong,';
    } else if (i % 3 == 0) {
      str += 'Ping,';
    } else if (i % 5 == 0) {
      str += 'Pong,';
    } else {
      str += i+','
    }
  }
  
}
pingPong();
// 1,2,Ping,4,Pong,Ping,7,8,Ping,Pong,11,Ping,13,14,PingPong,16,17,Ping,19,Pong,
