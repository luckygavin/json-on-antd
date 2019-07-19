/**
 * @file Ueditor内容解析器，对ueditor编辑的内容进行展示
 */
import {Html} from 'src/dom';

export default class UeditorParse extends Html {
    constructor(props) {
        super(props);
        this.type = 'div';
    }
    // 解析
    parse() {
        if (window.uParse) {
            try {
                window.uParse(`#${this.ueditorId}`, {
                    rootPath: window.UEDITOR_HOME_URL
                });
            } catch (error) {
                console.warn('`Ueditor`库加载/执行出现异常，无法进行解析。错误信息如下：' + error.toString());
            }
        } else {
            this._factory.$requirejs(['ueditor'], UE=>{
                if (window.uParse) {
                    this.parse();
                }
            });
        }
    }
    _beforeInit() {
        super._beforeInit();
        // 保证每次实例化都有一个唯一的id
        this.ueditorId = (this._getTransmitName() || 'editor_parse') + '_' + Date.now();
        this.__props.id = this.ueditorId;
    }
    // 加载ueditor相关文件
    _componentDidMount() {
        super._componentDidMount();
        this.parse();
    }
    _componentDidUpdate(prevProps, prevState) {
        super._componentDidUpdate();
        this.parse();
    }
}
