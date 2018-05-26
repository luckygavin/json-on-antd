define(function() {
    var Table = {
        type: 'table',
        name: 'newtable1',
        rowKey: 'key',
        columns: [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
                filter: {
                    type: 'checkBox',
                    options: [
                        '斌',
                        '祖'
                    ]
                }
            },
            {
                title: '性别',
                dataIndex: 'sex',
                key: 'sex',
                filter: {
                    type: 'checkBox'
                },
                display: false
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
                filter: {
                    type: 'input'
                }
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
                filter: {
                    type: 'input'
                },
                ellipsis: true
            },
            {
                title: 'JSON字段',
                dataIndex: 'json',
                key: 'json',
                textType: 'JSON'
            }
        ],
        title: {
            text: 'Table前端分页表格测试',
            basicControls: [
                'filter',
                'setPageSize',
                'export',
                'switchTags',
                'refresh',
                'fullScreen',
                'showAllTags'
            ],
            showText: true
        },
        bordered: true,
        rowSelection: {
            type: 'checkbox',
            selections: true,
            selectedRowKeys: [
                '2'
            ]
        },
        data: [
            {
                key: '1',
                name: '胡彦祖彦斌',
                age: 52,
                address: '东湖区湖底公园3号东湖区湖底公园3号东湖区湖底公园3号',
                sex: '女',
                json: {
                    a: '哈哈',
                    b: 2
                },
                html: '表格',
                duration: '2017-05-21 00:00:00',
                customRender: '3'
            },
            {
                key: '2',
                name: '胡彦祖彦斌',
                age: 52,
                address: '东湖区湖底公园3号东湖区湖底公园3号东湖区湖底公园3号',
                sex: '女',
                json: {
                    a: '哈哈',
                    b: 2
                },
                html: '表格',
                duration: '2017-05-21 00:00:00',
                customRender: '3'
            }
        ],
        pagination: false
    }; 
    var Tab2 = [
        {
            type: 'div',
            style: {marginBottom: '10px'},
            content: [
                {
                    type: 'radio',
                    name: 'my-radio-button',
                    showAsButton: true,
                    value: 'pendding',
                    size: 'large',
                    options: [
                        {label: '待处理工单', value: 'table'},
                        {label: '已完成工单', value: 'content2'}
                    ]
                },
                {
                    type: 'input',
                    style: {
                        marginLeft: '16px',
                        width: '300px'
                    },
                    placeholder: '基本使用',
                    addonBefore: 'Http://',
                    addonAfter: '.com',
                    value: 'mysite'
                }
            ]
        },
        {
            type: 'textarea',
            placeholder: '这是一个文本输入框',
            style: {
                margin: '16px 0px',
                width: '50%',
                minHeight: '100px'
            }
        },
        Table
    ];
    return Tab2;
});