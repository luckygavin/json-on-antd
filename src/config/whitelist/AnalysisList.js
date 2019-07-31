/**
 * @file 解析组件时，需要再次解析处理的属性列表
 *      分为两部分：
 *          1、属性为子组件配置的情况，需对子组件再次解析
 *          2、属性为函数，函数的执行结果为一个组件配置，需要再次解析的情况
 *
 * Author: liuzechun (liuzechun)
 * Created: 2019-01-11 17:57:44
 */

export default {
    Breadcrumb: {basic: ['options']},
    Input: {basic: ['addonBefore', 'addonAfter', 'prefix', 'suffix']},
    Switch: {basic: ['checkedChildren', 'unCheckedChildren']},
    Card: {basic: ['title', 'extra']},
    Panel: {basic: ['header']},
    Popover: {basic: ['title', 'body']},
    Tooltip: {basic: ['title']},
    Tabs: {basic: ['tabBarExtraContent']},
    TabPane: {basic: ['tab']},
    SubMenu: {basic: ['title']},
    MenuItemGroup: {basic: ['title']},
    Step: {basic: ['title', 'description', 'icon']},
    Alert: {basic: ['closeText', 'message', 'description']},
    Popconfirm: {basic: ['title']},
    Dropdown: {basic: ['overlay']},
    DropdownButton: {basic: ['overlay']},
    Rate: {basic: ['character']},
    Timeline: {basic: ['pending']},
    TimelineItem: {basic: ['dot']},
    Sider: {basic: ['trigger']},
    Modal: {basic: ['title']},
    Notification: {basic: ['message', 'description', 'btn', 'icon']},
    Fieldset: {basic: ['title']},
    DatePicker: {
        funcs: ['renderExtraFooter']
    },
    RangePicker: {
        funcs: ['renderExtraFooter']
    },
    MonthPicker: {
        funcs: ['renderExtraFooter']
    },
    TimePicker: {
        funcs: ['renderExtraFooter']
    }
};