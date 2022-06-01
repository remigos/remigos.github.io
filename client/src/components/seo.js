import React from 'react';
import { Helmet } from 'react-helmet';
import imageFb from '../images/FacebookMeta.png'
import imageTw from '../images/TwitterMeta.png'


const Seo = () => {


  const title = 'Remigo'
  const description = 'Reimaging the way Agents, Buyers, and Sellers to communicate about and share Real Estate'
  const url = 'https://www.remigo.com/';

  return (
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
    <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
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

