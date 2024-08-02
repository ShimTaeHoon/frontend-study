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

// 현재 연도 표시
// 날짜 정보를 가진 JS의 Date 객체를 활용
console.log(new Date().getFullYear());// 현재 연도 정보가 숫자 데이터로 반환됨

let thisYear = document.querySelector('.this-year');
// 텍스트만 넣을 수 있는것 textContent // 태그까지 넣는건 따로 있음
thisYear.textContent = new Date().getFullYear();

// 페이지 최상단으로 이동
// 쿼리셀렉터 아이디 선택자로 to-top 가져오기..
let toTopBtn = document.querySelector('#to-top');

// 페이지에 스크롤 이벤트 감지를 추가
// window: 브라우저 창 객체
// 아래 scroll은 실제 윈도우 창의 스크롤 이벤트 감지
window.addEventListener('scroll', function(){
  console.log(window.scrollY); // y축 스크롤 위치를 콘솔에 찍어주기

  // 페이지 스크롤 위치가 
  // 500px을 넘으면 요소를 보이고,
  // 500px을 넘지 않으면 요소 숨기기!
  // scrollY가 숫자라 숫자랑 비교해야함(조건문 쓸때)
  if (window.scrollY > 500) {
    // 요소 보이기

    // style속성으로 조작하기
    // 자바스크립트는 '',"" 둘다 허용 됨 (문자열 쓸 때)
    // toTopBtn.style.display = 'flex'

    // 애니메이션 처리를 하고 싶다면
    toTopBtn.style.opacity = 1;
    // 버튼 보일때 원래 위치로
    toTopBtn.style.transform = 'translateX(0)';

  } else {
    // 요소 숨기기
    // display는 애니메이션 처리 안됨
    // toTopBtn.style.display = 'none'

    // 애니메이션 처리를 하고 싶다면
    toTopBtn.style.opacity = 0;
    // 버튼 opacity 0 될때 바깥쪽으로 사라지기 위해 100px
    toTopBtn.style.transform = 'translateX(100px)';
  }
});


// 모바일용 메뉴
let btnHamburger = document.querySelector('.btn-hamburger');
let navEl = document.querySelector('header nav');
// 데이터가 하나가아니라 querySelector가 아닌 All로 가져오기
// let은 값을 바꿀수 있는 변수 const(constant)는 (자바의 final 상수)
let menuItems = document.querySelectorAll('header nav ul li a');
console.log(menuItems);

btnHamburger.addEventListener('click', function() {
  // JS로 클래스를 제어하는 메소드
  // add()/remove()/toggle()/contains()
  
  // if (navEl.classList.contains('active')) {
  //   navEl.classList.remove('active');
  // } else {
  //   navEl.classList.add('active');
  // }

  // 위의 코드와 같은 기능
  navEl.classList.toggle('active');
  
});

  // forEach반복문으로 a태그5개에다가 이벤트 리스너...
  // 클릭할때마다 active가사라짐
menuItems.forEach(function (menuItem) {
  menuItem.addEventListener('click', function (){
    navEl.classList.remove('active');
  });
});

