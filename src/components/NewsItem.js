import React from 'react'

export default function NewsItem(props) {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <>
            <div className="card my-2">
                <img src={!imageUrl ? "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202309/ezgif-sixteen_nine_46.jpg" : imageUrl} className="card-img-top" alt="..." style={{ height: '200px' }} />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className='card-text'><small className="text-muted">By {author} on {date}</small></p>
                    <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-primary btn-sm">Read More</a>
                    <div className="source mt-2">
                        <h5><div className="badge bg-success mt-2">Source : {source}</div></h5>
                    </div>
                </div>
            </div>
        </>
    )
}