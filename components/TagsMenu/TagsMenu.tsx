"use client"

import { useState } from "react";
import css from "./TagsMenu.module.css"
import { NoteTag } from "@/types/note";
import Link from "next/link";

const tags: NoteTag[] = ["Todo", "Work", "Personal", "Meeting", "Shopping"];

const TagsMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
 

    return (
        <div className={css.menuContainer}>
            <button onClick={() => setIsOpen(!isOpen)} className={css.menuButton}>
                Notes ▾
            </button>
            {isOpen && (
                <ul className={css.menuList}>
                    <li className={css.menuItem}>
                        <Link
                            href={`/notes/filter/all`}
                            className={css.menuLink}
                            onClick={() => setIsOpen(!isOpen)}>
                            All notes
                        </Link>
                    </li>

                    {tags.map(tag => (
                        <li key={tag} className={css.menuItem}>
                            <Link
                                href={`/notes/filter/${tag}`}
                                className={css.menuLink}
                                onClick={() => setIsOpen(!isOpen)}>
                            {tag}
                            </Link>
                        </li>
                   ))} 
                </ul>
            )}
            
        </div>
    )
}

export default TagsMenu;