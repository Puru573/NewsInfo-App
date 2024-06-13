import React from 'react'
import { Link } from 'react-router-dom'

function NewsItem({ title, description, image, readMore, author, publishedAt, source }) {
    return (
        <div>
            <div className="card">

                <div className='source'>
                    <span className='bg-danger text-white'>{source}</span>
                </div>
                <img src={!image? "https://www.hindustantimes.com/ht-img/img/2023/05/31/550x309/WhatsApp_Image_2021-09-18_at_09.42.18_1631944439782_1685498396418.jpeg": image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className='card-text'><small>{`by ${author ? author : "unknown"} on ${new Date(publishedAt).toUTCString()}`}</small></p>
                    <Link to={readMore} target="_blank" className="btn btn-secondary">Read more</Link>
                </div>


            </div>
        </div>
    )
}

export default NewsItem
