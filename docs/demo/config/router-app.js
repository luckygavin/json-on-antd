define(function() {
    return {
        type: 'div',
        style: {
            height: '100%'
        },
        content: [
            {
                type: "menu",
                mode: "horizontal",
                theme: "dark",
                style: {
                    paddingLeft: '5%'
                },
                items: [
                    {
                        key: "theme",
                        link: '/theme',
                        icon: 'mail',
                        title: "定制主题"
                    },
                    {
                        type: "menu-item",
                        key: "mail",
                        link: '/card',
                        icon: 'mail',
                        title: 'Navigation One'
                    },
                    {
                        key: "sub",
                        icon: 'setting',
                        title: 'Navigation Two - Submenu',
                        childItems: [
                            {
                                key: "setting:1",
                                link: '/card2',
                                title: 'Option 1'
                            },
                            {
                                key: "setting:2",
                                link: '/card2/card3/customer',
                                title: 'Option 2'
                            }
                        ]
                    }
                ]
            },
            // {
            //     type: 'breadcrumb',
            //     style: {margin: '12px 24px'}
            // },
            {
                type: 'div',
                className: 'content',
                style: {
                    width: '100%',
                    height: '100%'
                },
                childrenHolder: true,
                // content: {
                //     type: 'div',
                //     style: {background: '#ddd', padding: '25px'}
                // }
            }
        ]
    };
});
