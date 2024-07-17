import React from 'react';
import image from '../assets/news.jpg';

const Newsitem = ({ title, desc, src, url }) => {
    const handleError = (e) => {
        e.target.src = image;
    };

    return (
        <div className="card bg-dark text-light mb-3 d-inline-block my-2 mx-2 px-2 py-2" style={{ maxWidth: "345px" }}>
            <img
                src={src ? src : image}
                style={{ height: '200px', width: '325px' }}
                className="card-img-top"
                alt={title ? title : 'Default image'}
                onError={handleError}
            />
            <div className="card-body">
                <h5 className="card-title">{title ? title.slice(0, 55) : 'No Title Available'}...</h5>
                <p className="card-text">{desc ? desc.slice(0, 90) : "No Description Available_____ Click on READ MORE button to get more details"}......</p>
                <a href={url}  target="_blank" className="btn btn-danger">Read More</a>
            </div>
        </div>
    );
}

export default Newsitem;
