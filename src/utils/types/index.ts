export type TypesHeader = {
  changeTheme: () => void;
};

export type TypesButtonTheme = {
  title: string;
} & TypesHeader;

type TypeCountryCurrenciesData = {
  code: string;
  name: string;
  symbol: string;
};

type TypeCountryLanguagesData = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

export type TypeCountryData = {
  name: string;
  capital: string;
  population: number;
  alpha3Code: string;
  region: string;
  subregion: string;
  borders: string[];
  nativeName: string;
  currencies: TypeCountryCurrenciesData[];
  languages: TypeCountryLanguagesData[];
  topLevelDomain: string[];
  flag: string;
};

export type TypeInputSearchCountry = {
  searchCountriesByName: (valueFromInputSearch: string) => void;
};
export type TypeDropDownRegion = {
  searchCountriesByRegion: (valueFromDropDownRegion: string) => void;
};

export type TypeCountriesContainer = {
  countries: TypeCountryData[];
};

export type TypeHomeContainer = TypeInputSearchCountry &
  TypeCountriesContainer &
  TypeDropDownRegion;

export type TypeCountryComponent = {
  country: TypeCountryData;
};

export type TypeUseFetchDataApi = {
  isEnableToFetchAllData: boolean;
};

export type TypeDetailCountry = TypeCountryComponent;
