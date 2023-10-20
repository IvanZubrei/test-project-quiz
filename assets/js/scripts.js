const sitesPopup = document.querySelector('.btn__open-popup');
const sitesPopupOpenClose = document.querySelector('.modal__contact');
const modalBtnClose = document.querySelector('.modal-contact-container__btn-close');
const modalContactBtn = document.querySelector('.modal__contact-btn');
const modalDataSentPopupOpenClose = document.querySelector('.modal__data-sent');
const modalDataSentBtn = document.querySelector('.modal__data-sent-btn');
const modalDataSentBtnClose = document.querySelector('.modal__data-sent__btn-close');
const testsClose = document.querySelector('.tests');
const testsBtn = document.querySelector('.tests__btn');
const testsSlide2Open = document.querySelector('.tests__slide2');
const testsSlide2Close = document.querySelector('.tests__slide2-close__btn');
const testsSlide2OpenBtn = document.querySelector('.tests__slide2-open__btn');
const testsSlide3Open = document.querySelector('.tests__slide3');
const testsSlide3Close = document.querySelector('.tests__slide3-close__btn');
const testsSlide3OpenBtn = document.querySelector('.tests__slide3-open__btn');
const blockQuestionAnswerOpen = document.querySelector('.block__question-answer-open');
const blockTitleOpen = document.querySelector('.block__title-open');
const blocktextOpen = document.querySelector('.block__text-open');
const blockTitleOpen2 = document.querySelector('.block__title-open2');
const blocktextOpen2 = document.querySelector('.block__text-open2');
const blockQuestionAnswer2OpenClose = document.querySelector('.block__question-answer2');
const blockQuestionAnswer3OpenClose = document.querySelector('.block__question-answer3');
const menuBtnOpen = document.querySelector('.menu__btn-open');
const navListOpenClose = document.querySelector('.nav-list');
const headerContacts = document.querySelector('.contacts');
const menuBtnCloseNav = document.querySelector('.menu__btn-close-nav');

menuBtnOpen.addEventListener('click', e => {  
  navListOpenClose.classList.toggle("nav-list-open-close");
  headerContacts.classList.toggle("nav-list-open-close");
  menuBtnOpen.classList.toggle("nav-list-open-close");
  menuBtnCloseNav.classList.toggle("nav-list-open");
});

menuBtnCloseNav.addEventListener('click', e => {  
  navListOpenClose.classList.toggle("nav-list-open-close");
  headerContacts.classList.toggle("nav-list-open-close");
  menuBtnOpen.classList.toggle("nav-list-open-close");
  menuBtnCloseNav.classList.toggle("nav-list-open");
});

const toggleSitesPopup = () => {
  sitesPopupOpenClose.classList.toggle("modal__contact-open-close");   
};

sitesPopup.addEventListener('click', e => {
  e.stopPropagation();
  toggleSitesPopup();
});

document.addEventListener('click', e => {
  let target = e.target;
  let its_sitesPopupOpenClose = target == sitesPopupOpenClose || sitesPopupOpenClose.contains(target);
  let its_sitesPopup = target == sitesPopup;
  let sitesPopupOpenClose_is_active = sitesPopupOpenClose.classList.contains('modal__contact-open-close');
  
  if (!its_sitesPopupOpenClose && !its_sitesPopup && sitesPopupOpenClose_is_active) {
    toggleSitesPopup();
  }
});

modalBtnClose.addEventListener('click', e => {
  sitesPopupOpenClose.classList.remove("modal__contact-open-close");
});

modalContactBtn.addEventListener('click', e => {
  sitesPopupOpenClose.classList.remove("modal__contact-open-close");
  modalDataSentPopupOpenClose.classList.toggle("modal__data-sent-open-close");
});

modalDataSentBtn.addEventListener('click', e => {
  modalDataSentPopupOpenClose.classList.toggle("modal__data-sent-open-close");
});

modalDataSentBtnClose.addEventListener('click', e => {
  modalDataSentPopupOpenClose.classList.toggle("modal__data-sent-open-close");
});

let input = document.getElementById("inputTag");
let imageName = document.getElementById("imageName")

  input.addEventListener("change", ()=>{
let inputImage = document.querySelector("input[type=file]").files[0];
    imageName.innerText = inputImage.name;
});

