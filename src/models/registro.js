import { DataTypes } from 'sequelize';
import { sequelize } from '../database/DB.js';
import {Login} from './login.js'

export const Register = sequelize.define('register_users', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },
    
    name: {
        type: DataTypes.STRING
    },
    surname: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING,
        primaryKey: true,

    },
    contraseña: {
        type: DataTypes.STRING,

    },
    confirmacion: {
        type: DataTypes.STRING
    },
},
    {
        timestamps: false
    });

    Register.hasMany(Login,{
        foreignKey: 'usuario_email',
        sourceKey: 'email',
    })

    Login.hasOne(Register,{
        foreignKey: 'usuario_email',
        sourceKey: 'email',
    })

