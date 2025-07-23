import { useEffect } from 'react';

export function useFetch(fetchFn, initialValue){
    const [isFetching, setIsFetching] = useState();
    const [error, setError] = useState();
    const [fetchedData, setFetchedData] = useState();

    useEffect(() => {
        async function fetchData() {
          setIsFetching(true);
          try {
            const places = await fetchFn();
            setUserPlaces(places);
          } catch (error) {
            setError({ message: error.message || 'Failed to fetch data' });
          }
    
          setIsFetching(false);
        }
    
        fetchData();
      }, [fetchFn]);

      return {
        isFetching,
        error,
        fetchedData,
        setFetchedData
      }
}
