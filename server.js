import { createServer } from 'miragejs';

export default function makeServer(){
    createServer({
        routes(){
            this.namespace = '/api'

            this.get('/someEndpoint', () => {
                return "<span>Returned from server</span>"
            })
        }
    })
}