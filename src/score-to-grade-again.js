function scoreToGrade(score) {
  var scoreLevel = [0, 60, 70, 80, 90, 100];
  var gradeLevel = ['D', 'C', 'B', 'A', 'S'];

  for (var i = 0; i < scoreLevel.length; i++) {
    if(score >= 0 && score < scoreLevel[i]) {
      return gradeLevel[i - 1];
    }
  }
  if (score >= 100 || score < 0) {
    throw new TypeError('it is not a right score');
  } else {
    throw new TypeError('please input number!');
  }
}
