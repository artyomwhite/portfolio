import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function createRootMetadata(): Metadata {
  const { metadata } = siteConfig;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: metadata.title,
      template: metadata.titleTemplate,
    },
    description: siteConfig.description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteConfig.url,
      siteName: siteConfig.name,
      title: metadata.title,
      description: siteConfig.description,
      images: [
        {
          url: metadata.ogImage,
          width: metadata.ogImageWidth,
          height: metadata.ogImageHeight,
          alt: `${siteConfig.name}, ${siteConfig.role}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: siteConfig.description,
      images: [metadata.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: siteConfig.url,
    },
  };
}

export const notFoundMetadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: false,
  },
};
