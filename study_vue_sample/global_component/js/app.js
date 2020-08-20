// todo-footer
Vue.component('todo-footer', {
    template: '<p>This is another global component</p>'
});

var listCmp = {
    template: '<p>This is another local component</p>'
};

var app = new Vue({
    el: '#app',
    data: {
        message: 'This is a parent component'
    },
    components: {
        'todo-` `': listCmp
    }
});