define(function() {
    const Card1 = {
        type: 'card',
        title: 'Card title',
        bordered: false,
        loading: true
    };
    const Card2 = {
        type: 'card',
        title: 'Card title',
        bordered: false,
        childrenHolder: true
    };
    const Card3 = {
        type: 'card',
        title: 'Card title 3',
        loading: true
    };
    return {
        Card1, Card2, Card3
    };
});