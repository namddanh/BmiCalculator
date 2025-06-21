class ResultsView {
  _parentEl = document.querySelector('.modal-result');

  render(bmi, category) {
    this._parentEl.innerHTML = `
      <div style="font-family: 'Fustat', sans-serif">Your bmi is <strong>${bmi}</strong></div>
      <div style="font-family: 'Fustat', sans-serif">Category: <strong>You are considered ${category}</strong></div>
    `;
  }

  clear() {
    this._parentEl.innerHTML = '';
  }
}

export default new ResultsView();
