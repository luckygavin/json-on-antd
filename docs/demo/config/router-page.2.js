define({
    type: 'card',
    title: 'Card title 3',
    loading: true,
    beforeCreate(params, self) {
        params.title = self._root.props.params.title || params.title;
        return params;
    },
    onClick(...params) {
        console.log(params);
    }
});