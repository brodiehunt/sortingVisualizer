function selectionSort() {
  time = 0;
  steps = 0;
  console.log("starting");
  for (let i = 0; i < arraySize; i++) {
    let min = i;
    for (let j = i + 1; j < arraySize; j++) {
      if (divsHeight[j] < divsHeight[min]) {
        min = j;
      }
      steps++ 
    }
    if (min !== i) {
      let temp = divsHeight[i];
      divsHeight[i] = divsHeight[min];
      divsHeight[min] = temp;
      transformDiv(divsArray[i], divsHeight[i]);
      transformDiv(divsArray[min], divsHeight[min]); 
    }
    steps++
  }
  console.log(steps)
}