/**
 * @file 表格组件的SuperHeader部分
 * @auhor huzaibin
 */
import React, {PureComponent} from 'react';

export default class SuperHeaders extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let data = this.props.data;
        return (
            <thead>
                {
                    data.map((trItem, trIndex) => (
                        <tr key={'tr' + trIndex} className='active'>
                            {
                                trItem.map((item, index) => (
                                    <td key={'td' + index}
                                        colSpan={item.colspan}
                                        rowSpan={item.rowspan === undefined ? 1 : item.rowspan}
                                        style={{
                                                textAlign: 'center',
                                                verticalAlign: 'center',
                                                backgroundColor: item.backgroundColor || '#f7f7f7'
                                            }}>
                                        {item.name}
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
        );
    }
}