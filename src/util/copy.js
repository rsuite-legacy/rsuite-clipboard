import { execCommandCopy, select } from './index';

export default function copy(text) {
    const isRTL = document.documentElement.getAttribute('dir') === 'rtl';

    const fakeElem = document.createElement('textarea');
    const yPosition = window.pageYOffset || document.documentElement.scrollTop;
    const fakeElemStyle = {
        // Prevent zooming on iOS
        fontSize: '12pt',
        // Reset box model
        border: '0',
        padding: '0',
        margin: '0',
        // Move element out of screen horizontally
        position: 'absolute',
        [isRTL ? 'right' : 'left']: '-9999px',
        top: `${yPosition}px`
    };
    Object.keys(fakeElemStyle).forEach((key) => {
        fakeElem.style[key] = fakeElemStyle[key];
    });

    fakeElem.setAttribute('readonly', '');
    fakeElem.value = text;
    document.body.appendChild(fakeElem);
    select(fakeElem);
    const result = execCommandCopy();
    fakeElem.remove();
    return result;
}
