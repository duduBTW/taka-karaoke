import axios from "axios";
import useSWR, { KeyedMutator } from "swr";

type url = () => string;

export interface IUseFetch<Data> {
  data: Data | undefined;
  error: any;
  mutate: KeyedMutator<Data>;
  isValidating: boolean;
  showErrorMessage: boolean;
}

export function useFetch<Data = any>(
  url: string | url | null
): IUseFetch<Data> {
  const { data, error, mutate, isValidating } = useSWR<Data>(
    url,
    async (url) => {
      const response = await axios.get<Data>(url);

      return response.data;
    },
    {
      revalidateOnFocus: true,
      refreshInterval: 30000,
    }
  );

  const showErrorMessage = Boolean(error && !data);

  return { data, error, mutate, isValidating, showErrorMessage };
}
