const siteName = import.meta.env.VITE_SITE_NAME || 'DreamIT 프레젠테이션';
const siteUrl = import.meta.env.VITE_SITE_URL || 'https://presentation.dreamitbiz.com';
const defaultDesc = '효과적인 발표 기법과 시각 자료 제작 학습 - PPT, 스피치, 시각디자인, 스토리텔링';
const defaultOgImage = `${siteUrl}/og-image.png`;

interface SEOHeadProps {
  title?: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
}

const SEOHead = ({ title, description, path = '', ogImage, noindex = false }: SEOHeadProps) => {
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const desc = description || defaultDesc;
  const url = `${siteUrl}${path}`;
  const image = ogImage || defaultOgImage;

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={image} />
    </>
  );
};

export default SEOHead;
