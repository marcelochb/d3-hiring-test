import React, { useEffect } from 'react';

import { useFetchDataApi } from '../../utils/hooks';
import { DetailCountry } from '../../containers';

export const DetailCountryRoute: React.FC = () => {
  const { getFetchDataApi, handleFetchDataApi: { searchCountryByNameFromApi } } = useFetchDataApi({ isEnableToFetchAllData: false })

  useEffect(() => {
    const loadUser = async () => {
      const { pathname } = window.location;
      const param = pathname.split("/")[1];
      await searchCountryByNameFromApi(param)
    };
    loadUser();
  }, [searchCountryByNameFromApi]);

  console.log(getFetchDataApi.country)

  return (
    getFetchDataApi.isLoading
      ? (<text>loading...</text>)
      : (

        <DetailCountry country={getFetchDataApi.country} />
      )

  );
}
