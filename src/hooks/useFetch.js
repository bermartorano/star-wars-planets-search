import { useState } from 'react';

function useFetch() {
  const [isLoading, setIsLoading] = useState(false);
  // const [errors, setErrors] = useState(null);

  const makeFetch = async () => {
    setIsLoading(true);
    const response = await fetch('https://swapi.dev/api/planets');
    const responseJson = await response.json();
    setIsLoading(false);
    return responseJson;
  };

  return {
    makeFetch, isLoading,
  };
}

export default useFetch;
