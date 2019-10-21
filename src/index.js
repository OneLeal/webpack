import './style/index.less';
import common from "./common/common";
function print(str) {
    console.log('something to say: ' + str);
}

print('Hello, welcome to learn webpack !');

let x = common.whatEnvironment();
if (x) {
    print('开发环境');
} else {
    print('生产环境');
}

print(common.say);