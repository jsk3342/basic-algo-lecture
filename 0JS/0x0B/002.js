function hanoi(n, from, to, via) {
  if (n === 1) {
    console.log(`Move disk 1 from ${from} to ${to}`);
  } else {
    // Move n-1 disks from "from" to "via" using "to" as a temporary peg
    hanoi(n - 1, from, via, to);

    // Move the nth disk from "from" to "to"
    console.log(`Move disk ${n} from ${from} to ${to}`);

    // Move the n-1 disks from "via" to "to" using "from" as a temporary peg
    hanoi(n - 1, via, to, from);
  }
}

// Example usage:
const numberOfDisks = 3;
hanoi(numberOfDisks, "A", "C", "B");
