import useSWR from "swr";
import cheerio from "cheerio";

import { requestGet } from "../axios";

export const htmlGet = async (url: string): Promise<string[]> => {
  const { data } = await requestGet<string>(url);

  const $ = cheerio.load(data);
  let word_arr: string[] = [];
  const separatorString = /[^a-z|^A-Z]+/;
  $("p,h1,h2,h3,h4", data).each((i, elem) => {
    word_arr = word_arr.concat($(elem).text().split(separatorString));
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
