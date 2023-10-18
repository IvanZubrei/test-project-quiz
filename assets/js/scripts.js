const sitesPopup = document.querySelector('.btn__open-popup');
const sitesPopupOpenClose = document.querySelector('.modal__contact');
const modalBtnClose = document.querySelector('.modal-contact-container__btn-close');
const modalContactBtn = document.querySelector('.modal__contact-btn');
const modalDataSentPopupOpenClose = document.querySelector('.modal__data-sent');
const modalDataSentBtn = document.querySelector('.modal__data-sent-btn');
const modalDataSentBtnClose = document.querySelector('.modal__data-sent__btn-close');


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



