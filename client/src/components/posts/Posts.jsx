import React from 'react'
import './posts.css'
import Post from '../post/Post'
export default function Posts({posts}) {
  return (
    <div className='posts'>
      {posts.map((post)=><Post key={post.id} post={post}/>)}
    </div>
  )
}
