import app from './app.js'
import { sequelize } from './database/DB.js';

async function main() {
    try{
    await sequelize.sync({});
    console.log('Todo bien por ahora');
    app.listen(3000);
    console.log('listening on port 3000');
    }catch(error){
        console.log('no se pudo conectar a la base de datos: ',error);
    }   
}

main();
