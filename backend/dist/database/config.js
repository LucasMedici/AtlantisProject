"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("lista_gerson", "root", "admin", {
    host: "localhost",
    dialect: "mysql",
    define: {
        freezeTableName: true,
        createdAt: false,
        updatedAt: false,
    }
});
exports.default = db;
