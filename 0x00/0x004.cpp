int func3(int N) {
    int i = 1;
    int result = 1;
    while ((1 << i) < N) {
        if ((1 << i) < N) {
            result << i;
            i++;
        }
    }
    return result;
}
