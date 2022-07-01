import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Search() {
  const [input, setInput] = useState('');
  const [options, setOptions] = useState([]);
  const KEY = `O1W6gyHOMcvAfFFPGxQOGR2mBzWUAH2P`;
  // const searchUrl = https://{baseURL}/search/{versionNumber}/autocomplete/{query}.{ext}?key={Your_API_Key}&language={language}&limit={limit}&lat={lat}&lon={lon}&radius={radius}&countrySet={countrySet}&resultSet={resultSet}
  // curl 'https://{baseURL}/search/{versionNumber}/search/{query}.{ext}?key={Your_API_Key}&typeahead={typeahead}&limit={limit}&ofs={ofs}&countrySet={countrySet}&lat={lat}&lon={lon}&radius={radius}&topLeft={topLeft}&btmRight={btmRight}&language={language}&idxSet={idxSet}&extendedPostalCodesFor={extendedPostalCodesFor}&minFuzzyLevel={minFuzzyLevel}&maxFuzzyLevel={maxFuzzyLevel}&categorySet={categorySet}&brandSet={brandSet}&connectorSet={connectorSet}&fuelSet={fuelSet}&view={view}&openingHours={openingHours}&timeZone={timeZone}&mapcodes={mapcodes}&relatedPois={relatedPois}&minPowerKW={minPowerKW}&maxPowerKW={maxPowerKW}&entityTypeSet={entityTypeSet}'
  //curl 'https://{baseURL}/search/{versionNumber}/categorySearch/{query}.{ext}?key={Your_API_Key}&typeahead={typeahead}&limit={limit}&ofs={ofs}&lat={lat}&lon={lon}&countrySet={countrySet}&radius={radius}&topLeft={topLeft}&btmRight={btmRight}&language={language}&extendedPostalCodesFor={extendedPostalCodesFor}&categorySet={categorySet}&brandSet={brandSet}&connectorSet={connectorSet}&fuelSet={fuelSet}&view={view}&openingHours={openingHours}&timeZone={timeZone}&mapcodes={mapcodes}&relatedPois={relatedPois}&minPowerKW={minPowerKW}&maxPowerKW={maxPowerKW}'
  const URL = `https://api.tomtom.com/search/2/search/${input}.json?categorySet=7315&key=${KEY}`;

  var config = {
    method: 'get',
    url: URL,
    headers: {},
  };

  function HandleChange(e) {
    setInput(e.target.value);
    console.log(input);
  }

  useEffect(() => {
    axios(config)
      .then((res) => {
        // const s=JSON.stringify(res.data);
        console.log(res);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [input]);

  return (
    <>
      <input
        placeholder="Search..."
        onChange={
          HandleChange
          //(e) => setInput(e.target.value)
        }
      />
    </>
  );
}
