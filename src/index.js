import { pages } from './pages';
import { elements } from './commonElements';
import './style.css';

const pageContent =  (() => {
    const body = document.querySelector('body');
    const page = document.createElement('div');
    page.id = 'content';

    page.append(pages.home());

    body.append(elements.header(page));
    body.append(page);
    body.append(elements.footer());
})();