Vue.component(
    'tarjetas_producto',
    {
        template:"<h1></h1>",
        data:function(){
            return{

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