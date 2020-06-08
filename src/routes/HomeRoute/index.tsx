import React from 'react';
import { Home } from '../../containers';
import { useFetchDataApi } from '../../utils/hooks';


export const HomeRoute: React.FC = () => {
  const { getFetchDataApi, handleFetchDataApi } = useFetchDataApi({ isEnableToFetchAllData: true });
  return (
    getFetchDataApi.isLoading
      ? (<text>loading...</text>)
      : <Home
        countries={getFetchDataApi.countries}
        searchCountriesByName={handleFetchDataApi.searchCountriesByName}
        searchCountriesByRegion={handleFetchDataApi.searchCountriesByRegion}
      />
  );
}
