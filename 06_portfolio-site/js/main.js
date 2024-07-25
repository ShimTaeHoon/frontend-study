// ScrollMagic 사용법(프론트엔드 교재에도 나와 있음,사용법)

// 스크롤 감지
// 섹션태그이면서 scroll-spy인 애를 가져옴
let spyEls = document.querySelectorAll('section.scroll-spy');
console.log(spyEls);

spyEls.forEach(function (spyEl){
  new ScrollMagic.Scene({ // 감시할 장면 추가 및 옵션 지정
    triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
    triggerHook: 0.5 // 화면의 50% 지점에서 보여짐 여부 감시(0~1사이 지정)
  })
  .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
  .addTo(new ScrollMagic.Controller());
});

// 모달창 띄우기
// 하나만 가져올때는 All말고 querySelector로
let modalEl = document.querySelector('#modal');
// All을 써야만 다 가져옴
let modalBtn = document.querySelectorAll('.port .btn-modal');
let closeBtn = document.querySelector('#modal .btn-close');
console.log(modalBtn);
console.log(modalBtn[0]);
console.log(modalBtn[1]);

// 클릭이 발생하면, 두번째 인자값으로 함수를 전달함
// [0] 0번인덱스 클릭 시 > 클릭하면 콘솔에 클릭됨 찍힘
// 자바스크립트 에러나면 콘솔창 확인하기
modalBtn[0].addEventListener('click', function () {
  // console.log('클릭됨');

  // index에 modal이 display:none인데 flex로 바꾸기
  modalEl.style.display = 'flex';

});

closeBtn.addEventListener('click', function () {
  modalEl.style.display = 'none';
  
});

