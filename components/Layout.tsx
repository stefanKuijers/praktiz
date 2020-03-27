import Head from 'next/head';
import { ReactNode } from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './Header';
import themeJson from './theme.json';

interface Props {
    children: ReactNode;
}

const theme = createMuiTheme(themeJson);

const Layout: React.FunctionComponent<Props> = (props: Props) => (
    <>
        <Head>
            <title>Praktiz</title>
        </Head>
        <CssBaseline />

        <main>
            <ThemeProvider theme={theme}>
                <Header />
                <Container fixed>{props.children}</Container>
            </ThemeProvider>
        </main>

        <style jsx global>{`
            @font-face {
                font-family: 'Roboto';
                src: url('/fonts/Roboto-Regular.ttf');
            }
        `}</style>
    </>
);

export default Layout;
