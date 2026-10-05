// Z-ALGORITHM
export function zAlgorithm(text, pattern) {
  if (!text || !pattern) {
    return {
      occurrences: [],
      zArray: [],
      combined: "",
      comparisons: 0,
      time: 0
    };
  }

  const combined = pattern + "$" + text;
  const n = combined.length;
  const z = new Array(n).fill(0);

  let left = 0;
  let right = 0;
  let comparisons = 0;

  const start = performance.now();

  for (let i = 1; i < n; i++) {
    if (i <= right) {
      z[i] = Math.min(right - i + 1, z[i - left]);
    }

    while (
      i + z[i] < n &&
      combined[z[i]] === combined[i + z[i]]
    ) {
      comparisons++;
      z[i]++;
    }

    if (i + z[i] < n) {
      comparisons++;
    }

    if (i + z[i] - 1 > right) {
      left = i;
      right = i + z[i] - 1;
    }
  }

  const end = performance.now();

  const occurrences = [];

  for (let i = pattern.length + 1; i < n; i++) {
    if (z[i] === pattern.length) {
      occurrences.push(i - pattern.length - 1);
    }
  }

  return {
    occurrences,
    zArray: z,
    combined,
    comparisons,
    time: end - start
  };
}


// NAIVE STRING MATCHING
export function naiveSearch(text, pattern) {
  const occurrences = [];

  if (!text || !pattern) {
    return {
      occurrences: [],
      comparisons: 0,
      time: 0
    };
  }

  let comparisons = 0;

  const start = performance.now();

  for (let i = 0; i <= text.length - pattern.length; i++) {
    let j = 0;

    while (j < pattern.length) {
      comparisons++;

      if (text[i + j] !== pattern[j]) {
        break;
      }

      j++;
    }

    if (j === pattern.length) {
      occurrences.push(i);
    }
  }

  const end = performance.now();

  return {
    occurrences,
    comparisons,
    time: end - start
  };
}