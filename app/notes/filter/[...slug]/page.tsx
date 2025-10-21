import {fetchNotes, FetchNotesResponse } from "@/lib/api"
import NotesClient from "./Notes.client"
import { Metadata } from "next";

interface NotesProps {
    params: Promise<{ slug?: string[] }>;
}

export const generateMetadata = async ({params}: NotesProps): Promise<Metadata> => {
    const { slug } = await params;
    const tag = slug?.[0] && slug[0].toLowerCase() !== "all" ? slug[0] : undefined;

    return {
        title: tag ? `Notes filtered by ${tag}` : "All notes",
        description: tag ? `Browse notes filtered by the ${tag} tag.`
            : "Browse all available notes without falters.",
        openGraph: {
            title: tag ? `Notes filtered by ${tag}` : "All notes",
            description: tag ? `Browse notes filtered by the ${tag} tag.`
                : "Browse all available notes without falters.",
            url: `https://07-routing-nextjs-blond.vercel.app/notes/filter/${tag}`,
            images: [
                {
                    url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                    width: 1200,
                    height: 630,
                    alt: tag,
                }
            ]
        }
    }

}

export default async function Notes({params}: NotesProps) {
    const { slug } = await params;
    const tag = slug?.[0] && slug[0].toLowerCase() !== "all" ? slug[0] : undefined;


    const initialPage = 1;
    const initialQuery = "";

    const initialData: FetchNotesResponse = await fetchNotes(initialPage, initialQuery, tag);


    return <NotesClient initialData={initialData} tag={tag}/>
}