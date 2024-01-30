import { useEffect, useState } from "react";
import { ApiCallProps, makeApiCall } from "../services/apiCall";

interface FetchResponse<T> {
  loading: boolean;
  data: T | undefined;
  error: Error | undefined;
}

export const useFetch = <T>({
  isFetchable = true,
  url,
  options,
}: ApiCallProps): FetchResponse<T> => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);
  const [error, setError] = useState<Error | undefined>(undefined);

  useEffect(() => {
    if (isFetchable) {
      void (async () => {
        try {
          setLoading(true);
          const data = await makeApiCall<T>({ url, options });
          setData(data);
        } catch (error) {
          setError(error as Error);
        } finally {
          setLoading(false);
        }
      })();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return { loading, data, error };
};
