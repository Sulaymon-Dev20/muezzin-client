import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from "./pages/Router";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Suspense fallback="loading">
            <App/>
        </Suspense>
    </React.StrictMode>
);

