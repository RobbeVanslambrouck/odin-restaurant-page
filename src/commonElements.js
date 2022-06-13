import { pages } from './pages'

const navItem = () => {
    const makeItem = (text, eventHandler = () => {}) => {
        const item =document.createElement('li');
        const link = document.createElement('a');
        link.onclick = (e) => {
            e.preventDefault();
            e.stopPropagation();
            eventHandler();
        }
        link.innerHTML = text;
        link.href = '#';
        item.append(link);

        return item
    }

    return {
        makeItem
    }
}

export const elements = (() => {

    const header = (content) => {
        const header = document.createElement('header');
    
        const logo = document.createElement('a');
        const h1 = document.createElement('h1');
        h1.innerHTML = 'factorio foods';
        logo.href = '#';
        logo.append(h1);
    
        const nav = document.createElement('nav');
        const list = document.createElement('ul');

        const home = navItem().makeItem('home', () => {
            content.innerHTML = '';
            content.append(pages.home());
        });
        const menu = navItem().makeItem('menu', () => {
            content.innerHTML = '';
            content.append(pages.menu());
        });
        const contact = navItem().makeItem('contact', () => {
            content.innerHTML = '';
            content.append(pages.contact());
        });
        list.append(home, menu, contact);
    
        nav.append(logo, list);
        header.append(nav);
    
        return header;
    }

    const footer = () => {
        const footer = document.createElement('footer');
        const madeBy = document.createElement('p');
        madeBy.innerHTML = 'made by: ';
        const githubLink = document.createElement('a');
        githubLink.href = 'https://github.com/RobbeVanslambrouck';
        const gitName = document.createElement('p');
        gitName.innerHTML = 'robbe vanslambrouck';
    
        const gitLogo = document.createElement('i');
        gitLogo.className = 'fa-brands fa-github';
    
        githubLink.append(gitLogo, gitName);
    
        footer.append(madeBy, githubLink);
    
        return footer;
    }

    return {
        footer,
        header
    }
})();