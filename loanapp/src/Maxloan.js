function maxloan(score) {
  if (score >= 300 && score <= 400) {
    return 100000;
  } else if (score > 400 && score <= 500) {
    return 200000;
  } else if (score > 500 && score <= 600) {
    return 300000;
  } else {
    return 400000;
  }
}
export { maxloan };
