import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Context/ContextTheme';
import ApiContext  from './Context/ContextApi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ApiContext>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ApiContext>
    </BrowserRouter>
);


