var app = Vue.createApp({
    data() {
        return {
            student:{
                name:"Ashadozzaman",
                age: 27,
                phone: "0187654321",
                link:"https://www.google.com/"
            },
            htmlcode:'<h1>Html Code</h1>'

        };
    }
});
app.mount("#app");