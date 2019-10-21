const add = (x, y) => {
    return x + y;
};

const whatEnvironment = () => {
    if (process.env.NODE_ENV === 'development') {
        return 1;
    } else {
        return 0;
    }
};

const say = '早上。。。算了，艹你们妈';

export default {
    say, add, whatEnvironment
}