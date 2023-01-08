const app = {
    data() {
        return {
            text: '',
            csgo:['Zafar','Ilya'],
            dota:['Akmal','Amir'],
            minecraft:['Sardor','Saidakbar'],
            type:'',
        }
    },
    methods:{
        add() {
            if(this.text != ''){
            if(this.type=='Csgo'){
                this.csgo.push(this.text)
            }else if(this.type=='Dota'){
                this.dota.push(this.text)
            }else if(this.type=='Minecraft'){
                this.minecraft.push(this.text)
            }}
            this.text=''
            this.type=''
        },
    }
}


Vue.createApp(app).mount('#app')