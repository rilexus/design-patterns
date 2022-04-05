import DBConnection from './DBConnection'

const dbConnection1 = new DBConnection()
const dbConnection2 = new DBConnection()

console.log(dbConnection1 === dbConnection2)