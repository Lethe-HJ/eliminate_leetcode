arrs = [
    [1, 2, 3, 4],
    [1, 2, 3, 4, 4],
    [1, 2, 2, 1, 1, 3]
];

let is_repeat = arr => {
    let count_obj = arr.reduce((prev, next) => {
        prev[next] = (prev[next] + 1) || 1;
        return prev;
    }, {});
    let count_arr = Object.values(count_obj);
    return new Set(count_arr).size == count_arr.length;

}
arrs.forEach(element => { console.log(is_repeat(element)); });


let is_repeat = arr => {
    let count_arr = Object.values(arr.reduce((prev, next) => { prev[next] = (prev[next] + 1) || 1; return prev; }, {})); return new Set(count_arr).size == count_arr.length;
}
