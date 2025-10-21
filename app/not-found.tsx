import { Metadata } from "next";
import css from "./page.module.css"

export const metadata: Metadata = {
    title: "Not Found",
    description: "Page not found",
    openGraph: {
        title: "Not Found",
        description: "Page not found",
        url: "https://07-routing-nextjs-blond.vercel.app/not-found",
        images: [
                {
                    url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Not Found",
                }
            ]
    }

}

const NotFound = () => {


    return (
        <>
            <h1 className={css.title}>404 - Page not found</h1>
            <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
        </>
    );
}

export default NotFound;