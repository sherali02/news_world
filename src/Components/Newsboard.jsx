import React, { useEffect, useState } from 'react';
import Newsitem from './Newsitem';
import defaultArticles from './defaultarticles.json';

const Newsboard = ({ category,api }) => {
    const [articles, setArticles] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            // console.log(api)
            const url = `https://newsdata.io/api/1/latest?apikey=${api}&category=${category}&country=in&language=en`;
            try {
                const response = await fetch(url);
                const data = await response.json();

                if (response.ok) {
                    setArticles(data.results);
                } else {
                    setArticles(defaultArticles);
                    throw new Error(data.results.message || 'Unknown error occurred');
                }
            } catch (error) {
                setArticles(defaultArticles);
                setError(error.message);
                // console.error('Error fetching the news:', error);
            }
        };

        fetchData();
    }, [category]);

    return (
        <div>
            <h2 className="text-center" style={{ marginTop: '80px' }}>
                Latest <span className="badge bg-danger">News</span>
            </h2>

            <div className='text-center'>
                {error && <p>{error} Here are some default news to explore..</p>}
                {articles.map((news, index) => (
                    <Newsitem
                        key={index}
                        title={news.title}
                        desc={news.description}
                        src={news.image_url}
                        url={news.link}
                    />
                ))}
            </div>

        </div>
    );
};

export default Newsboard;
