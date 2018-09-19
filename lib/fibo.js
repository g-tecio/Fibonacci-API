class Fibonacci {

    static fiboSeries(num_deseados) {
        let result = {
            serie: 'Fibonacci',
            length: num_deseados
        };
        if (num_deseados == 0) {
            return 0;
        } else if (num_deseados == 1) {
            return 1;
        } else {
            var arr = [1, 1];
            for (let i = 1; i < num_deseados - 1; i++) {
                arr.push(arr[i] + arr[i - 1]);
            }
            console.log(arr);
            result.numbers = arr;
            return result;
        }
    }
    
    static getUrlNum(str) {
        let num = "";
        let first_num = false;
    
        for (let i = 0; i < str.length; i++) {
            let ch = str.charAt(i).toString();
    
            if (ch === "/" && first_num) {
                console.log("entre al break");
                break;
            } else if (ch.match(/\d/)) {
                num += ch;
                first_num = true;
            }
        }
        return parseInt(num);
    }
}

module.exports = Fibonacci;


