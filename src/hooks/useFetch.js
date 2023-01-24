import { useState } from 'react';

function useFetch() {
  const [isLoading, setIsLoading] = useState(false);

  const makeFetch = async () => {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/planets');
    const responseJson = await response.json();
    const planetsWithoutRes = responseJson.results.map((pla) => {
      delete pla.residents;
      return pla;
    });
    setIsLoading(false);
    return planetsWithoutRes;
  };

  return {
    makeFetch, isLoading,
  };
}

export default useFetch;
