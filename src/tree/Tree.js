/**
 * @file 树形控件源码
 * @author SuSisi
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {BaseComponent} from 'src/base';
import {Utils} from 'src/utils';
import {Tree, Input} from 'antd';
import './style.scss';

const TreeNode = Tree.TreeNode;
const Search = Input.Search;

const expandedKeys = [];
const getParentNode = (value, tree) => {
    let node = [];
    for (let v of tree) {
        let children;
        if (v.children) {
            children = getParentNode(value, v.children);
        }
        if ((children && children.length > 0) || v.name.indexOf(value) !== -1) {
            // 根节点或者子节点包含搜索内容或者本节点包含搜索内容
            node.push(Object.assign({}, v, {children}));
        }
    }
    return node;
};
const getParentsKeys = (nodes, keyArray) => {
    for (let v of nodes) {
        if (v.children && v.children.length > 0) {
            keyArray.push(v.key);
            getParentsKeys(v.children, keyArray);
        }
    }
};
export default class OriginTree extends BaseComponent {
    constructor(props) {
        super(props);
        this.__init();
        this.config = {
            style: {},
            expand: {
                defaultExpandAll: false,
                defaultExpandedKeys: [],
                expandLeavals: null,
                expandedKeys: null,
                autoExpandParent: true,
                onExpand: () => {}
            },
            checkbox: {
                checkable: false,
                checkedKeys: null,
                checkStrictly: false,
                defaultCheckedKeys: [],
                onCheck: () => {}
            },
            search: {
                enable: false,
                onlyShowSearchResult: true
            },
            select: {
                defaultSelectedKeys: [],
                selectedKeys: null,
                multiple: false,
                onSelect: () => {}
            },
            loadData: {
                enable: false,
                source: '',
                params: []
            },
            widthResize: {
                resizeAble: false,
                minWidth: '',
                maxWidth: ''
            },
            showLine: false,
            showIcon: false
        };
        this.initTree();
        this.timer = 0;
    }
    // 树形控件初始化配置及数据
    initTree(nextProps) {
        let objProps = nextProps ? nextProps : this.props;
        let propsData = Utils.clone(objProps.data);
        // 针对数据进行处理
        // 生成指针树，便于快速定位树节点
        this.completePointerTree = {};
        this.createPointerTree(propsData, this.completePointerTree);
        // 生成层级树，包含每层可展开的父节点的key
        this.levalPointerTree = {};
        this.createLevalTree(propsData, this.levalPointerTree);

        // 针对配置进行处理
        // 对用户未配置的项使用默认配置
        // this.config = this.__mergeProps(this.config, objProps.config);
        this.config = this.__mergeProps(this.config, this.__filterProps(objProps, 'data'));
        this.style = this.config.style;
        this.expand = this.config.expand;
        this.checkbox = this.config.checkbox;
        this.search = this.config.search;
        this.select = this.config.select;
        this.loadData = this.config.loadData;
        this.widthResize = this.config.widthResize;
        this.showLine = this.config.showLine;
        this.showIcon = this.config.showIcon;
        this.antdConfig = {
            defaultExpandAll: this.expand['expandLeavals'] ? false : this.expand['defaultExpandAll'],
            defaultExpandedKeys: this.expand['expandLeavals'] ? [] : this.expand['defaultExpandedKeys'],
            checkable: this.checkbox['checkable'],
            defaultCheckedKeys: this.checkbox['defaultCheckedKeys'],
            checkStrictly: this.checkbox['checkStrictly'],
            defaultSelectedKeys: this.select['defaultSelectedKeys'],
            multiple: this.select['multiple'],
            showLine: this.showLine
            // showIcon: this.showIcon
        };
        let state = {
            treeData: propsData,
            completeTree: propsData,
            expandedKeys: this.expand.expandedKeys,
            autoExpandParent: this.expand.autoExpandParent,
            checkedKeys: this.checkbox.checkedKeys, // 受控选择复选框
            selectedKeys: this.select.selectedKeys, // 受控选择
            searchValue: '' // 搜索框中输入内容
        };
        if (!!nextProps) {
            this.setState(state);
            this.componentDidMount();
        } else {
            this.state = state;
        }
    }
    componentDidMount() {
        // 具有expand，及expandLeavals配置，且没有配置expandedKeys时才按照用户要求展开到某一层
        if (this.expand.expandLeavals && !this.expand.expandedKeys) {
            this.showToLeval(this.expand.expandLeavals);
        }
    }
    componentWillReceiveProps(nextProps) {
        // 就算props没有改变，当父组件重新渲染时，也会进这里，所以需要在这里判断是否需要重新渲染组件
        // if (!Utils.equals(this.props.config, nextProps.config)
        //     || !Utils.equals(this.props.data, nextProps.data)) {
        //     this.initTree(nextProps);
        // }
        if (this.__shouldUpdate(this.props, nextProps)) {
            this.initTree(nextProps);
        }
    }
    // 创建指针树，创建之后，pointerTree的每个元素都能指向树的一个节点
    createPointerTree(nodes, pointerTree) {
        for (let v of nodes) {
            if (!!v.key) {
                let key = v.key;
                pointerTree[key] = v;
                if (v.children && v.children.length > 0) {
                    this.createPointerTree(v.children, pointerTree);
                }
            }
        }
    }
    // 生成一个层级树，记录每层可展开的有子节点的父节点
    createLevalTree(tree, levalPointerTree) {
        for (let v of tree) {
            let type = v.type;
            if (!levalPointerTree[type]) {
                levalPointerTree[type] = [];
            }
            // 对可展开的父节点进行key值存放
            if (v.children && v.children.length > 0) {
                levalPointerTree[type].push(v.key);
                this.createLevalTree(v.children, levalPointerTree);
            }
        }
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
        this.checkbox.onCheck(checkedKeys, e);
    }
    onSelect(selectedKeys, e) {
        this.setState({
            selectedKeys
        });
        this.select.onSelect(selectedKeys, e);
    }
    // 展示树形到哪一层，expandLeavals为数组，表示展示到哪些层
    showToLeval(expandLeavals) {
        let keys = [];
        if (expandLeavals === null) {
            // 展示所有节点
            for (let i in this.levalPointerTree) {
                keys = keys.concat(this.levalPointerTree[i]);
            }
        }
        else {
            for (let e in expandLeavals) {
                keys = keys.concat(this.levalPointerTree[expandLeavals[e]]);
            }
        }
        this.setState({
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
    // 通过搜索内容对策略树进行搜索
    handleSearch(value) {
        let newTree = this.state.completeTree;
        if (value.length < 1) {
            // 搜索框中无内容，数据展示情况分类讨论
            if (this.expand['expandedKeys']) {
                // 展开用户说明的指定节点
                this.setState({
                    expandedKeys: this.expand['expandedKeys'],
                    autoExpandParent: this.expand['autoExpandParent']
                });
            } else if (this.expand['expandLeavals']) {
                // 根据用户最初定义进行展示
                this.showToLeval(this.expand['expandLeavals']);
            } else if (this.expand['defaultExpandAll']) {
                // 全部展开
                this.showToLeval(null);
            }
        }
        else {
            // 有搜索内容时根据搜索结果渲染
            newTree = getParentNode(value, this.state.completeTree);
            // 对搜索结果的所有树节点进行展开
            let newKeys = [];
            getParentsKeys(newTree, newKeys);
            // 搜索结果仍然展示整个树，只是对含有搜索内容的节点进行展开
            if (!this.search.onlyShowSearchResult) {
                newTree = this.state.completeTree;
            }
            this.setState({
                expandedKeys: newKeys
            });
        }
        this.setState({
            treeData: newTree,
            searchValue: value
        });
    }
    // 异步对数据进行加载，满足一定要求再加载
    onLoadData(treeNode) {
        let key = treeNode.props.data.key;
        let nodeData = this.completePointerTree[key];
        return new Promise(resolve => {
            if ((!nodeData.children && nodeData.isLeaf === false)
                || (nodeData.children.length < 1 && !nodeData.isLeaf)) {
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
                    this.__getData(url, params, backChildren => {
                        this.insertData(nodeData.key, nodeData.type, backChildren);
                        resolve();
                    });
                }
            }
            else {
                resolve();
            }
        });
    }
    // 向展示树和完整树中插入数据
    insertData(curKey, type, nodeData) {
        let completeTree = this.state.completeTree;
        // 通过完整树指针向完整数据中插入一份数据
        this.completePointerTree[curKey].children = nodeData;
        // 需要更新指针树的指针情况
        this.createPointerTree(nodeData, this.completePointerTree);
        // 需要更新层级树的情况
        // 当前节点为一个可展开的父节点，故层级树中加入此节点，同时用取回的数据更新层级树
        if (!this.levalPointerTree[type]) {
            this.levalPointerTree[type] = [];
        }
        this.levalPointerTree[type].push(curKey);
        this.createLevalTree(nodeData, this.levalPointerTree);
        this.setState({
            completeTree: completeTree
        });
        // 用户在搜索时对数据进行了加载，且要求只展示与搜索相匹配的结果，则需要重新过滤树
        // 如果用户要求搜索时仍然展示全量数据，则不需要重新过滤，直接展示用户新加载的节点即可
        if (this.search.onlyShowSearchResult && this.state.searchValue.length > 0) {
            this.handleSearch(this.state.searchValue);
        }
    }
    // 树组建右边缘可扩展
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
            if (this.widthResize['minWidth']) {
                if (oBox.offsetWidth <= parseInt(this.widthResize['minWidth'], 10)) {
                    // 当盒子缩小到一定范围内的时候，让他保持一个固定值，不再继续改变
                    oBox.style.width = this.widthResize['minWidth'];
                }
            }
            if (this.widthResize['maxWidth']) {
                if (oBox.offsetWidth >= parseInt(this.widthResize['maxWidth'], 10)) {
                    // 当盒子缩小到一定范围内的时候，让他保持一个固定值，不再继续改变
                    oBox.style.width = this.widthResize['maxWidth'];
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
    // 渲染树
    renderTreeNode(data) {
        const {expandedKeys, searchValue} = this.state;
        return data.map(item => {
            let title = item.name;
            if (this.search && this.search.enable) {
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
            if (item.isLeaf === false || !!item.children) {
                return (
                    <TreeNode key={item.key} title={title} data={item} isLeaf={false}
                        disableCheckbox={!!item.disableCheckbox} disabled={!!item.disabled}>
                        {!!item.children && this.renderTreeNode(item.children)}
                    </TreeNode>
                );
            }
            else {
                return <TreeNode key={item.key} title={title} isLeaf data={item}
                    disableCheckbox={!!item.disableCheckbox} disabled={!!item.disabled}/>;
            }
        });
    }
    render() {
        const {expandedKeys, autoExpandParent, checkedKeys, selectedKeys, searchValue, treeData} = this.state;
        let searchTip = treeData.length === 0 ? '未找到可以匹配的结果' : '';
        return (
            <div className="uf-tree" style={this.style} ref="tree">
            {this.search.enable
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
                {...this.antdConfig}
                autoExpandParent = {autoExpandParent}
                onExpand = {this.onExpand.bind(this)}
                onSelect = {this.onSelect.bind(this)}
                onCheck = {this.onCheck.bind(this)}
                {...(!!expandedKeys ? {expandedKeys: expandedKeys} : null)}
                {...(!!checkedKeys ? {checkedKeys: checkedKeys} : null)}
                {...(!!selectedKeys ? {selectedKeys: selectedKeys} : null)}
                {...(!!this.loadData['enable'] ? {loadData: this.onLoadData.bind(this)} : null)}
            >
                {this.renderTreeNode(treeData)}
            </Tree>
            {this.widthResize['resizeAble']
                && <div className="uf-tree-ew-resize" onMouseDown={this.resizeWidth.bind(this)}></div>
            }
        </div>);
    }
}