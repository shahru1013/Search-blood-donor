import React from 'react'
import './news.css'
export default function News({title, source, link}) {
  return (
        <div class="news-card" onClick={()=>{
           window.open(link, "_blank")
        }}>
            <img src="https://picsum.photos/200" alt=""/>
            <p class="news-title">{title}</p>
            <p class="news-description">{source}</p>
        </div>
  )
}
