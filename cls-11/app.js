var app = Vue.createApp({
    data() {
        return {
            skills:[
                {name:'PHP', exp:3},
                {name:'Laravel', exp:3},
                {name:'MySql', exp:4},
                {name:'Ajax', exp:7},
            ],
            newSkill:{name:"",exp:""}
        };
    },
    methods: {
        addSkills(){
            this.skills.push({name:this.newSkill.name,exp:0});
            this.newSkill = {};
        },
        remove(i){
            this.skills.splice(i,1);
        }
    }
});
app.mount("#app");