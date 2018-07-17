/**
 * @file 组件实例缓存
 * @author liuzechun
 * Created Date: 2017-10-24 01:40:57
 */

import {Utils} from 'src/utils';
import BaseCache from './base/BaseCache.js';
import {generate} from 'src/tools/instance.js';

// export default (new Models(_cache));

export default generate(()=>(
    new BaseCache()
));