import ImgSpagheti from './spagheti.webp';

export const pages = (() => {
    const home = () => {
        const content = document.createElement('div');
        const toptext = document.createElement('p');
        toptext.innerHTML = 'Only the best spagheti';
    
        const spaghetiImg = document.createElement('img');
        spaghetiImg.src = ImgSpagheti;
        spaghetiImg.alt = 'plate of spagheti';
        spaghetiImg.style = 'height: 400px';
    
        const moto = document.createElement('p');
        moto.innerHTML = 'we only have one moto, the belly must grow';
    
        content.append(toptext, spaghetiImg, moto);
    
        return content;
    }

    const menu = () => {
        const content = document.createElement('div');
        const text = document.createElement('p');
        text.innerHTML = 'menu';
        content.append(text);
        return content;
    }

    const contact = () => {
        const content = document.createElement('div');
        const text = document.createElement('p');
        text.innerHTML = 'contact';
        content.append(text);
        return content;
    }

    return {
        home,
        menu,
        contact
    }
})();