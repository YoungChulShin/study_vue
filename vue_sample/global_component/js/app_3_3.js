Vue.component('sibling-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'    
});

Vue.component('child-component', {
    props: ['propsdata'],
    template: '<p>{{ propsdata }}</p>'
});

var app = new Vue({
    el: '#app', 
    data: {
        message: 'Hello Vue! pass from the Parent Component',
        anotherMessage: 'Hello Vue.js! pass from the Parent Component'
    }
});