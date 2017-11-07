/**
 * @file 组件实例缓存
 * @author liuzechun
 * Created Date: 2017-10-24 01:40:57
 */

import BaseCache from './BaseCache.js';

const _key = '_uf-components';

export default (new BaseCache(_key));