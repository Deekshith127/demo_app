
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/demo_app/',
  locale: undefined,
  routes: undefined,
  assets: {
    'index.csr.html': {size: 510, hash: '4662889c21c970d1387a045a79596a3b8e3fc602fad1cbcd36282ed5da950b35', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1023, hash: 'f1972ee6f8cd160385f27f2524f0a68462e9fa8a1417fce4c093b2ef6f3bd197', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
