import { useEffect, useState } from "react";
import { api } from "../utils/api";

interface AxiosProps {
  url: string;
  method?: "get" | "post" | "delete" | "put" | "patch";
}

export interface AxiosResponse<T> {
  response: T | null;
  error: Error | null;
  loading: boolean;
}

export function useAxios<T>({
  url,
  method = "get",
}: AxiosProps): AxiosResponse<T> {
  const [response, setResponse] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    api[method](url)
      .then(({ data }) => {
        setResponse(data);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url, method]);

  return { response, error, loading };
}
