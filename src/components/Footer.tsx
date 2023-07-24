import React from "react";
import { ContentContainer } from "./ContentContainer";
export const Footer = () => (
  <footer className="bg-san-juan-950 py-4 text-center text-slate-300">
    <ContentContainer>
      <div className="content">
        <p>© {new Date().getFullYear()} DevMemphis</p>
      </div>
    </ContentContainer>
  </footer>
);
