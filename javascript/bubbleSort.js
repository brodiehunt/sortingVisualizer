function bubbleSort() {
  time = 0;
  steps = 0; 
  for (let i = 0; i < arraySize; i++) {
  
    for (var j = i + 1, temp; j < arraySize; j++) {
      
      if (divsHeight[i] > divsHeight[j]) {
        temp = divsHeight[i];
        divsHeight[i] = divsHeight[j];
        divsHeight[j] = temp;
        transformDiv(divsArray[i], divsHeight[i]);
        transformDiv(divsArray[j], divsHeight[j]);
      }
      
      steps++
    }
    steps++
  }
  console.log(steps);
}