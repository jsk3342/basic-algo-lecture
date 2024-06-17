#include <bits/stdc++.h>
using namespace std;

int main(void) {
  int a,b,c, MX, sum;
  cin >> a >> b >> c;
  MX = a;
  sum = a+b+c;
  if (MX < b) MX = b;
  if (MX < c) MX = c;
  if (sum - MX < MX) cout << "NO";
  else cout << "YES";
}
