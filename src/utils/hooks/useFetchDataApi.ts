import { useState, useEffect, useCallback } from "react";
import { TypeCountryData, TypeUseFetchDataApi } from "../types";
import api from "../services/api";

export const useFetchDataApi = ({
  isEnableToFetchAllData,
}: TypeUseFetchDataApi) => {
  const [allCountriesFromApi, setAllCountriesFromApi] = useState<
    TypeCountryData[]
  >([]);
  const [
    countriesFilteredOutByRegion,
    setCountriesFilteredOutByRegion,
  ] = useState<TypeCountryData[]>([]);

  const [
    countriesFilteredOutByNameToReturn,
    setCountriesFilteredOutByNameToReturn,
  ] = useState<TypeCountryData[]>([]);

  const [countryFromApi, setCountryFromApi] = useState<TypeCountryData>(
    {} as TypeCountryData
  );

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const searchCountriesByRegion = useCallback(
    (valueFromDropDownRegion: string) => {
      if (valueFromDropDownRegion === "Todos") {
        setCountriesFilteredOutByRegion(allCountriesFromApi);
        setCountriesFilteredOutByNameToReturn(allCountriesFromApi);
      } else {
        const resultOfSearchCountriesByName = allCountriesFromApi.filter(
          (country) =>
            country.region
              .toLowerCase()
              .includes(valueFromDropDownRegion.toLowerCase())
        );
        setCountriesFilteredOutByRegion(resultOfSearchCountriesByName);
        setCountriesFilteredOutByNameToReturn(resultOfSearchCountriesByName);
      }
    },
    [allCountriesFromApi]
  );

  const searchCountryByNameFromApi = useCallback(
    async (countryName: string) => {
      try {
        const responseOfApi = await api.get(
          `name/${countryName}?fullText=true`
        );
        console.log("responseApi", responseOfApi.data);
        const countryFromApiTyped: TypeCountryData = responseOfApi.data[0];
        console.log("typed", countryFromApiTyped);
        setCountryFromApi(countryFromApiTyped);
        setIsLoading(false);
      } catch (error) {}
    },
    []
  );

  const searchCountriesByName = useCallback(
    (valueFromInputSearch: string) => {
      const resultOfSearchCountriesByName = countriesFilteredOutByRegion.filter(
        (country) =>
          country.name
            .toLowerCase()
            .includes(valueFromInputSearch.toLowerCase())
      );
      setCountriesFilteredOutByNameToReturn(resultOfSearchCountriesByName);
    },
    [countriesFilteredOutByRegion]
  );

  useEffect(() => {
    const loadCountriesFromApi = async () => {
      try {
        const responseOfApi = await api.get("all");
        const countriesOfApiTyped: TypeCountryData[] = responseOfApi.data;
        setAllCountriesFromApi(countriesOfApiTyped);
        setCountriesFilteredOutByRegion(countriesOfApiTyped);
        setCountriesFilteredOutByNameToReturn(countriesOfApiTyped);
        setIsLoading(false);
      } catch (err) {
        setError("Tivemos problemas, tente mais tarde!");
      }
    };
    if (isEnableToFetchAllData) loadCountriesFromApi();
  }, [isEnableToFetchAllData]);
  return {
    getFetchDataApi: {
      countries: countriesFilteredOutByNameToReturn,
      country: countryFromApi,
      isLoading,
      error,
    },
    handleFetchDataApi: {
      searchCountriesByName,
      searchCountriesByRegion,
      searchCountryByNameFromApi,
    },
  };
};
