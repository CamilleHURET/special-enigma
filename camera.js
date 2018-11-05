let video = createCapture(VIDEO);
let classifier = ml5.imageClassifier('MobileNet', video);


classifier.predict(gotResult);

function gotResult(results) {
  console.log(results);
}

const classifier = features.classification();
classifier.addImage(employee1Image1, 'employee1');classifier.addImage(employee1Image1, 'employee1');
classifier.addImage(employee1Image2, 'employee1');classifier.addImage(employee1Image2, 'employee1');
classifier.addImage(employee1Image3, 'employee1');classifier.addImage(employee1Image3, 'employee1');
classifier.addImage(employee2Image1, ‘employee2’);classifier.addImage(employee2Image1, ‘employee2’);
classifier.addImage(employee2Image2, ‘employee2’);classifier.addImage(employee2Image2, ‘employee2’);
view rawclassifier.train();

