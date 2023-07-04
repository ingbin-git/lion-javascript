/* ------------------ */
/* Global This        */
/* ------------------ */

var objectVariable = '전역 객체의 변수';
let declarativeVariable = '전역 변수';

// globalThis를 통해 접근 가능한 변수와 그렇지 않은 변수는?
console.log(globalThis)
console.log(globalThis.objectVariable);
console.log(globalThis.declarativeVariable);

// 전역 객체는 이전 버전과의 호환성으로 인해 JavaScript가 제거할 수 없는 실수로 간주됩니다. 
// 성능에 부정적인 영향을 미치며 일반적으로 혼란스럽습니다. 전역 객체를 사용한 변수 사용은
// 문제를 발생시킬 소지가 있고, 테스트가 어려우니 가급적 사용하지 않는 것이 좋습니다.


// 면접 단골 질문
Execution Context
[Global]
- Lexical Environment(어휘적 환경 - 말로 표현 가능한 환경) > Environment Record > Objcet Environment, Declarative Environment, This
 >> Objcet Environment > Binding Object 예) var
 >> Declarative Environment > 예) let, const
 >> This > GlobalThisValue

// Temperal Dead Zone(TDZ, 임시 사망지역 - 아무런 값도 들어있지 않은(할당되어 있지 않은) 상태) - let, const

- var는 undefined가 할당됨
- let, const는 아무런 값도 할당되지 않은 상태

// 면접 단골 질문
var와 let의 차이를 설명하시오.


전역 실행 컨텍스트 X
함수 > 함수 > 함수(함수형 프로그래밍)