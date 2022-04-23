import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const color = "white";
const Provider = ({ children, ...props }) =>
  render(
    <div
      css={css`
        padding: 32px;
        background-color: hotpink;
        font-size: 24px;
        border-radius: 4px;
        &:hover {
          color: ${color};
        }
      `}
    >
      Hover to change color.
    </div>
  );

export default Provider;
