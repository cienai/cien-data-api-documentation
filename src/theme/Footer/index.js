import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useLocation} from '@docusaurus/router';

function ThinFooter({text}) {
  return (
    <footer className="footer thin-footer">
      <div className="container container--fluid">
        <div className="footer__bottom text--center">{text}</div>
      </div>
    </footer>
  );
}

function RichFooter() {
  const {siteConfig} = useDocusaurusContext();
  const links = siteConfig?.themeConfig?.footer?.links ?? [];
  const copyright =
    siteConfig?.themeConfig?.footer?.copyright || 'Cien, Inc. © 2026. All Rights Reserved.';

  return (
    <footer className="footer">
      <div className="container container--fluid">
        {links.length > 0 && (
          <div className="row footer__links">
            {links.map((section, i) => (
              <div className="col col--3" key={i}>
                {section.title && <h4 className="footer__title">{section.title}</h4>}
                <ul className="footer__items clean-list">
                  {(section.items || []).map((item, j) => (
                    <li key={j} className="footer__item">
                      <a href={item.href} className="footer__link-item">
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        <div className="footer__bottom text--center">{copyright}</div>
      </div>
    </footer>
  );
}

export default function Footer() {
  const {siteConfig} = useDocusaurusContext();
  const location = useLocation();
  const baseUrl = siteConfig?.baseUrl || '/';
  // Normalize: ensure baseUrl ends with single slash
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const isHome = location?.pathname === normalizedBase || location?.pathname === normalizedBase.slice(0, -1);
  const copy = 'Cien, Inc. © 2026. All Rights Reserved';

  if (isHome) {
    return <RichFooter/>;
  }
  return <ThinFooter text={copy}/>;
}
