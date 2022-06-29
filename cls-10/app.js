var app = Vue.createApp({
    data() {
        return { bgColor:"red",textColor:"black" };
    },
    methods:{
        setClass(color){
            this.activeClass = color
        }

    }
});
app.mount("#app");