var app = Vue.createApp({
    data() {
        return { name:"" };
    },
    methods:{
        keyupHandel(e){
            this.name = e.target.value;
        },
        submitEventHandel(){
            console.log("Form Submited");
        }
    }
});
app.mount("#app");