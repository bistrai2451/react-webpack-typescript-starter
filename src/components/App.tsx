import React from 'react';
import styles from './app.module.scss';

export interface AppProps {
    userName: string;
    lang: string;
}

export const App: React.FC<AppProps> = ({ userName, lang }: AppProps) => (
    <h1 className={styles.red}>
        Hi {userName}! Welcome to the {lang} Webpack starter project with React.
    </h1>
);