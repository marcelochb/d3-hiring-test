import { useState, useEffect, useCallback } from "react";
import { TypeCountryData } from "../types";
import api from "../services/api";

// import { Container } from './styles';

export const useFetchDataApi = () => {
  const [countriesOfApi, setCountriesOfApi] = useState<TypeCountryData[]>([]);
  const [countriesOfLocalToFilter, setCountriesOfLocalToFilter] = useState<
    TypeCountryData[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const searchCountriesByName = useCallback(
    (valueFromInputSearch: string) => {
      const resultOfSearchCountriesByName = countriesOfApi.filter((country) =>
        country.name.toLowerCase().includes(valueFromInputSearch.toLowerCase())
      );
      setCountriesOfLocalToFilter(resultOfSearchCountriesByName);
    },
    [countriesOfApi]
  );

  useEffect(() => {
    const loadCountriesFromApi = async () => {
      try {
        const responseOfApi = await api.get("all");
        const countriesOfApiTyped: TypeCountryData[] = responseOfApi.data;
        setCountriesOfApi(countriesOfApiTyped);
        setCountriesOfLocalToFilter(countriesOfApiTyped);
        setIsLoading(false);
      } catch (err) {
        setError("Tivemos problemas, tente mais tarde!");
      }
    };
    loadCountriesFromApi();
  }, []);
  return {
    getFetchDataApi: {
      countries: countriesOfLocalToFilter,
      isLoading,
      error,
    },
    handleFetchDataApi: {
      searchCountriesByName,
    },
  };
};
