var app = Vue.createApp({
    data() {
        return {
            skills:[
                {skill:'PHP',exp:3},
                {skill:'Laravel',exp:3},
                {skill:'MySql',exp:4},
                {skill:'Ajax',exp:7},
            ],
            newSkill:''
        };
    },
    methods: {
        addSkills(){
            this.skills.push(this.newSkill);
            this.newSkill = "";
        },
        remove(i){
            this.skills.splice(i,1);
        }
    }
});
app.mount("#app");