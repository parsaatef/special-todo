/**
 * @ToastContainer Component
 */
import * as React from 'react';
import { ToastContainer as ToastContainerBase } from 'react-toastify';
import { ToastContainerProps } from 'react-toastify/dist/types';
import 'react-toastify/dist/ReactToastify.css';

const ToastContainer: React.FC<ToastContainerProps> = (props) => (
    <section className="app-toast-wrapper">
        <ToastContainerBase {...props} />
    </section>
);

export default ToastContainer;