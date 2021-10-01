import React from 'react';
import { Helmet } from 'react-helmet';
import imageFb from '../../assets/FacebookMeta.png'
import imageTw from '../../assets/TwitterMeta.png'


const Seo = () => {


  const title = 'Remigo'
  const description = 'Reimaging the way Agents, Buyers, and Sellers to communicate about and share Real-Estate'
  const url = 'https://remigo-landing-page.herokuapp.com/';

  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta name="description" content={description} />
      {imageFb && <meta name="image" content={imageFb} />}

      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageFb} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta property="twitter:url" content={url}/>
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageTw} />
    </Helmet>
  );
};

export default Seo;