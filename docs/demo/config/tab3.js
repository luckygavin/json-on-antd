define(function (require) {

    var Tab3 = [
        {
            type: 'div',
            style: {marginBottom: '10px', padding: '10px 20px'},
            content: [
                {
                    type: 'span',
                    content: '省份选择：'
                },
                {
                    type: 'cascader',
                    name: 'myCascader1',
                    placeholder: '省区选择',
                    options: [
                        {
                            value: 'zhejiang',
                            label: '浙江',
                            children: [
                                {
                                    value: 'hangzhou',
                                    label: '杭州',
                                    children: [
                                        {
                                            value: 'xihu',
                                            label: '西湖'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            value: 'jiangsu',
                            label: '江苏',
                            children: [
                                {
                                    value: 'nanjing',
                                    label: '南京',
                                    children: [
                                        {
                                            value: 'zhonghuamen',
                                            label: '中华门'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'dropdown',
                    overlay: {
                        type: 'menu',
                        items: [
                            {
                                key: 1,
                                title: 'this is the 1st menu item'
                            },
                            {
                                key: 2,
                                title: 'this is the 2nd menu item'
                            },
                            {
                                key: 3,
                                title: 'this is the 3rd menu item'
                            }
                        ]
                    },
                    trigger: [
                        'click'
                    ],
                    content: {
                        type: 'a',
                        style: {
                            display: 'inline-block',
                            marginLeft: '18px'
                        },
                        content: [
                            'Click me',
                            {
                                type: 'icon',
                                mode: 'down'
                            }
                        ]
                    },
                },
                {
                    type: 'tag',
                    content: 'Tag 2',
                    closable: true,
                    style: {
                        marginLeft: '15px'
                    }
                }
            ]
        },
        {
            type: 'div',
            content: [
                {
                    type: 'alert',
                    mode: 'success',
                    style: {
                        marginTop: '15px'
                    },
                    message: 'Success Tips',
                    showIcon: true
                },
                {
                    type: 'alert',
                    mode: 'error',
                    message: 'Error',
                    style: {
                        marginTop: '15px'
                    },
                    description: 'This is an error message about copywriting.',
                    showIcon: true
                }
            ]
        },
        {
            type: 'div',
            content: {
                type: 'collapse',
                activeKey: [
                    '1'
                ],
                style: {
                    marginTop: '20px'
                },
                content: [
                    {
                        type: 'panel',
                        key: '1',
                        header: 'This is panel header 1',
                        content: 'content 1'
                    },
                    {
                        type: 'panel',
                        key: '2',
                        header: 'This is panel header 2',
                        content: 'content 2'
                    },
                    {
                        type: 'panel',
                        key: '3',
                        header: 'This is panel header 3',
                        content: 'content 3'
                    }
                ]
            }
        },
        {
            type: 'div',
            style: {
                textAlign: 'center',
                marginTop: '25px',
                lineHeight: '40px'
            },
            content: [
                {
                    type: 'button',
                    content: 'Info Message',
                    onClick: function onClick(v) {
                        UF.message.config({
                            top: 150,
                            duration: 30
                        });
                        return UF.message.info('Info message.');
                    }
                },
                {
                    type: 'button',
                    style: {
                        marginLeft: '15px'
                    },
                    mode: 'primary',
                    content: 'Warning Notification',
                    onClick: function onClick(v) {
                        UF.notification.warning({
                            message: 'Notification Title',
                            duration: 30,
                            description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
                        });
                    }
                },
            ]
        }
    ];
    return Tab3;
})