import Sequelize from 'sequelize'
export const sequelize = new Sequelize(
    'agrobox', 'postgres', 'postgres',
    {
        host: 'localhost',
        dialect: 'postgres'
    })
