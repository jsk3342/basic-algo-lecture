function solution(arr, N) {
    for (let i = 0; i <= N; i++) {
        for (let j = i + 1; j <= N; j++) {
            if (arr[i] + arr[j] === 100) {
                return 1;
            }
        }
    }
    return 0;
}
