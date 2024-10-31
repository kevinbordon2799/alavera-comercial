import Head from "next/head";
import { LayoutProps } from "./types";

export default function Layout(props: LayoutProps) {
    return (
        <>
            <Head>
                <meta name="description" content={props.desc} />
                {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> */}

                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    // crossorigin
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
                    rel="stylesheet"
                />

                <link
                    href="https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Overpass:wght@400;700&display=swap"
                    rel="stylesheet"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
                    rel="stylesheet"
                />

                <title>{props.title}</title>
            </Head>

            <main className="the-main">{props.children}</main>
        </>
    );
}
