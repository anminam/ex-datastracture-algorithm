function solution(n, clockwise) {
    var answer = Array(n).fill(0);
    for(let i=0; i < n; i++ ){
        answer[i] = Array(n).fill(0);
    }
    
    const sLT = [0,0];
    const sRT = [0,n-1];
    const sRB = [n-1,n-1];
    const sLB = [n-1, 0];
    
    const sArr = [sLT, sRT, sRB, sLB];
    const ARROW_LIST = ["RIGHT","DOWN","LEFT","UP"];
    
    const startValue = 1;
    sArr.forEach((item, i ) => {
        // let endValue = 1;
        let evenOdd = n % 2 === 1
        const endValue = Math.ceil(n/2);
        const temp2D = sArr[i];
        
        
        let writeValue = 1;
        answer[temp2D[0]][temp2D[1]] = writeValue;
        debugger;
        for(let j=0; j < endValue; j++) {
            
            let arrowValue = ARROW_LIST[(i+j)%4];
            let count = 1;
            for (let k=1; k < n-1-j; k++) {
                switch(arrowValue) {
                    case 'RIGHT':
                        temp2D[1] += 1;
                        break;
                    case 'DOWN':
                        temp2D[0] += 1;
                        break;
                    case 'LEFT':
                        temp2D[1] -= 1;
                        break;
                    case 'UP':
                        temp2D[0] -= 1;
                        break;
                }
                writeValue++;
                answer[temp2D[0]][temp2D[1]] = writeValue;
            }
        }
    });
    console.log(answer);
    
    return answer;
}

solution(5, true)