#include <bits/stdc++.h>
using namespace std;

int main(void) {
  int a,b,c, minNum;
  cin >> a >> b >> c;
  minNum = a;
  if (minNum > b) minNum = b;
  if (minNum > c) minNum = c;

  cout << minNum;
}
