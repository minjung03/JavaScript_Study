"use strict"

let codes = {
    "+49" : "독일",  // 키 값에 숫자가 오는 경우, 원하지 않아도 작은 것 부터 자동 정렬된다.
    "+41" : "스위스", // 이럴 때 팁! 앞을 문자열로 만들어주면 된다(약간의 속임수 정도~)
    "+34" : "한국",
    "+1" : "푸에르토리코"
};

for(let key in codes){
    console.log(key);
}


