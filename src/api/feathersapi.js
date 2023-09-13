import io from 'socket.io-client'
import { feathers } from '@feathersjs/feathers'
import socketio from '@feathersjs/socketio-client'
// import authentication from '@feathersjs/authentication-client';


const socket = io('http://localhost:3030')
// console.log(import.meta.env.PUBLIC_BACKEND_URI)

const client = feathers()

client.configure(socketio(socket))
console.log(client.services)
// client.configure(authentication())

export default client