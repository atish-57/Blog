import React from 'react'
import styles from "./blog.module.css"
import PostCard from '@/components/postCard/postacard'
import { getPosts } from '@/lib/data'



const Blogpage = async () => {
  const posts = await getPosts(); 

  return (
    <>
      <div className={styles.container}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </>
  )
}

export default Blogpage
