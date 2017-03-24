/**
 * Created by Godfery on 2017/3/24.
 */
export default function (element) {
    let selectedText;

    switch (element.nodeName) {
        case 'SELECT':
            element.focus();
            selectedText = element.value;
            break;
        case 'INPUT':
        case 'TEXTAREA':
            let isReadOnly = element.hasAttribute('readonly');

            if (!isReadOnly) {
                element.setAttribute('readonly', '');
            }

            element.select();
            element.setSelectionRange(0, element.value.length);

            if (!isReadOnly) {
                element.removeAttribute('readonly');
            }

            selectedText = element.value;
            break;
        default:
            if (element.hasAttribute('contenteditable')) {
                element.focus();
            }
            let selection = window.getSelection();
            let range = document.createRange();
            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);
            selectedText = selection.toString();
    }

    return selectedText;
}
