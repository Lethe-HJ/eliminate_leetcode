let nums1 = [1, 2, 3, 4, 5, 1, 2, 3, 1, 2, 3]
let map1 = new Map();
nums1.forEach(element => {
    map1.set(element, map1.get(element) + 1 || 1);
})
console.log(map1);
console.log(...map1.keys())
for (let item of map1.keys()) {
    console.log(item);
}