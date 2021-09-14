import ReactDOM from 'react-dom';
import PaletteModeProvider from './PaletteModeProvider';
import App from './App';

ReactDOM.render(<PaletteModeProvider><App /></PaletteModeProvider>, document.getElementById('root'));
