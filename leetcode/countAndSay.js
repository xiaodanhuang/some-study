var countAndSay = function (n) {
    let result = "1";
    if (n == 1) return result
    let str = ""
    for (i = 1; i < n; i++) {
        let current = result[0];
        let count = 0;
        for (let j = 0; j < result.length; j++) {
            if (result[j] == current) {
                count++
                if (result[j + 1] == undefined) {
                    str += count + current;
                }
            } else {
                str += count + current;
                if (result[j + 1] == undefined) {
                    str += 1 + result[j];
                }
                current = result[j]
                count = 1;

            }
        }
        result = str;
        str = ""

    }
    return result;

};
console.log(countAndSay(7))