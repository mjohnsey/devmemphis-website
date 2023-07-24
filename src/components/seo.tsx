import React, { PropsWithChildren } from "react";
import { useSiteMetadata } from "../hooks/use-site-metadata";

interface SeoProps {
  title?: string;
  description?: string;
  pathname?: string;
}

export const SEO = ({
  title,
  description,
  pathname,
  children,
}: PropsWithChildren<SeoProps>) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />

      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
      <meta name="og:image" content={seo.image} />
      <meta name="og:type" content={`website`} />
      <meta property="og:site_name" content="DevMemphis" />
      <meta property="og:locale" content="en_US" />

      <link rel="icon" href="/icon-32.png" sizes="32x32" />
      <link rel="icon" href="/icon-128.png" sizes="128x128" />
      <link rel="icon" href="/icon-180.png" sizes="180x180" />
      <link rel="icon" href="/icon-192.png" sizes="192x192" />
      {children}
    </>
  );
};
