
import { Sequelize } from 'sequelize';



const db = new Sequelize("lista_gerson", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
  define: {
    freezeTableName: true,
    createdAt: false,
    updatedAt: false,
  }
});



export default db;