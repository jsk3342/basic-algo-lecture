function solution(N, trees) {
    var answer = 0;
    var xCount = 1;
    var yCount = 1;
    const sortXArr = trees.sort((a,b) => a[0]-b[0])
    sortXArr
    let tmp;
    for(let i = 1; i < sortXArr.length; i++) {
        tmp = sortXArr[i-1][1]
        console.log(tmp)
        console.log(sortXArr[i][1])
        if(tmp > sortXArr[i][1]) {
            xCount++
        }
}
        console.log(xCount)
    const sortYArr = trees.sort((a,b) => a[1]-b[1])
    sortYArr
    for(let i = 1; i < sortYArr.length; i++) {
        tmp = sortYArr[i-1][0]
        console.log(tmp)
        console.log(sortYArr[i][0])
        if(tmp > sortYArr[i][0]) {
            yCount++
        }
}
    answer = Math.min(xCount, yCount)
    return xCount
}


solution(5, [[4,3],[3,1],[2,2],[1,4]])

