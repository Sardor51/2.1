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
        check(){
            if(this.type=='Csgo'){
            for(let key in this.csgo){
                if(this.csgo[key].toLowerCase()==this.text.toLowerCase()){
                    alert('Такой игрок уже существует')
                    this.text=''
                    this.type=''
                    
                }                
            }}else if(this.type=='Dota'){
                for(let key in this.dota){
                    if(this.dota[key].toLowerCase()==this.text.toLowerCase()){
                        alert('Такой игрок уже существует')
                        this.text=''
                        this.type=''
                        
                    }                
            }}else if(this.type=='Minecraft'){
                for(let key in this.minecraft){
                    if(this.minecraft[key].toLowerCase()==this.text.toLowerCase()){
                        alert('Такой игрок уже существует')
                        this.text=''
                        this.type=''
                        
            }
    }
}}}}


Vue.createApp(app).mount('#app')