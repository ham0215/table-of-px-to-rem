import ReactDOM from 'react-dom';
import PaletteModeProvider from './providers/PaletteModeProvider';
import App from './App';

ReactDOM.render(
  <PaletteModeProvider>
    <App />
  </PaletteModeProvider>,
  document.getElementById('root')
);
