/**
 * @file 布局处理工具
 * @author liuzechun
 */
import {Utils} from 'uf/utils';

const layoutItem = ['layout', 'header', 'footer', 'sider', 'content'];

export default {

    // 如果type为布局相关的组件，则进行特殊处理
    if(item) {
        // todo
        if (layoutItem.indexOf(item.type) !== -1) {
            return this.get(item);
        }
        return item;
    },

    get(item) {
        switch (item.type) {
            case 'layout':
                item = this.getLayout(item);
                break;
            default:
                break;
        }
        return item;
    },

    // 处理 type='layout' 的参数
    getLayout(item) {
        // 如果content里面包含有sider，则className中增加 ant-layout-has-sider。ps：没想清antd的官方是怎么做到适配的
        let className = item.className || '';
        let content = item.content;
        if (!Utils.typeof(content, 'array')) {
            content = [content];
        }
        for (let v of content) {
            if (v.type === 'sider') {
                className += ' ant-layout-has-sider';
                break;
            }
        }
        item.className = className;
        return item;
    }
}
