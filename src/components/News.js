import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'

export default function News() {
    const [articlesList, setArticlesList] = useState([]);
    var url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=48b7601c08554bebbac18a01b44806f4';


    var req = new Request(url);

    const fetchNews = () => {
        fetch(req)
            .then(function (response) {
                response.json().then(function (data) {
                    setArticlesList(data.articles);
                    console.log(data.articles);
                })
                    .catch(function (err) {
                        console.log(err);
                    })
            })
    }

    useEffect(() => {
        fetchNews();
    }, [])

    return (

        <div className="container my-3">
            <div className="row my-2">

                {
                    articlesList && articlesList.map((element, index) => {
                        if (element.description.length > 110) {
                            element.description = element.description.slice(0, 110) + "...";
                        }
                        if (element.title.length > 45) {
                            element.title = element.title.slice(0, 45) + "...";
                        }

                        return <div className="col-md" key={element.url}>
                            <NewsItem key={index} title={element.title} desc={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })
                }


            </div>
        </div>


    )
}
