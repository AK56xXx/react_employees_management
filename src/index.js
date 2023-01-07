import React, { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import AppRouter from './router/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);



root.render(
        <StrictMode>

                <AppRouter />

        </StrictMode>,

);