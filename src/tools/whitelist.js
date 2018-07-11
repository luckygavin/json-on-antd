/**
 * @file 属性需进一步解析的组件属性名单
 * @author liuzechun
 */

import {Utils} from 'src/utils';

const List = {
    Breadcrumb: ['options'],
    Input: ['addonBefore', 'addonAfter', 'prefix', 'suffix'],
    Switch: ['checkedChildren', 'unCheckedChildren'],
    Card: ['title', 'extra'],
    Panel: ['header'],
    Popover: ['title', 'body'],
    Tooltip: ['title'],
    Tabs: ['tabBarExtraContent'],
    TabPane: ['tab'],
    SubMenu: ['title'],
    MenuItemGroup: ['title'],
    Step: ['title', 'description', 'icon'],
    Alert: ['closeText', 'message', 'description'],
    Popconfirm: ['title'],
    Dropdown: ['overlay'],
    DropdownButton: ['overlay'],
    Rate: ['character'],
    Timeline: ['pending'],
    TimelineItem: ['dot'],
    Sider: ['trigger'],
    Modal: ['title'],
    Notification: ['message', 'description', 'btn', 'icon'],
    Message: ['content'],
    Fieldset: ['title']
};

export default {

    // 返回当前配置中需要二次解析的属性
    get(props, type) {
        let list = this.getall(type);
        let result = [];
        for (let v of list) {
            // 如果在白名单中的属性值是直接的对象或数组（未解析的配置）或函数（执行结果为配置），则返回
            if (!!props[v] && Utils.directInstanceof(props[v], [Object, Array, Function])) {
                result.push(v);
            }
        }
        return result;
    },

    // 返回当前组件全部可以解析的属性
    getall(type) {
        let name = Utils.toPascal(type);
        // 把 children 属性加入到全部组件中
        return (List[name] || []).concat('children');
    }

}