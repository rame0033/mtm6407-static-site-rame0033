import DefaultTheme from 'vitepress/theme';
import Card from './components/Card.vue';
import Footer from './components/Footer.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './styles.scss'; 
import './custom.css'; 

if (typeof document !== "undefined") {
  import('bootstrap/dist/js/bootstrap.bundle.min.js'); // Load Bootstrap only in the browser
}

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Card', Card);
    app.component('Footer', Footer);
  }
};