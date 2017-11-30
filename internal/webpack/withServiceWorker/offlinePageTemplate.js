import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import HTML from '../../../shared/skeleton';

module.exports = function generate(context) {
  // const config = context.htmlWebpackPlugin.options.custom.config;
  const { ClientConfig } = context.htmlWebpackPlugin.options.custom;
  const html = renderToStaticMarkup(
    <HTML bodyElements={<ClientConfig nonce="OFFLINE_PAGE_NONCE_PLACEHOLDER" />} />,
  );
  return `<!DOCTYPE html>${html}`;
};
