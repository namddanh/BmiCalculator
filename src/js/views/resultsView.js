class ResultsView {
  _parentEl = document.querySelector('.modal-result');

  render(bmi, category) {
    this._parentEl.innerHTML = `
      <div>Your bmi is <strong>${bmi}</strong></div>
      <div>You are considered <strong>${category}</strong></div>
    `;

    // Add the show class after we insert content
    this._parentEl.classList.add('show');
  }

  clear() {
    this._parentEl.innerHTML = '';
    this._parentEl.classList.remove('show'); // hide it again
  }

  toggleResults() {}
}

export default new ResultsView();
