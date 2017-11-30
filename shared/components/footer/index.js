import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Container from '../container';
import GithubLogoText from '../../svgs/github-logo-text';
import './styles.css';

function Footer({ className, theme }) {
  const footerClass = classNames('footer', {
    [className]: className,
    [`footer--theme-${theme}`]: theme,
  });
  return (
    <div className={footerClass}>
      <Container>
        <div className="footer__row">
          <div className="footer__grid">
            <div className="footer__logo">
              <a href="/">
                <GithubLogoText />
              </a>
            </div>
            <div className="footer__copyright">
              © 2017
            </div>
          </div>
          <div className="footer__grid">
            <FooterGrid sectionName="Features">
              <a href="/">Code review</a>
              <a href="/">Project management</a>
              <a href="/">Community</a>
              <a href="/">Documentation</a>
              <a href="/">Code hosting</a>
            </FooterGrid>
          </div>
          <div className="footer__grid">
            <FooterGrid sectionName="Platform">
              <a href="/">Atom</a>
              <a href="/">Electron</a>
              <a href="/">GitHub Desktop</a>
              <a href="/">Developers</a>
            </FooterGrid>
          </div>
          <div className="footer__grid">
            <FooterGrid sectionName="Community">
              <a href="/">Personal</a>
              <a href="/">Open source</a>
              <a href="/">Business</a>
              <a href="/">Education</a>
              <a href="/">Customers</a>
              <a href="/">Partners</a>
              <a href="/">Sponsorships</a>
            </FooterGrid>
          </div>
          <div className="footer__grid">
            <FooterGrid sectionName="Company">
              <a href="/">About</a>
              <a href="/">Blog</a>
              <a href="/">Careers</a>
              <a href="/">Press</a>
              <a href="/">Shop</a>
            </FooterGrid>
          </div>
          <div className="footer__grid">
            <FooterGrid sectionName="Resources">
              <a href="/">Contact GitHub</a>
              <a href="/">Help</a>
              <a href="/">Status</a>
              <a href="/">Terms</a>
              <a href="/">Privacy</a>
              <a href="/">Security</a>
              <a href="/">Training</a>
            </FooterGrid>
          </div>
        </div>
      </Container>
    </div>
  );
}

function FooterGrid({
  className,
  theme,
  sectionName,
  children,
}) {
  const footerGridClass = classNames('footerGrid', {
    [className]: className,
    [`footerGrid--theme-${theme}`]: theme,
  });
  return (
    <div className={footerGridClass}>
      <h5>{sectionName}</h5>
      {children && children.length && (
        <ul>
          {children.map((child, key) => (
            <li key={key}>
              {child}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

Footer.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
};

FooterGrid.propTypes = {
  className: PropTypes.string,
  theme: PropTypes.string,
  sectionName: PropTypes.string,
  children: PropTypes.node,
};

export default Footer;
