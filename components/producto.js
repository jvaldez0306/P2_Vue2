Vue.component(
    'producto',
    {
        template:"<h1>Hola vue</h1>",
        data:function(){
            return{

                productos:[]
            }
        },
        methods:{
            getProductos:function(){
                axios.get('db.json').then(response =>{
                    this.productos = response.data
                })
            }
        }
    }

);