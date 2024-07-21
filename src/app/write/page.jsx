import Image from "next/image";
import styles from "./contact.module.css";
import UserPostForm from "@/components/userpostform/userpostfrom";
import { auth } from "@/lib/auth";

export const metadata = {
    title: "New Post",
    description: "User add New Blog",
};

const UserWritePage = async () => {
    const session = await auth();

    // Check if session and session.user are defined
    const userId = session?.user?.id;

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/write.png" alt="" fill className={styles.img} />
            </div>
            <div className={styles.formContainer}>
                {userId ? (
                    <UserPostForm userId={userId} />
                ) : (
                    <p>Please log in to create a post.</p>
                )}
            </div>
        </div>
    );
};

export default UserWritePage;
