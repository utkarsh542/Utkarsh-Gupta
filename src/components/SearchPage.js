import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchPage.css';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [ads, setAds] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      axios
        .post('/api/search', { searchTerm })
        .then((res) => setAds(res.data))
        .catch((err) => console.error(err));
    } else {
      setAds([]);
    }
  }, [searchTerm]);

  return (
    <div className="search-page">
      <input
        className="search-bar"
        type="text"
        placeholder="Search ads"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid">
        {ads.map((ad) => (
          <div className="ad-item" key={ad._id}>
            <img src={ad.imageUrl} alt={ad.headline} />
            <h3>{ad.headline}</h3>
            <p>{ad.description}</p>
            <p>
              <a href={ad.company.url}>{ad.company.name}</a>
            </p>
            <a href={ad.CTA}>{ad.CTA}</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
