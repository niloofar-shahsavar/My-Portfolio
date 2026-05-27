import { Helmet } from "react-helmet-async";

const SITE_URL = "https://niloofar-shahsavar.netlify.app";
const SITE_NAME = "Niloofar Shahsavar";
const DEFAULT_DESC =
  "Junior AI Developer and UX/UI Designer based in Stockholm. Building data-driven applications with Python, FastAPI, React, and SQL.";
const DEFAULT_IMAGE = `${SITE_URL}/Frame.png`;

function SEO({ title, description, path, image }) {
  const fullTitle = title
    ? `${title} | ${SITE_NAME}`
    : `${SITE_NAME} | Junior AI Developer`;
  const desc = description || DEFAULT_DESC;
  const url = path ? `${SITE_URL}${path}` : SITE_URL;
  const img = image || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:image" content={img} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
}

export default SEO;
