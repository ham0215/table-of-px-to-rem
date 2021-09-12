import ReactDOM from 'react-dom';
import ColorModeProvider from './ColorModePrivider';
import App from './App';

ReactDOM.render(<ColorModeProvider><App /></ColorModeProvider>, document.getElementById('root'));
