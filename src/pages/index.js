import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
// Import via bundler to emit correct public URL
import bannerUrl from '@site/static/img/cien_banner.png';

export default function Home() {
  return (
    <Layout title="Cien Data API">
      <main className="hero" style={{ padding: '6rem 2rem', position: 'relative' }}>
        <div className="home-hero-content" style={{ textAlign: 'center' }}>
          <h1 style={{ marginBottom: '0.75rem' }}>Cien Data API</h1>
          <p style={{ maxWidth: 900, margin: '0 auto 0.75rem', fontSize: '18px' }}>
            The Cien Data API allows developers to access the underlying data from Cien’s TrueAI platform,
            built to enable sales and marketing technology applications and analytics in completely new ways.
          </p>

          <p style={{ maxWidth: 900, margin: '0 auto 1.5rem', fontSize: '18px', opacity: 0.95 }}>
            Use this documentation to explore available data entities, understand how data is enhanced and derived by the platform,
            and reference example queries that illustrate common analytical patterns.
          </p>

          <div style={{ marginTop: '1rem' }}>
            <Link className="button button--primary margin--sm" to={useBaseUrl('docs/intro')}>
              Get started
            </Link>

            <Link className="button button--secondary margin--sm" to={useBaseUrl('docs/examples')}>
              Examples & queries
            </Link>

            <Link className="button button--secondary margin--sm" to={useBaseUrl('docs/entities/contacts/')}>
              Entities
            </Link>
            <Link className="button button--secondary margin--sm" to={useBaseUrl('docs/naming-conventions')}>
              Naming Conventions
            </Link>

            <Link className="button button--secondary margin--sm" to={useBaseUrl('docs/rules')}>
              Rules
            </Link>
          </div>
        </div>

      </main>
      {/* Banner placed as its own section below hero, full-width */}
      <section className="cien-banner" style={{ padding: 0 }}>
        <div style={{ width: '100%', height: '100%', display: 'block' }}>
          <img
            src={bannerUrl}
            alt="Cien banner"
            style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain' }}
          />
        </div>
      </section>
    </Layout>
  );
}