import React, { Component } from 'react';
import { render } from 'react-dom';

import { ComboBox } from './components/ComboBox';
import { ImageGallery } from './components/ImageGallery';

import './setup-mocks';
import './style.css';

const themes = ['folder1', 'folder2'];

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedTheme: 'folder1'
    };
  }

  async doFetch() {
    const data = await fetch('/api/folders/folder2')
    const files = await data.json();

    console.log('files', files)
  }

  onSelectTheme() {
    console.log('onSelectTheme');
  }

  setTheme(theme) {
    console.log('setTheme', theme);
  }

  render() {
    return (
      <div>
        <ComboBox title="Select theme (error)"
          themes={themes}
          setTheme={this.setTheme}
          onSelect={this.onSelectTheme} />
        <ImageGallery theme={this.state.selectedTheme}/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
