define(function() {
    return [
        {
            type: "menu",
            mode: "horizontal",
            theme: "dark",
            content: [
                {
                    type: "menu-item",
                    key: "mail",
                    content: {
                        type: 'link',
                        to: '/card',
                        content: [
                            {
                                type: "icon",
                                mode: "mail"
                            },
                            "Navigation One"
                        ]
                    }
                },
                {
                    type: "sub-menu",
                    key: "sub",
                    title: [
                        {
                            type: "icon",
                            mode: "setting"
                        },
                        "Navigation Two - Submenu"
                    ],
                    content: {
                        type: "menu-item-group",
                        title: "Item 1",
                        content: [
                            {
                                type: "menu-item",
                                key: "setting:1",
                                content: {
                                    type: 'link',
                                    to: '/card2',
                                    content: "Option 1"
                                }
                            },
                            {
                                type: "menu-item",
                                key: "setting:2",
                                content: {
                                    type: 'link',
                                    to: '/card2/card3',
                                    content: "Option 2"
                                }
                            }
                        ]
                    }
                }
            ]
        },
        {
            type: 'breadcrumb',
            style: {margin: '12px 24px'}
        },
        {
            type: 'div',
            style: {background: '#eee', padding: '35px'},
            childrenHolder: true,
            content: {
                type: 'div',
                style: {background: '#ddd', padding: '25px'}
            }
        }
    ];
});
