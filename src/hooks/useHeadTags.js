import React from "react";
import { HeadTags } from "../constants/HeadTags";

export const useHeadTags = (page) => {
  let siteUrl = HeadTags.all.siteUrl;
  let { scripts = [], title, description, noIndex = false, raw = null, slug = false } = HeadTags?.[page] ? HeadTags[page] : HeadTags["pageNotFound"];
  let pageUrl = slug ? `${siteUrl}/${slug}/` : siteUrl;
  if (title) {
    if (!Array.isArray(title)) {
      title = [title, title, title];
    } else if (Array.isArray(title) && title.length === 1) {
      title = [title[0], title[0], title[0]];
    } else if (Array.isArray(title) && title.length === 2) {
      title = [title[0], title[1], title[1]];
    }
  } else {
    title = ["Rethink Bronchiectasis", "Rethink Bronchiectasis", "Rethink Bronchiectasis"];
  }
  if (description) {
    if (!Array.isArray(description)) {
      description = [description, description, description];
    }
    if (!Array.isArray(description)) {
      description = [description, description, description];
    } else if (Array.isArray(description) && description.length === 1) {
      description = [description[0], description[0], description[0]];
    } else if (Array.isArray(description) && description.length === 2) {
      description = [description[0], description[1], description[1]];
    }
  } else {
    description = ["Rethink Bronchiectasis", "Rethink Bronchiectasis", "Rethink Bronchiectasis"];
  }
  return (
    <>
      {[...scripts, ...HeadTags.all.scripts].map((script, index) => {
        return <script key={index} type="text/javascript" src={script} />;
      })}
      {noIndex && <meta name="robots" content="noindex"></meta>}
      {raw && <script type="application/ld+json">{raw}</script>}
      <title>{title[0]}</title>
      <meta name="description" content={description[0]} />
      {!noIndex && (
        <>
          <meta property="og:title" content={title[1]} />
          <meta property="og:description" content={description[1]} />
          <meta property="og:image" content={`${siteUrl}/images/og-rethink-bronchiectasis.png`} />
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:url" content={`${pageUrl}`}></meta>
          <meta name="twitter:title" content={title[2]} />
          <meta name="twitter:description" content={description[2]} />
          <meta name="twitter:image" content={`${siteUrl}/images/og-rethink-bronchiectasis.png`} />
        </>
      )}
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains; preload" />
    </>
  );
};
