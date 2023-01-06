import { FC } from "react";

import { useHtml } from "../utils/apis/gethtml";
import { WordsBlock } from "../components/root/WordsBlock";

export const Root: FC = () => {
  const { html, isLoading } = useHtml();

  return (
    <div>
      {!isLoading && (
        <div>
          <div>root page</div>
          <div>{html && WordsBlock(html)}</div>
        </div>
      )}
    </div>
  );
};
