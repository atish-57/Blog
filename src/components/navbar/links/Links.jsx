"use client";
import Link from "next/link";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import { useState } from "react";
import Image from "next/image";
import { handleLogout } from "@/lib/action";
const Links = ({ session }) => {
    const links = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Contact",
            path: "/contact",
        },
        {
            title: "Blog",
            path: "/blog",
        },
    ];

    const [open, setOpen] = useState(false);


    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map(link => (
                    <NavLink item={link} key={link.path} />
                ))}
                {session?.user ? (
                    <>
                        {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                        <form action={handleLogout}>
                            <button className={styles.logout}>Logout</button>
                        </form>
                    </>
                ) : (
                    <NavLink item={{ title: "Login", path: "/login" }} />
                )}
            </div>

            <Image style={styles.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen(prev => !prev)} className={styles.menuButton} />

            {open && (
                <div className={styles.mobileLinks}>
                    {links.map(link => (
                        <NavLink item={link} key={link.path} />
                    ))}
                    {session?.user ? (
                        <>
                            {session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
                            <form action={handleLogout}>
                                <button className={styles.logout}>Logout</button>
                            </form>
                        </>
                    ) : (
                        <NavLink item={{ title: "Login", path: "/login" }} />
                    )}
                </div>
            )}
        </div>
    );
};

export default Links;
