import View from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; //parcel 2

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage =
    'There is no Results for that query. Kindly try another query!';
  _successMessage = '';

  _generateMarkup() {
    console.log(this._data);
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
