import React, { useEffect, useState } from 'react';
import {
  CountryDivStyle,
  CountryDivWrapper,
  CountryHeader,
  CountryHeading,
  CountryImg,
  CountryInput
} from './CountryStyle';
import axios from 'axios';

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
    console.log(newData);
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
    <CountryDivWrapper>
      <CountryHeader>
        <CountryInput
          type="text"
          placeholder="Search for countries..."
          name="search"
          onChange={debounceChange((e) => {
            handleChange(e.target.value);
          }, 2000)}
        />
      </CountryHeader>
      {actualData.map((item, idx) => (
        <CountryDivStyle key={`${item.name.common}_${idx}`} className="countryCard">
          <CountryImg
            src={item.flags.png}
            alt={item.flags.alt ? item.flags.alt : item.name.common}
          />
          <CountryHeading>{item.name.common}</CountryHeading>
        </CountryDivStyle>
      ))}
    </CountryDivWrapper>
  );
};

export default Country;
