function solution(s) {
    var answer = 0;
    var stack = [];
    s = s.split('');
    stack.push(s.shift());
    
    const len = s.length;
    for(let i = 0; i < len ; i++) {
      const value = stack[stack.length -1];
      if (value && value == s[i]) {
        stack.pop();
      } else {
        stack.push(s[i]);
      }
    }
  answer = stack.length === 0 ? 1: 0;

    return answer;
}

const a = "baabaa"
solution(a);