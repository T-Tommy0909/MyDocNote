import useSWR from "swr";
import cheerio from "cheerio";

import { requestGet } from "../axios";

export const htmlGet = async (url: string): Promise<any> => {
  const { data } = await requestGet<any>(url);

  const $ = cheerio.load(data);
  const word_arr: any = [];
  const separatorString = /[^a-z|^A-Z]+/;
  $("p,h1,h2,h3,h4", data).each((i, elem) => {
    word_arr.push($(elem).text().split(separatorString));
  });

  return word_arr;
};

export const useHtml = () => {
  const { data, error, mutate } = useSWR(
    ["/html"],
    async () =>
      await htmlGet("https://www.fastify.io/docs/latest/Reference/Routes/")
  );
  return {
    html: data,
    error,
    isLoading: !data && !error,
  };
};
