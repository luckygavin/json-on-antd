/**
 * @file 树形控件源码
 * @author SuSisi
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'uf/component';
import {Utils, Ajax} from 'uf/utils';
import moment from 'moment';
import {Form, Icon, Spin, Button, message, Tooltip, Row, Col} from 'antd';
import {Select, Cascader, Radio, Upload, Checkbox, InputNumber, DatePicker} from 'antd';

import {Tree, Input, notification} from 'antd';
import reqwest from 'reqwest';
const TreeNode = Tree.TreeNode;
const Search = Input.Search;

import Ueditor from 'uf/ueditor';

import './style.scss';

let uuid = 0;

const expandedKeys = [];
const getParentNode = (value, tree, isRoot = false) => {
    let node = [];
    for (let v of tree) {
        let children;
        if (v.children && v.children.length > 0) {
            children = getParentNode(value, v.children, false);
        }
        if (isRoot || (children && children.length > 0) || v.name.indexOf(value) !== -1) {
            // 根节点或者子节点包含搜索内容或者本节点包含搜索内容
            node.push(Object.assign({}, v, {children}));
        }
    }
    return node;
};
const demoChildren = [
    {
        name: '0-0-2',
        key: '0-0-2',
        disabledChecbox: false,
        disabled: true,
        type: 'leval4',
        isLeaf: true
    },
    {
        name: '0-0-3',
        key: '0-0-3',
        disabledChecbox: false,
        disabled: true,
        type: 'leval4',
        isLeaf: true
    }
];
const errorMsg = {
    top: 24,
    message: '出错:',
    description: '请求数据时出错，请重试。',
    duration: 5
};
// 请求出错的处理函数
const errorHandler = error => {
    notification.error(Object.assign({}, errorMsg, !error.msg ? null : {
        description: error.msg
    }));
};
const getChildren = (params, url, callback, error = errorHandler, demo) => {
    if (url === '示例展示异步请求') {
        callback(demoChildren);
    }
    else {
        this.__getData(url, params, null, error, callback);
    }
};
const defaultConfig = {
    style: {},
    expand: {
        defaultExpandAll: false,
        defaultExpandedKeys: [],
        expandToLeaval: null,
        expandedKeys: null,
        autoExpandParent: true,
        onExpand: () => {} 
    },
    checkBox: {
        checkable: false,
        checkedKeys: null,
        checkStrictly: false,
        defaultCheckedKeys: [],
        onCheck: () => {}
    },
    search: false,
    select: {
        defaultSelectedKeys: [],
        selectedKeys: null,
        multiple: false,
        onSelect: () => {}
    },
    loadData: {
        enable: false,
        source: '',
        params: {}
    },
    widthResize: {
        resizeAble: false,
        minWidth: '',
        maxWidth: ''
    },
    showLine: false,
    showIcon: false
};
export default class OriginTree extends BaseComponent {
    constructor(props) {
        super(props);
        this.initTree();
        this.timer = 0;
        this.__init();
    }
    initTree(nextProps) {
        let objProps = nextProps ? nextProps : this.props;
        let config = objProps.config;
        let propsData = Utils.clone(objProps.data);
        // 对用户未配置的项使用默认配置
        this.style = Object.assign({}, defaultConfig.style, config.style);
        this.expand = Object.assign({}, defaultConfig.expand, config.expand);
        this.checkBox = Object.assign({}, defaultConfig.checkBox, config.checkBox);
        this.search = !!config.search ? config.search : defaultConfig.search;
        this.select = Object.assign({}, defaultConfig.select, config.select);
        this.loadData = Object.assign({}, defaultConfig.loadData, config.loadData);
        this.widthResize = Object.assign({}, defaultConfig.widthResize, config.widthResize);
        this.showLine = !!config.showLine ? config.showLine : defaultConfig.showLine;
        this.showIcon = !!config.showIcon ? config.showIcon : defaultConfig.showIcon;
        let state = {
            treeData: propsData,
            completeTree: propsData,
            expandedKeys: this.expand.expandedKeys,
            autoExpandParent: this.expand.autoExpandParent,
            checkedKeys: this.checkBox.checkedKeys, // 受控选择复选框
            selectedKeys: this.select.selectedKeys, // 受控选择
            searchValue: '', // 搜索框中输入内容
            searchTip: '' // 搜索结果提示
        };
        // this.setState(state);
        this.state = state;
        // 具有expand，及expandToLeaval配置，且没有配置expandedKeys时才按照用户要求展开到某一层
        if (this.expand.expandToLeaval && this.expand.expandedKeys.length === 0) {
            this.showToLeval(propsData, this.expand.expandToLeaval);
        }
    }
    componentDidMount() {
        // this.initTree();
    }
    onExpand(expandedKeys, e) {
        // if not set autoExpandParent to false, if children expanded, parent can not collapse.
        // or, you can remove all expanded children keys.
        this.setState({
            expandedKeys,
            autoExpandParent: false
        });
        this.expand.onExpand(expandedKeys, e);
    }
    onCheck(checkedKeys, e) {
        this.setState({
            checkedKeys
        });
        this.checkBox.onCheck(checkedKeys, e);
    }
    onSelect(selectedKeys, e) {
        this.setState({
            selectedKeys
        });
        this.select.onSelect(selectedKeys, e);
    }
    // 展示树形到哪一层
    // tree为指定树，expandToLeaval为展示到哪一层
    showToLeval(tree = this.state.completeTree, expandToLeaval) {
        let treeData = tree;
        let keys = [];
        const loop = data => data.map(item => {
            // 只放指定节点的父节点，即父节点展开，指定节点及指定节点以下都不参与循环
            if (item.type !== expandToLeaval) {
                if (item.children && item.children.length > 0) {
                    keys[keys.length] = item.key;
                    {loop(item.children);}
                }
            } else {
                return;
            }
        });
        loop(treeData);
        this.setState({
            treeData: treeData,
            expandedKeys: keys
        });
    }
    onChange(e) {
        let value = e.target.value;
        // 延迟200ms再做处理
        clearTimeout(this.timer);
        this.timer = setTimeout(()=>{
            this.handleSearch(value);
            this.timer = null;
        }, 200);
    }
    handleSearch(value) {
        if (value.length < 1) {
        // 搜索框中无内容，数据展示情况分类讨论
            if (this.props.config.expand['expandedKeys']) {
                // 展开用户说明的指定节点
                this.setState({
                    expandedKeys: this.props.config.expand['expandedKeys']
                });
            } else if (this.props.config.expand['expandToLeaval']) {
                // 根据用户最初定义进行展示
                this.showToLeval(this.state.completeTree, this.props.config.expand['expandToLeaval']);
            } else if (this.props.config.expand['defaultExpandAll']) {
                // 全部展开
                this.showToLeval(this.state.completeTree, null);
            }
            this.setState({
                searchValue: value,
                treeData: this.state.completeTree,
                searchTip: ''
            });
        }
        else {
            let treeData = this.state.completeTree;
            // 根据搜索结果建立新树
            let newTree = getParentNode(value, treeData);
            if (newTree.length === 0) {
                // 没有与搜索相匹配的节点
                this.setState({
                    searchValue: value,
                    treeData: [],
                    searchTip: '未找到可以匹配的结果'
                });
                return;
            } else {
                // 找到与搜索相匹配结果
                this.showToLeval(newTree, null);
                this.setState({
                    searchValue: value,
                    treeData: newTree,
                    searchTip: ''
                });
            }
        }
    }
    onLoadData(treeNode) {
        let nodeData = treeNode.props.data;
        return new Promise(resolve => {
            if (nodeData.isLeaf === false
                && (!nodeData.children || nodeData.children.length < 1)) {
                // 没有children数据又非叶子节点的时候需要去异步请求
                let params = {};
                let url = '';
                if (this.loadData['params'].length > 0 && this.loadData['source'].length > 0) {
                    url = this.loadData['source'];
                    this.loadData['params'].map(ele => {
                        if (nodeData[ele]) {
                            params[ele] = nodeData[ele];
                        }
                        return;
                    });
                    getChildren(params, url, (children, res) => {
                        // 将取回数据插入数据中
                        this.insertData(nodeData.key, nodeData.type, children);
                        resolve();
                    });
                }
            }
            else {
                resolve();
            }
        });
    }
    insertData(curKey, type, nodeData) {
        let treeData = this.state.treeData;
        let completeTree = this.state.completeTree;
        const loop = data => data.map(item => {
            if (item.isLeaf === false) {
                // if (item.type === type) {
                if (item.key === curKey) {
                    item.children = nodeData;
                    return;
                }
                // }
                else if (item.children && item.children.length > 0) {
                    {loop(item.children);}
                }
            }
        });
        loop(treeData);
        // 放回完整数据一份
        loop(completeTree);
        this.setState({
            treeData: treeData,
            completeTree: completeTree
        });
    }
    resizeWidth(ev) {
        let iEvent = ev || event;
        if (iEvent.button === 2) {
            this.stopResize();
            return false;
        }
        let oBox = ReactDOM.findDOMNode(this.refs['tree']);
        // 当单击的时候，存储x轴的坐标。
        let dx = iEvent.clientX;
        // 当单击的时候，储存Y轴的坐标。
        let dy = iEvent.clientY;
        // 存储默认的div的宽度。
        let dw = oBox.offsetWidth;
        document.onmousemove = ev => {
            let iEvent = ev || event;
            oBox.style.width = dw + (iEvent.clientX - dx) + 'px';
            // 此时的iEvent.clientX的为拖动时一直改变的鼠标的X坐标，
            // 所以，此时的盒子宽度就等于鼠标移动的距离加上原本盒子的宽度
            if (this.props.config.widthResize['minWidth']) {
                if (oBox.offsetWidth <= parseInt(this.props.config.widthResize['minWidth'], 10)) {
                    // 当盒子缩小到一定范围内的时候，让他保持一个固定值，不再继续改变
                    oBox.style.width = this.props.config.widthResize['minWidth'];
                }
            }
            if (this.props.config.widthResize['maxWidth']) {
                if (oBox.offsetWidth >= parseInt(this.props.config.widthResize['maxWidth'], 10)) {
                    // 当盒子缩小到一定范围内的时候，让他保持一个固定值，不再继续改变
                    oBox.style.width = this.props.config.widthResize['maxWidth'];
                }
            }
        };
        document.onmouseup = () => {
            document.onmouseup = null;
            document.onmousemove = null;
        };
        return false;
    }
    stopResize() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
    renderTreeNode(data) {
        const searchValue = this.state.searchValue;
        return data.map(item => {
            let title = item.name;
            if (this.props.config.search) {
                // indexOf搜索普通字符串效率最高
                let index = item.name.indexOf(searchValue);
                let beforeStr = item.name.substr(0, index);
                let afterStr = item.name.substr(index + searchValue.length);
                title = index > -1 ? (
                    <span>
                        {beforeStr}
                        <span className="ant-tree-searchable-filter" style={{color: 'red'}}>{searchValue}</span>
                        {afterStr}
                    </span>
                ) : <span>{item.name}</span>;
            }
            if (item.isLeaf === false) {
                return (
                    <TreeNode key={item.key} title={title} data={item} isLeaf={item.isLeaf}
                        disableCheckbox={!!item.disableCheckbox && item.disableCheckbox} disabled={item.disabled}>
                        {!!item.children && this.renderTreeNode(item.children)}
                    </TreeNode>
                );
            }
            return <TreeNode key={item.key} title={title} isLeaf={item.isLeaf} data={item}
                disableCheckbox={!!item.disableCheckbox && item.disableCheckbox} disabled={item.disabled}/>;
        });
    }
    render() {
        const {expandedKeys, autoExpandParent, checkedKeys, selectedKeys, searchTip} = this.state;
        return (
            <div className="uf-tree" style={this.style} ref="tree">
            {this.search
                && <div className="uf-tree-search">
                    <Search
                    style={{width: '90%'}}
                    placeholder="Search"
                    onChange={this.onChange.bind(this)}
                    />
                    <div className="uf-tree-treeSearchTip"
                        style={{display: searchTip.length > 0 ? 'block' : 'none'}}>{searchTip}</div>
                </div>
            }
            <Tree
                // 与树形图展开相关的配置
                {...(!!expandedKeys ? {expandedKeys: expandedKeys} : null)}
                {...{
                    defaultExpandAll: this.expand['expandToLeaval'] ? false : this.expand['defaultExpandAll'],
                    defaultExpandKeys: this.expand['expandToLeaval'] ? [] : (this.expand['defaultExpandedKeys']),
                    autoExpandParent: autoExpandParent,
                    onExpand: this.onExpand.bind(this)
                }}
                // 与复选框相关的配置
                {...{
                    checkable: this.checkBox['checkable'],
                    defaultCheckedKeys: this.checkBox['defaultCheckedKeys'],
                    checkStrictly: this.checkBox['checkStrictly'],
                    onCheck: this.onCheck.bind(this)
                }}
                {...(!!checkedKeys ? {checkedKeys: checkedKeys} : null)}
                // 与点选相关的配置
                {...{
                        defaultSelectedKeys: this.select['defaultSelectedKeys'],
                        multiple: this.select['multiple'],
                        onSelect: this.onSelect.bind(this),
                }}
                {...(!!selectedKeys ? {selectedKeys: selectedKeys} : null)}
                // 与异步加载相关的配置
                {...(this.loadData['enable'] ? {loadData: this.onLoadData.bind(this)} : null)}
                // 是否显示连接线和显示图标
                showIcon = {this.showLine}
                showLine = {this.showLine}
            >
                {this.renderTreeNode(this.state.treeData)}
            </Tree>
            {this.widthResize['resizeAble']
                && <div className="umpui-tree-ew-resize" onMouseDown={this.resizeWidth.bind(this)}></div>
            }
        </div>);
    }
}