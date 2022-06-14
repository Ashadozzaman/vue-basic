var app = Vue.createApp({
    data() {
        return { name:"" };
    },
    methods:{
        // keyupHandel(e){
        //     this.name = e.target.value;
        // },
        submitEventHandel(e){
            console.log(e.target);
        },
        handleCardClick(e){
            console.log(e);
            console.log('Card');
        },
        viewHandleClick(e){
            console.log(e);
            // e.stopPropagation();
            console.log('View');
        }

    }
});
app.mount("#app");