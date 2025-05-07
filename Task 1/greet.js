const dotenv = require('dotenv')
const InfoModule = () =>{
    dotenv.config();
    console.log("Current Dir : ", __dirname)
    console.log("Current File : ", __filename)

    console.log("Memory Usage : ")
    console.log("RSS : ", process.memoryUsage().rss )
    console.log("Heap Total : ", process.memoryUsage().heapTotal )
    console.log("Heap Used : ", process.memoryUsage().heapUsed )

    console.log("ENV Mode : ",process.env.MODE)
}

module.exports = {InfoModule};