import React from 'react'
import "./header.css"
export default function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className='headerTitleSm'>Hi, chào cậu. Mình là Pen.</span>
        <div className="content">
        <h2 className='headerTitleLg'>Blog</h2>
        <h2 className='headerTitleLg'>Blog</h2>
        </div>
      </div>
      <img className='headerImg' src="
      https://cdn.nhathuoclongchau.com.vn/unsafe/https://cms-prod.s3-sgn09.fptcloud.com/Cover_post_14_3b1b41c29c.jpg" alt="" />
    </div>
  )
}
