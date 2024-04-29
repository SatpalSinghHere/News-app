import React from 'react'

export default function NewsItem(props) {
    let title = props.title;
    let desc = props.desc;
    let imageUrl = props.imageUrl;
    let newsUrl = props.newsUrl;
    return (
        
        <div className="container">
            <div className="card" style={{width : '18rem'}}>
                <img src={imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                        <a href={newsUrl} target="_blank" className="btn btn-primary">Read more</a>
                    </div>
            </div>            
        </div>
    )
}
