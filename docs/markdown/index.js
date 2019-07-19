module.exports = {
    'standard.md': require('./standard.md'),
    'third-party.md': require('./third-party.md'),
    'introduction.md': require('./introduction.md'),
    'guide.md': require('./guide.md'),

    'configure-install.md': require('./configure-install.md'),
    'configure-layout.md': require('./configure-layout.md'),
    'configure-call.md': require('./configure-call.md'),
    'configure-join.md': require('./configure-join.md'),
    'configure-page.md': require('./configure-page.md'),

    'develop-install.md': require('./develop-install.md'),
    'develop-config.md': require('./develop-config.md'),
    'develop-modules.md': require('./develop-modules.md'),
    'develop-others.md': require('./develop-others.md'),
    'develop-build.md': require('./develop-build.md'),

    'api.md': require('./api.md'),
    'utils.md': require('./utils.md'),
    'params.md': require('./params.md'),
    'lifecycle.md': require('./lifecycle.md'),
    'load.md': require('./load.md'),
    'others.md': require('./others.md'),
    'update-log.md': require('./update-log.md'),

    // src中的文档
    ...require('src/antd/markdown/index.js'),

    // 移动版文档
    'mobile-guide.md': require('./mobile/mobile-guide.md'),
    'mobile-guide.md': require('./mobile/mobile-guide.md')

};