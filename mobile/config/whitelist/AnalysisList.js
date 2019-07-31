/**
 * @file 解析组件时，属性为子组件配置的情况，需对子组件再次解析
 *
 * Author: liuzechun (liuzechun)
 * Created: 2019-01-11 17:57:44
 */

export default {
    Button: {basic: ['icon']},
    Panel: {basic: ['header']},
    Drawer: {basic: ['sidebar']},
    Grid: {
        funcs: ['renderItem']
    },
    Calendar: {
        funcs: ['renderHeader', 'renderShortcut']
    },
    Input: {basic: ['moneyKeyboardHeader']},
    List: {basic: ['renderHeader', 'renderFooter']},
    ListItem: {basic: ['thumb', 'extra']},
    ListViewIndex: {basic: ['delayActivityIndicator']},
    ListView: {
        funcs: [
            // 'renderHeader', 'renderFooter',
            // 'renderScrollComponent', 'renderSectionHeader',
            // 'renderSeparator', 'renderBodyComponent',
            // 'renderSectionWrapper', 'renderSectionBodyWrapper',
            // 'renderRow',
        ]
    },
    Modal: {basic: ['title']},
    NavBar: {basic: ['icon', 'leftContent', 'rightContent']},
    NoticeBar: {basic: ['icon', 'action']},
    Popover: {basic: ['overlay']},
    PopoverItem: {basic: ['icon']},
    Step: {basic: ['title', 'description', 'icon']},
    Tabs: {
        funcs: ['renderTab', 'renderTabBar']
    }
};