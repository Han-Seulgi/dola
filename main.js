const hamburgerBtn = document.querySelector('.hamburger')
const menu = document.querySelector('.nav_menu')
const icon = document.querySelector('.nav_icons')

const noticeBtn = document.querySelector('#notice_icon')
const noticeTxt = document.querySelector('#notice_text')
const notice_box = document.querySelector('.notice_box')

const closeBtn = document.querySelector('#_close')


hamburgerBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
  icon.classList.toggle('active');
});

noticeBtn.addEventListener('click', () => {
  noticeBtn.classList.add('hidden');
  noticeTxt.classList.add('hidden');
  notice_box.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  noticeBtn.classList.remove('hidden')
  noticeTxt.classList.remove('hidden')
  notice_box.classList.remove('active')
});

