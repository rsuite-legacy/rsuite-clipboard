export default function () {
    let succeeded;
    try {
        succeeded = document.execCommand('copy');
    } catch (err) {
        succeeded = false;
    }
    return succeeded;
}
