
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/connections"
  },
  {
    "renderMode": 2,
    "route": "/billing"
  },
  {
    "renderMode": 2,
    "route": "/approvals"
  },
  {
    "renderMode": 2,
    "route": "/reports"
  },
  {
    "renderMode": 2,
    "route": "/settings"
  },
  {
    "renderMode": 2,
    "route": "/consumer/my-bills"
  },
  {
    "renderMode": 2,
    "route": "/consumer/complaint-history"
  },
  {
    "renderMode": 2,
    "route": "/consumer/register-complaint"
  },
  {
    "renderMode": 2,
    "route": "/consumer/consumer"
  },
  {
    "renderMode": 2,
    "route": "/consumer/payment-adjustment"
  },
  {
    "renderMode": 2,
    "redirectTo": "/login",
    "route": "/**"
  }
],
  assets: {
    'index.csr.html': {size: 1375, hash: '813ab9d207b504adc7dc204cbfe31c0f524a693f379cd25ae601acbf52acf2d2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1888, hash: 'c292fec5935f400d7869fc422664e57ee2e04ef1411fb8251f9f8f8ddf2126d3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 7611, hash: 'c999d2f41d7311778011fbc549bfbf67f8b814f70fbea83bea673ad881c9c811', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 4547, hash: 'd85c449b868e0acd68dbb93ad781a399426ce0c2ee5e3a95427f46a8e411efec', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'connections/index.html': {size: 4547, hash: 'ef743b3d8aa2b7d90902c5f83d2e070a83090b99c75732a1efb89480a9f90c46', text: () => import('./assets-chunks/connections_index_html.mjs').then(m => m.default)},
    'approvals/index.html': {size: 4547, hash: 'd85c449b868e0acd68dbb93ad781a399426ce0c2ee5e3a95427f46a8e411efec', text: () => import('./assets-chunks/approvals_index_html.mjs').then(m => m.default)},
    'reports/index.html': {size: 4547, hash: 'ef743b3d8aa2b7d90902c5f83d2e070a83090b99c75732a1efb89480a9f90c46', text: () => import('./assets-chunks/reports_index_html.mjs').then(m => m.default)},
    'consumer/my-bills/index.html': {size: 4547, hash: 'ef743b3d8aa2b7d90902c5f83d2e070a83090b99c75732a1efb89480a9f90c46', text: () => import('./assets-chunks/consumer_my-bills_index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 4547, hash: 'd85c449b868e0acd68dbb93ad781a399426ce0c2ee5e3a95427f46a8e411efec', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'consumer/complaint-history/index.html': {size: 4547, hash: 'ef743b3d8aa2b7d90902c5f83d2e070a83090b99c75732a1efb89480a9f90c46', text: () => import('./assets-chunks/consumer_complaint-history_index_html.mjs').then(m => m.default)},
    'consumer/register-complaint/index.html': {size: 4547, hash: 'd85c449b868e0acd68dbb93ad781a399426ce0c2ee5e3a95427f46a8e411efec', text: () => import('./assets-chunks/consumer_register-complaint_index_html.mjs').then(m => m.default)},
    'consumer/consumer/index.html': {size: 4547, hash: 'ef743b3d8aa2b7d90902c5f83d2e070a83090b99c75732a1efb89480a9f90c46', text: () => import('./assets-chunks/consumer_consumer_index_html.mjs').then(m => m.default)},
    'consumer/payment-adjustment/index.html': {size: 4547, hash: 'd85c449b868e0acd68dbb93ad781a399426ce0c2ee5e3a95427f46a8e411efec', text: () => import('./assets-chunks/consumer_payment-adjustment_index_html.mjs').then(m => m.default)},
    'index.html': {size: 7611, hash: 'c999d2f41d7311778011fbc549bfbf67f8b814f70fbea83bea673ad881c9c811', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'billing/index.html': {size: 4547, hash: 'd85c449b868e0acd68dbb93ad781a399426ce0c2ee5e3a95427f46a8e411efec', text: () => import('./assets-chunks/billing_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
