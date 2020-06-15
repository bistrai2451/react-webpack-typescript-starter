import * as React from 'react';

export interface AppProps {
    userName: string;
    lang: string;
}

export const App: React.FC<AppProps> = ({ userName, lang }: AppProps) => (
    <h1>
        Hi {userName}! Welcome to the {lang} Webpack starter project with React.
    </h1>
);