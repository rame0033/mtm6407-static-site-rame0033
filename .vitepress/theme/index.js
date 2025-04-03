import DefaultTheme from 'vitepress/theme';
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles.scss'; 
import './custom.css'; 

export default {
  ...DefaultTheme,
  enhanceApp({app}){
    app.component('Card', Card);
    app.component('Footer', Footer);
  }
};
