const mongoose = require('mongoose');
const Route = require("./../models/Route")
require('dotenv').config()

//data base conection
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//dabaBase

const routes =[
{
    "title":"Nevado de Toluca (Periferia Cráter) - México",
    "state":"Estado de México",
    "town": ["Calimaya", "Zi­nacantepec", "Tenango del Valle ", "Villa Guerrero"],
    "altitude":4677,
    "lodging":"Hotel del Real",
    "magicTown":"Zinacantepec",
    "hardness":20,
     "description": "Empezamos a caminar 9:50am, al inicio hay que ir despacio ya que la altura golpea. Decidimos hacer una ruta bien bonita, algo técnica. Cuando llegamos al paso del Quetzal decidimos girar a la izquierda, a las 10:30am estábamos en el Pico Humboldt, tiene buenas vistas al Izta y al Popo. Luego continuamos la travesía de forma que se camina por la periferia del cráter, hasta llegar al Pico del Águila en 2:35min (2da cumbre).", 
    "imgUrl":"https://www.eleconomista.com.mx/__export/1626134988084/sites/eleconomista/img/2021/07/12/nevado_de_toluca.jpg_423392900.jpg"
},{
    "title":"La Malinche, México",
    "state":"Tlaxcala - San Luis",
    "town": ["Huamantla"],
    "altitude":4442,
    "lodging":"Hotel Cuamanco Huamantla",
    "magicTown":"Huamantla",
    "hardness":40,
    "description": "Llegamos al bosque de La Malinche a unas cabañas muy bonitas y bien equipadas. Ahí descansamos y al amanecer iniciamos la caminata por el bosque con un ascenso gradual que se pone muy empinado al acercarse al páramo. Ya en el páramo se inicia el ascenso por una ladera bastante vertical en la última parte hay mucha roca suelta al llegar a la cumbre." ,
    "imgUrl":"https://elsouvenir.com/wp-content/uploads/2018/10/Volca%CC%81n-La-Malinche-Foto-Alyse-y-Remi-2.jpg"
}
];

const createRoutes =  async()=>{
    const newRoute = await Route.create(routes)
    console.log("Nueva ruta creada:", newRoute)
    mongoose.connection.close()
}
createRoutes()