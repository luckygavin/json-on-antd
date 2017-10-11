define(function() {
    var Card1 = {
        type: 'card',
        title: 'Card title',
        bordered: false,
        loading: true
    };
    var Card2 = {
        type: 'card',
        title: 'Card title',
        bordered: false,
        childrenHolder: true
    };
    var Card3 = {
        type: 'card',
        title: 'Card title 3',
        loading: true
    };
    return {
        Card1: Card1,
        Card2: Card2,
        Card3: Card3
    };
});