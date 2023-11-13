import React from 'react';
import styles from './App.module.css';
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import {Content} from "./components/Content";


function App() {
    return (
        <div className={styles.container}>
            <header><Header/></header>
            <main><Content/></main>
            <footer><Footer/></footer>
        </div>
    );
}

export default App;
