/* import { PI, getArea, getCircumferece } from "./circle.js";
console.log(PI, getArea(1), getCircumferece(1));

import * as circle from "./circle.js"; 
import circle from "./circle.js";               // 기본값 수출 했을때는 별도 지정 없이 바로 이름 지정하고 파일 불러오면 된다.
console.log(circle.PI, circle.getArea(1), circle.getCircumferece(1)); */

import lodash from "lodash";        // 라이브러리는 그냥 이렇게 부르면 된다.
const arr = [1, 1, 1, 2, 2, 1, 1, 4, 4, 3, 2]
const uniqueArr = lodash.uniqBy(arr);

console.log(uniqueArr);         // 중복값 제외