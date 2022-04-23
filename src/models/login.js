import { DataTypes } from 'sequelize';
import { sequelize } from '../database/DB.js';

export const Login = sequelize.define('login_users', {
    
    email: {
        type: DataTypes.STRING
    },
    contraseña: {
        type: DataTypes.STRING,        
    }   
},
    {
        timestamps: false
    }
)