import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Country.css';

const Country = () => {
  let timer = null;
  const [data, setData] = useState([]);
  const [actualData, setActualData] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios('https://restcountries.com/v3.1/all');
      setData(res.data);
      setActualData(res.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  const handleChange = (val) => {
    let newData = data.filter((item) => item.name.common.includes(val));
    if (newData.length > 0) {
      setActualData([...newData]);
    } else {
      setActualData([]);
    }
  };

  const debounceChange = (fn, delay) => {
    if (timer) {
      clearTimeout(timer);
    }
    return (args) => {
      timer = setTimeout(() => {
        fn(args);
      }, delay);
    };
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="header">
        <input
          type="text"
          placeholder="Search for countries..."
          name="search"
          onChange={debounceChange((e) => {
            handleChange(e.target.value);
          }, 2000)}
        />
      </div>
      {actualData.map((item, idx) => (
        <div key={`${item.name.common}_${idx}`} className="countryCard">
          <img
            src={item.flags.png}
            alt={item.flags.alt ? item.flags.alt : item.name.common}
            className="countryFlag"
          />
          <p className="countryName">{item.name.common}</p>
        </div>
      ))}
    </div>
  );
};

export default Country;
