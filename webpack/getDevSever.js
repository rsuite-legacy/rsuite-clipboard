/**
 * Created by Godfery on 2017/3/10.
 */
module.exports = function (NODE_TYPE) {
    if (NODE_TYPE !== 'integration') {
        return {};
    }
    return {
        proxy: {
            '/upload': {
                target: 'http://localhost:3030',
                secure: false
            }
        }
    };
};
