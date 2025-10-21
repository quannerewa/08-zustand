import axios from "axios";
import type { Note, NoteTag } from "@/types/note";


axios.defaults.baseURL = "https://notehub-public.goit.study/api";


export interface FetchNotesResponse {
    notes: Note[];
    totalPages: number;
}

export interface NewNote {
    title: string;
    content: string;
    tag: NoteTag;
}

export const fetchNotes = async (page: number, search: string, tag?: string): Promise<FetchNotesResponse> => {
    const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

    const params: Record<string, string | number> = { page };

    if (search.trim()) {
        params.search = search.trim();
    }

    try {
    const res = await axios.get<FetchNotesResponse>("/notes", {
        params: {
            page, 
            ...(search.trim() && { search: search.trim() }),
            ...(tag && tag.toLowerCase() !== "all" && {tag}),
        },
        headers: { Authorization: `Bearer ${myKey}` },
    });

    return res.data;
    } catch (error) {

        throw error
    }
}

export const createNote = async (newNote: NewNote): Promise<Note> => {
    const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

    try {
    const res = await axios.post<Note>("/notes", newNote, {
        headers: { Authorization: `Bearer ${myKey}` },
    });

    return res.data;
    } catch (error) {

        throw error;
    }
}


export const deleteNote = async (noteId: string): Promise<Note> => {
    const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

    try {
    const res = await axios.delete<Note>(`/notes/${noteId}`, {
        headers: { Authorization: `Bearer ${myKey}` },
    });

    return res.data;
    } catch (error) {

        throw error;
    }    
}

export const fetchNoteById = async (id: string): Promise<Note> => {
    const myKey = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

    try {
    const res = await axios.get<Note>(`/notes/${id}`, {
        headers: { Authorization: `Bearer ${myKey}` },
    });

    return res.data;
    } catch (error) {
    
        throw error;
    }
}