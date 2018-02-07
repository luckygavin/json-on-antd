module.exports = {
    'standard.md': require('./standard.md'),
    'third-party.md': require('./third-party.md'),
    'install.md': require('./install.md'),
    'introduction.md': require('./introduction.md'),

    'configure-api.md': require('./configure-api.md'),
    'configure-join.md': require('./configure-join.md'),
    'configure-others.md': require('./configure-others.md'),
    'configure-page.md': require('./configure-page.md'),

    'develop-install.md': require('./develop-install.md'),
    'develop-config.md': require('./develop-config.md'),
    'develop-modules.md': require('./develop-modules.md'),
    'develop-others.md': require('./develop-others.md'),
    'develop-build.md': require('./develop-build.md'),

    'update-log.md': require('./update-log.md'),

    ...require('src/antd/markdown/index.js')
};