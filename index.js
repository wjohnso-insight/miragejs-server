import makeServer from "./server"
import axios from 'axios'
import 'regenerator-runtime/runtime'

console.log('Mirage server project is running...');
console.log('Initializing server...');

makeServer();

async function testEndpoint(){
   const response = await axios.get('/api/someEndpoint');
   return response.data
}

async function addMarkdown(){
    let markdown = await testEndpoint();
    const body = document.querySelector('body');
    body.innerHTML = markdown;
}

addMarkdown();



