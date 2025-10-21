import Link from "next/link";
import css from "./Header.module.css"
import TagsMenu from "../TagsMenu/TagsMenu";


const Header = async () => {

    return (
        <header className={css.header}>
            <Link
                href="/"
                aria-label="Home"
                className={css.headerLink}>
                NoteHub
            </Link>
            <nav aria-label="Main Navigation">
                <ul className={css.navigation}>
                    <li className={css.navigationItem}>
                        <Link
                            href="/"
                            className={css.navigationLink}>
                            Home
                        </Link>
                    </li>
                    <TagsMenu/>
                </ul>
            </nav>
        </header>
    )
}

export default Header;