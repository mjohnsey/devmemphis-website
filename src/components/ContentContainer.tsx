import React, { PropsWithChildren } from "react";

export const ContentContainer = (props: PropsWithChildren) => (
  <div className={"mx-auto max-w-xl grid"}>{props.children}</div>
);
