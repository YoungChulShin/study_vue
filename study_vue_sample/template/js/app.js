var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js',
        newMessage: 'Hello New Vue.js',
        uid: '20',
        flag: false
    },
    methods: {
        clickBtn : function() {
            alert("clickBtn");
        }
    }
});