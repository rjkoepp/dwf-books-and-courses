import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import clsx from 'clsx';
import styles from './index.module.scss';
import Button from '@mui/material/Button';

const features = [
  {
    title: 'Books',
    content:
      `Technical knowledge may often be expressed on the web via blog posts or online periodicals, but the classic "book" medium cannot be replaced. Various books are rightly considered to be classics in their fields, and they are worth studying rigorously. It would be nice to dedicate many pages to all the wonderful books in existence, but that clearly cannot be the case. A few books that have caught my eye in particular appear on this site.`,
  },
  {
    title: 'Courses',
    content:
      `What learning activities regularly make use of books? Courses. It's hard to encounter many courses where a book is not explicitly required or at least suggested. This site notes a few different courses for which I have taken copious notes. The idea is that these notes can be referred back to so as to short-circuit the re-learning process.`,
  },
  {
    title: 'Guides',
    content:
      `Reading books and completing courses is wonderful, and sometimes you even get the chance to put your acquired knowledge to use. Sometimes it takes a while to solve a technical problem. Maybe the problem deserves to be remarked on in a blog post, but sometimes the solution process deserves a guide post of its own. This site has a few different guide posts to help fellow journeymen.`,
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      permalink={'/'}
      description={'LeetCode handbook landing page.'}
    >
      <div className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <img
            className={clsx(styles.heroBannerLogo, 'margin-vert--sm')}
            alt="LeetCode handbook logo"
            src={useBaseUrl('img/logo.png')}
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.getStarted} >
            <Button variant="contained" color="inherit">
              <Link className={styles.checkItOut} to={useBaseUrl('docs/intro')}>
                <span style={{ fontFamily: 'IBM Plex Sans' }}>Check it out</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
      {features && features.length && (
        <div className={styles.features}>
          <div className="container">
            <div className="row">
              {features.map(({ title, content }, idx) => (
                <div key={idx} className={clsx('col col--4', styles.feature)}>
                  <h2>{title}</h2>
                  <p>{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default Home;