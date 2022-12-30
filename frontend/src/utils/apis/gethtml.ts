import useSWR from "swr";

import { requestGet } from "../axios";

export const htmlGet = async (url: string): Promise<any> => {
  const { data } = await requestGet<any>(url);
  console.log(url);
  return data;
};

export const useHtml = () => {
  const { data, error, mutate } = useSWR(
    ["/html"],
    async () => await htmlGet("")
  );
  return {
    html: data,
    error,
    isLoading: !data && !error,
  };
};
