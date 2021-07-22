module.exports = config => {
  config.development.open = "#/?spaceId=48C607A70B5A46A3864A34E2BDDDEA04";
  config.proxies = [
    {
      context: [
        '/api/**',
        '/ms/**',
        '!/api/v1/proxy/healthplan/**'
      ],
      target: 'http://localhost:9998',
      enabled: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/api': ''
      }
    },
    {
      context: [
        '/api/v1/proxy/healthplan/'
      ],
      target: 'http://localhost:9999',
      enabled: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/api': ''
      }
    },
    {
      context: ['/api/v1/proxy/healthplan/**'],
      target: 'http://localhost:8888',
      enabled: true,
      logLevel: 'debug',
      pathRewrite: {
        '^/api/v1/proxy/healthplan/': ''
      }
    }
  ];
  return config;
}
