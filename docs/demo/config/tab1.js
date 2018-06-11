define(function() {
    var Tab1 = [
        {
            type: 'h2',
            style: {
                marginTop: '10px',
                paddingLeft: '30px'
            },
            content: '组件元素列表'
        },
        {
            type: 'row',
            style: {
                lineHeight: '30px',
                margin: '15px 0px 24px'
            },
            content: [
                {
                    type: 'col',
                    span: '6',
                    style: {
                        textAlign: 'right',
                        paddingRight: '8px'
                    },
                    content: '输入框:'
                },
                {
                    type: 'col',
                    span: '18',
                    content: [
                        {
                            type: 'input',
                            size: 'default',
                            defaultValue: '默认输入框',
                            style: {
                                marginRight: '8px'
                            }
                        },
                        {
                            type: 'input',
                            size: 'large',
                            defaultValue: 'large输入框',
                            style: {
                                marginRight: '15px'
                            }
                        },
                        {
                            type: 'input',
                            size: 'small',
                            defaultValue: 'small输入框'
                        }
                    ]
                }
            ]
        },
        {
            type: 'row',
            style: {
                marginBottom: '24px',
                lineHeight: '30px'
            },
            content: [
                {
                    type: 'col',
                    span: '6',
                    style: {
                        textAlign: 'right',
                        paddingRight: '8px'
                    },
                    content: '下拉选框:'
                },
                {
                    type: 'col',
                    span: '18',
                    content: [
                        {
                            type: 'select',
                            defaultChecked: true,
                            defaultValue: '1',
                            style: {
                                marginRight: '15px'
                            },
                            options: [{
                                value: '1',
                                label: '移动'
                            }, {
                                value: '2',
                                label: '联通'
                            }, {
                                value: '3',
                                label: '电信'
                            }, {
                                value: '4',
                                label: '虚拟运营商'
                            }, {
                                value: '5',
                                label: '全网通'
                            }]
                        },
                        {
                            type: 'select',
                            defaultChecked: true,
                            defaultValue: '1',
                            size: 'large',
                            style: {
                                marginRight: '15px'
                            },
                            options: [{
                                value: '1',
                                label: '移动'
                            }, {
                                value: '2',
                                label: '联通'
                            }, {
                                value: '3',
                                label: '电信'
                            }, {
                                value: '4',
                                label: '虚拟运营商'
                            }, {
                                value: '5',
                                label: '全网通'
                            }]
                        },
                        {
                            type: 'select',
                            defaultChecked: true,
                            defaultValue: '1',
                            size: 'small',
                            options: [{
                                value: '1',
                                label: '移动'
                            }, {
                                value: '2',
                                label: '联通'
                            }, {
                                value: '3',
                                label: '电信'
                            }, {
                                value: '4',
                                label: '虚拟运营商'
                            }, {
                                value: '5',
                                label: '全网通'
                            }]
                        }
                    ]
                },
            ]
        },
        {
            type: 'row',
            style: {
                marginBottom: '24px',
                lineHeight: '30px'
            },
            content: [
                {
                    type: 'col',
                    span: '6',
                    style: {
                        textAlign: 'right',
                        paddingRight: '8px'
                    },
                    content: '单选:'
                },
                {
                    type: 'col',
                    span: '14',
                    content: [
                        {
                            type: 'radio',
                            defaultValue: '移动',
                            options: ['移动', '联通', '电信']
                        },
                        {
                            type: 'loading',
                            style: {
                                marginLeft: '30px'
                            },
                            loading: true
                        }
                    ]
                }
            ]
        },
        {
            type: 'row',
            style: {
                marginBottom: '24px',
                lineHeight: '30px'
            },
            content: [
                {
                    type: 'col',
                    span: '6',
                    style: {
                        textAlign: 'right',
                        paddingRight: '8px'
                    },
                    content: 'button样式单选:'
                },
                {
                    type: 'col',
                    span: '14',
                    content: [
                        {
                            type: 'radio',
                            showAsButton: true,
                            defaultValue: '移动',
                            options: ['移动', '联通', '电信']
                        },
                        {
                            type: 'checkbox-group',
                            options: ['移动', '联通', '电信']
                        }
                    ]
                }
            ]
        },
        {
            type: 'row',
            style: {
                marginBottom: '24px',
                lineHeight: '30px'
            },
            content: [
                {
                    type: 'col',
                    span: '6',
                    style: {
                        textAlign: 'right',
                        paddingRight: '8px'
                    },
                    content: '日期选择:'
                },
                {
                    type: 'col',
                    span: '14',
                    content: {
                        type: 'date-picker',
                        format: 'YYYY-MM-DD',
                    }
                }
            ]
        },
        {
            type: 'row',
            style: {
                marginBottom: '24px',
                lineHeight: '30px'
            },
            content: [
                {
                    type: 'col',
                    span: '6',
                    style: {
                        textAlign: 'right',
                        paddingRight: '8px'
                    },
                    content: '分页:'
                },
                {
                    type: 'col',
                    span: '16',
                    content: {
                        type: 'pagination'
                    }
                }
            ]
        },
        {
            type: 'row',
            style: {
                marginBottom: '24px',
                lineHeight: '30px'
            },
            content: [
                {
                    type: 'col',
                    span: '6',
                    style: {
                        textAlign: 'right',
                        paddingRight: '8px'
                    },
                    content: '迷你分页:'
                },
                {
                    type: 'col',
                    span: '16',
                    content: {
                        type: 'pagination',
                        size: 'small'
                    }
                }
            ]
        },
        {
            type: 'row',
            style: {
                marginBottom: '24px',
                lineHeight: '30px'
            },
            content: [
                {
                    type: 'col',
                    span: '6',
                    style: {
                        textAlign: 'right',
                        paddingRight: '8px'
                    },
                    content: '步骤:'
                },
                {
                    type: 'col',
                    span: '14',
                    content: {
                        type: 'steps',
                        current: 1,
                        content: [
                            {
                                type: 'step',
                                title: '1',
                                description: 'one'
                            },
                            {
                                type: 'step',
                                title: '2',
                                description: 'two'
                            },
                            {
                                type: 'step',
                                title: '3',
                                description: 'three'
                            }
                        ]
                    }
                }
            ]
        },
        {
            type: 'row',
            style: {
                marginBottom: '35px',
                lineHeight: '30px'
            },
            content: [
                {
                    type: 'col',
                    span: '6',
                    style: {
                        textAlign: 'right',
                        paddingRight: '8px'
                    },
                    content: '进度条:'
                },
                {
                    type: 'col',
                    span: '14',
                    content: {
                        type: 'progress',
                        // mode: 'circle',
                        percent: 75,
                        status: 'active'
                    }
                }
            ]
        },
        {
            type: 'row',
            style: {
                marginBottom: '24px',
                textAlign: 'center'
            },
            content: [
                {
                    type: 'col',
                    span: '6',
                    content: ''
                },
                {
                    type: 'col',
                    span: '14',
                    style: {
                        textAlign: 'left'
                    },
                    content: [
                        {
                            type: 'tooltip',
                            title: 'TOOLTIP',
                            content: {
                                type: 'button',
                                mode: 'default',
                                content: '清除',
                                size: 'large',
                                icon: 'delete'
                            }
                        },
                        {
                            type: 'popover',
                            title: 'This is a Popover',
                            body: {
                                type: 'span',
                                content: '新年快乐！'
                            },
                            content: {
                                type: 'button',
                                mode: 'primary',
                                content: '提交',
                                icon: 'search',
                                style: {
                                    marginLeft: '10px'
                                }
                            }
                        },
                        {
                            type: 'button',
                            mode: 'danger',
                            size: 'small',
                            content: '基本弹框',
                            style: {
                                marginLeft: '10px'
                            },
                            onClick: function () {
                                return UF('my-modal').show();
                            }
                        },
                        {
                            type: 'button',
                            size: 'mini',
                            content: 'mini按钮',
                            style: {
                                marginLeft: '10px'
                            }
                        },
                        {
                            type: 'button',
                            size: 'small',
                            content: 'success modal',
                            style: {
                                marginLeft: '10px'
                            },
                            onClick: function () {
                                UF.Modal.success({
                                    title: '这是一个成功提示。',
                                    content: 'some messages...some messages...'
                                });
                            }
                        },
                        {
                            type: 'modal',
                            name: 'my-modal',
                            visible: false,
                            title: '基本弹框',
                            content: {
                                type: 'div',
                                content: 'Some contents...Some contents...Some contents...Some contents...Some contents...'
                            }
                        }
                    ]
                }
            ]
        }
    ];
    return Tab1;
});