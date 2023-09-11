import './app.css'
import App from './App.svelte'
import { register } from 'register-service-worker';

register('/service-worker.js', {});
const app = new App({
  target: document.getElementById('app'),
})

export default app
