new Vue({
    el: '#app',
    data: {
        title: 'Hello, world!'
    },
    methods: {
        changeTitle: function(e) {
            this.title = e.target.value
        }
    } 
});