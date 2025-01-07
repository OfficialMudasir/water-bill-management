
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/water-bill-management/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/water-bill-management"
  },
  {
    "renderMode": 2,
    "route": "/water-bill-management/login"
  },
  {
    "renderMode": 2,
    "route": "/water-bill-management/dashboard"
  },
  {
    "renderMode": 2,
    "route": "/water-bill-management/connections"
  },
  {
    "renderMode": 2,
    "route": "/water-bill-management/billing"
  },
  {
    "renderMode": 2,
    "route": "/water-bill-management/approvals"
  },
  {
    "renderMode": 2,
    "route": "/water-bill-management/reports"
  },
  {
    "renderMode": 2,
    "route": "/water-bill-management/settings"
  },
  {
    "renderMode": 2,
    "route": "/water-bill-management/consumer/my-bills"
  },
  {
    "renderMode": 2,
    "route": "/water-bill-management/consumer/complaint-history"
  },
  {
    "renderMode": 2,
    "route": "/water-bill-management/consumer/register-complaint"
  },
  {
    "renderMode": 2,
    "route": "/water-bill-management/consumer/consumer"
  },
  {
    "renderMode": 2,
    "route": "/water-bill-management/consumer/payment-adjustment"
  },
  {
    "renderMode": 2,
    "redirectTo": "/water-bill-management/login",
    "route": "/water-bill-management/**"
  }
],
  assets: {
    'index.csr.html': {size: 1398, hash: '1f77b5798e522c6c6a8c7785f9e7c40b552306620690095197582165e64484ed', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1911, hash: 'd595945f74959dbce64bb9f826ef201b6b523084222fc002268c42f20b75be1f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 7584, hash: '2c387c4c63e653377a02d5e786bbdaf9cd3498d63c93d28d18a0a7980dfe1620', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'billing/index.html': {size: 4573, hash: '40752234e2bc86a5d8fa6b6168518d9dcfdd80e5aa9dc2831d374b95a063704f', text: () => import('./assets-chunks/billing_index_html.mjs').then(m => m.default)},
    'approvals/index.html': {size: 4573, hash: '40752234e2bc86a5d8fa6b6168518d9dcfdd80e5aa9dc2831d374b95a063704f', text: () => import('./assets-chunks/approvals_index_html.mjs').then(m => m.default)},
    'reports/index.html': {size: 4573, hash: '40752234e2bc86a5d8fa6b6168518d9dcfdd80e5aa9dc2831d374b95a063704f', text: () => import('./assets-chunks/reports_index_html.mjs').then(m => m.default)},
    'settings/index.html': {size: 4573, hash: '40752234e2bc86a5d8fa6b6168518d9dcfdd80e5aa9dc2831d374b95a063704f', text: () => import('./assets-chunks/settings_index_html.mjs').then(m => m.default)},
    'consumer/my-bills/index.html': {size: 4573, hash: '40752234e2bc86a5d8fa6b6168518d9dcfdd80e5aa9dc2831d374b95a063704f', text: () => import('./assets-chunks/consumer_my-bills_index_html.mjs').then(m => m.default)},
    'consumer/complaint-history/index.html': {size: 4573, hash: '40752234e2bc86a5d8fa6b6168518d9dcfdd80e5aa9dc2831d374b95a063704f', text: () => import('./assets-chunks/consumer_complaint-history_index_html.mjs').then(m => m.default)},
    'consumer/register-complaint/index.html': {size: 4573, hash: '40752234e2bc86a5d8fa6b6168518d9dcfdd80e5aa9dc2831d374b95a063704f', text: () => import('./assets-chunks/consumer_register-complaint_index_html.mjs').then(m => m.default)},
    'consumer/consumer/index.html': {size: 4573, hash: '40752234e2bc86a5d8fa6b6168518d9dcfdd80e5aa9dc2831d374b95a063704f', text: () => import('./assets-chunks/consumer_consumer_index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 7584, hash: '2c387c4c63e653377a02d5e786bbdaf9cd3498d63c93d28d18a0a7980dfe1620', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'consumer/payment-adjustment/index.html': {size: 4573, hash: '40752234e2bc86a5d8fa6b6168518d9dcfdd80e5aa9dc2831d374b95a063704f', text: () => import('./assets-chunks/consumer_payment-adjustment_index_html.mjs').then(m => m.default)},
    'dashboard/index.html': {size: 4573, hash: '39a933823e94026183bb3de387ada3fdcded1a17e26839fdedb7fef0cf05e623', text: () => import('./assets-chunks/dashboard_index_html.mjs').then(m => m.default)},
    'connections/index.html': {size: 4573, hash: '39a933823e94026183bb3de387ada3fdcded1a17e26839fdedb7fef0cf05e623', text: () => import('./assets-chunks/connections_index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
