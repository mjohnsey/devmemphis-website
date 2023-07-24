import React, { PropsWithChildren } from "react";
import { Navigation } from "./Navigation";

export const Layout = (props: PropsWithChildren) => (
  <div className={"min-h-screen dark:bg-slate-900 dark:text-slate-400"}>
    <header className={"dark:bg-slate-800"}>
      <Navigation />
    </header>
    {props.children}
  </div>
);
