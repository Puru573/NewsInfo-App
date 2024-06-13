import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import loading from './loading.gif';

function News({ apiKey, pageSize, category, country }) {
    const [articles, setArticles] = useState([]);
    const [spinner, setSpinner] = useState(false);
    const [totaResults, settotalResults] = useState(0);
    const[page,setPage]=useState(1)

    const handlePrevious = async () => {
        if (page >= 1) {
            const prevPage=page-1;
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${prevPage}&pageSize=${pageSize}`;
            let getUrl = await fetch(url);
            let result = await getUrl.json();
            setSpinner(true);
            setArticles(result.articles);
            setPage(prevPage);
        }
    }

    const handleNext = async () => {
        let totalPages = Math.ceil(totaResults / pageSize);
        if (totalPages > page) {
          const nextPage=page+1;
            let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${nextPage}&pageSize=${pageSize}`;
            let getUrl = await fetch(url);
            let result = await getUrl.json();
            console.log("resultLength", result.articles.length);
    
            setSpinner(true);
            setArticles(result.articles);
            setPage(nextPage);
        }

    }

    const fetchData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}`;
        let getUrl = await fetch(url);
        let result = await getUrl.json();
        setArticles(result.articles);
        settotalResults(result.totalResults);
        setSpinner(true);
    }

    useEffect(() => {
        fetchData();
        document.title= `${captitalize(category)} - NewsMonkey`
    }, [])
    const captitalize=(category)=>{
        let capitalize=category.charAt(0).toUpperCase() + category.slice(1);
        return capitalize;
    }

    return (
        <div>
            {
                <h1 className="text-center mt-5">NewsMonkey - Top {captitalize(category)}  HeadLines</h1>
            }

            {
                !spinner ? (
                    <div className="text-center">
                        <img className="my-5" src={loading} alt="loading" />
                    </div>
                )
                    :
                    (
                        <div className='container mt-5'>
                            <div className='row box-card'>
                                {
                                    articles.map((item, index) => (
                                        <div key={index} className='col-md-4'>
                                            <NewsItem
                                                title={item.title}
                                                description={item.description}
                                                image={item.urlToImage}
                                                readMore={item.url}
                                                author={item.author}
                                                publishedAt={item.publishedAt}
                                                source={item.source.name}
                                            />
                                        </div>
                                    ))}
                            </div>
                            <div className="btnNavigation">

                                <button type="button" className="btn btn-dark" onClick={handlePrevious}>Previous</button>
                                <button type="button" className="btn btn-dark" onClick={handleNext}>Next</button>
                            </div>


                        </div>
                    )
            }

        </div>
    )
}

export default News
