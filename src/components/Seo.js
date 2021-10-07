import React from 'react';
import { Helmet } from 'react-helmet';
import imageFb from '../images/FacebookMeta.png'
import imageTw from '../images/TwitterMeta.png'


const Seo = () => {


  const title = 'Remigo'
  const description = 'Reimaging the way Agents, Buyers, and Sellers to communicate about and share Real-Estate'
  const url = 'https://remigo-landing-page.herokuapp.com/';

  return (
    <Helmet>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Lexend:wght@100;200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
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