testsBtn.addEventListener('click', e => {
  testsClose.classList.add("tests__slide");
  testsSlide2Open.classList.remove("tests__slide-cloce-open");
  blockQuestionAnswer2OpenClose.classList.remove("block__question-answer2-open-close");  
  blockQuestionAnswerOpen.classList.add("block__question-answer-activ");
  blockTitleOpen.classList.add("block__title-activ");
  blocktextOpen.classList.add("block__text-activ");
  blockQuestionAnswer2OpenClose.classList.add("block__question-answer2-activ");
});

testsSlide2Close.addEventListener('click', e => {
  testsClose.classList.remove("tests__slide");
  testsSlide2Open.classList.add("tests__slide-cloce-open");
  blockQuestionAnswer2OpenClose.classList.add("block__question-answer2-open-close");  
  blockQuestionAnswerOpen.classList.remove("block__question-answer-activ");
  blockTitleOpen.classList.remove("block__title-activ");
  blocktextOpen.classList.remove("block__text-activ");

});

testsSlide2OpenBtn.addEventListener('click', e => {  
  testsSlide3Open.classList.remove("tests-slide3__close-open");
  testsSlide2Open.classList.add("tests__slide-cloce-open");
  blockQuestionAnswer3OpenClose.classList.remove("block__question-answer3-open-close");
  blockQuestionAnswer3OpenClose.classList.add("block__question-answer3-activ");
  blockQuestionAnswer2OpenClose.classList.add("block__question-answer2-activ-none");
  blockTitleOpen2.classList.add("block__title-activ");
  blocktextOpen2.classList.add("block__text-activ");
});


testsSlide3Close.addEventListener('click', e => {  
  testsSlide3Open.classList.add("tests-slide3__close-open");
  testsSlide2Open.classList.remove("tests__slide-cloce-open")
  blockQuestionAnswer3OpenClose.classList.add("block__question-answer3-open-close");
  blockQuestionAnswer3OpenClose.classList.remove("block__question-answer3-activ");
  blockQuestionAnswer2OpenClose.classList.remove("block__question-answer2-activ-none");
  blockTitleOpen2.classList.remove("block__title-activ");
  blocktextOpen2.classList.remove("block__text-activ");
});

testsSlide3OpenBtn.addEventListener('click', e => {  
  testsSlide3Open.classList.add("tests-slide3__close-open");
  testsClose.classList.remove("tests__slide");
  blockQuestionAnswer2OpenClose.classList.add("block__question-answer2-open-close");
  blockQuestionAnswer3OpenClose.classList.add("block__question-answer3-open-close");
  blockQuestionAnswerOpen.classList.remove("block__question-answer-activ");
  blockTitleOpen.classList.remove("block__title-activ");
  blocktextOpen.classList.remove("block__text-activ");
  blockQuestionAnswer2OpenClose.classList.remove("block__question-answer2-activ-none");
  blockTitleOpen2.classList.remove("block__title-activ");
  blocktextOpen2.classList.remove("block__text-activ");
});

blockQuestionAnswerOpen.addEventListener('click', e => {
  testsSlide3Open.classList.add("tests-slide3__close-open");
  testsClose.classList.remove("tests__slide");
  testsSlide2Open.classList.add("tests__slide-cloce-open");
  blockQuestionAnswer2OpenClose.classList.add("block__question-answer2-open-close");
  blockQuestionAnswer3OpenClose.classList.add("block__question-answer3-open-close");
  blockQuestionAnswerOpen.classList.remove("block__question-answer-activ");
  blockTitleOpen.classList.remove("block__title-activ");
  blocktextOpen.classList.remove("block__text-activ");
});

blockQuestionAnswer2OpenClose.addEventListener('click', e => {
  testsSlide3Open.classList.add("tests-slide3__close-open");
  testsClose.classList.add("tests__slide");
  testsSlide2Open.classList.remove("tests__slide-cloce-open");
  blockQuestionAnswer3OpenClose.classList.remove("block__question-answer3-activ");
  blockQuestionAnswer2OpenClose.classList.remove("block__question-answer2-activ-none");
  blockTitleOpen2.classList.remove("block__title-activ");
  blocktextOpen2.classList.remove("block__text-activ"); 
  blockQuestionAnswer3OpenClose.classList.add("block__question-answer3-open-close");  
});


