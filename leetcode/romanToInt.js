//13 romanToInt
function romanToInt(s) {
    let map = new Map().set("I", 1).set("V", 5).set("X", 10).set("L", 50).set("C", 100).set("D", 500).set("M", 1000)
    let arr = s.split('').reverse();
    let result = 0;
    arr.forEach((item, key) => {
            if (map.get(arr[key - 1 > 0 ? key - 1 : 0]) > map.get(item)) {
                result -= map.get(item)
            } else {
                result += map.get(item);
            }
        }
    )
    return result;
}

console.log(romanToInt("IV"))