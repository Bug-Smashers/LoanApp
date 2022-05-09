function Score(user) {
  var detail = {
    name: user.name,
    CTC: user.CTC,
    loan: user.loan,
    paymentHistory: user.paymentHistory,
  };

  return Math.floor(Math.random() * (700 - 200 + 1) + 200);
}

export { Score };
