import { FC } from "react";

import { useHtml } from "../utils/apis/gethtml";

export const Root: FC = () => {
  const { html, isLoading } = useHtml();

  return (
    <div>
      {!isLoading && (
        <div>
          <div>root page</div>
          <div>{html}</div>
        </div>
      )}
    </div>
  );
};
