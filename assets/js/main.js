(function(){"use strict";const select=(el,all=false)=>{el=el.trim()
  if(all){return[...document.querySelectorAll(el)]}else{return document.querySelector(el)}}
  const on=(type,el,listener,all=false)=>{let selectEl=select(el,all)
  if(selectEl){if(all){selectEl.forEach(e=>e.addEventListener(type,listener))}else{selectEl.addEventListener(type,listener)}}}
  const onscroll=(el,listener)=>{el.addEventListener('scroll',listener)}
  let navbarlinks=select('#navbar .scrollto',true)
  const navbarlinksActive=()=>{let position=window.scrollY+200
  navbarlinks.forEach(navbarlink=>{if(!navbarlink.hash)return
  let section=select(navbarlink.hash)
  if(!section)return
  if(position>=section.offsetTop&&position<=(section.offsetTop+section.offsetHeight)){navbarlink.classList.add('active')}else{navbarlink.classList.remove('active')}})}
  window.addEventListener('load',navbarlinksActive)
  onscroll(document,navbarlinksActive)
  const scrollto=(el)=>{let header=select('#header')
  let offset=header.offsetHeight
  if(!header.classList.contains('header-scrolled')){offset-=10}
  let elementPos=select(el).offsetTop
  window.scrollTo({top:elementPos-offset,behavior:'smooth'})}
  let selectHeader=select('#header')
  if(selectHeader){const headerScrolled=()=>{if(window.scrollY>100){selectHeader.classList.add('header-scrolled')}else{selectHeader.classList.remove('header-scrolled')}}
  window.addEventListener('load',headerScrolled)
  onscroll(document,headerScrolled)}
  let backtotop=select('.back-to-top')
  if(backtotop){const toggleBacktotop=()=>{if(window.scrollY>100){backtotop.classList.add('active')}else{backtotop.classList.remove('active')}}
  window.addEventListener('load',toggleBacktotop)
  onscroll(document,toggleBacktotop)}
  on('click','.mobile-nav-toggle',function(e){select('#navbar').classList.toggle('navbar-mobile')
  this.classList.toggle('bi-list')
  this.classList.toggle('bi-x')})
  on('click','.navbar .dropdown > a',function(e){if(select('#navbar').classList.contains('navbar-mobile')){e.preventDefault()
  this.nextElementSibling.classList.toggle('dropdown-active')}},true)
  on('click','.scrollto',function(e){if(select(this.hash)){e.preventDefault()
  let navbar=select('#navbar')
  if(navbar.classList.contains('navbar-mobile')){navbar.classList.remove('navbar-mobile')
  let navbarToggle=select('.mobile-nav-toggle')
  navbarToggle.classList.toggle('bi-list')
  navbarToggle.classList.toggle('bi-x')}
  scrollto(this.hash)}},true)
  window.addEventListener('load',()=>{if(window.location.hash){if(select(window.location.hash)){scrollto(window.location.hash)}}});let preloader=select('#preloader');if(preloader){window.addEventListener('load',()=>{preloader.remove()});}
  new Swiper('.testimonials-slider',{speed:600,loop:true,autoplay:{delay:5000,disableOnInteraction:false},slidesPerView:'auto',pagination:{el:'.swiper-pagination',type:'bullets',clickable:true},breakpoints:{320:{slidesPerView:1,spaceBetween:20},1200:{slidesPerView:2,spaceBetween:20}}});window.addEventListener('load',()=>{AOS.init({duration:1000,easing:'ease-in-out',once:true,mirror:false})});})()
  $('img[data-enlargeable]').addClass('img-enlargeable').click(function(){var src=$(this).attr('src');var modal;function removeModal(){modal.remove();$('body').off('keyup.modal-close');}
  modal=$('<div>').css({background:'RGBA(0,0,0,.5) url('+src+') no-repeat center',backgroundSize:'contain',width:'100%',height:'100%',position:'fixed',zIndex:'10000',top:'0',left:'0',cursor:'zoom-out'}).click(function(){removeModal();}).appendTo('body');$('body').on('keyup.modal-close',function(e){if(e.key==='Escape'){removeModal();}});});jQuery(document).ready(function(){jQuery("#toggleText1").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text1').find('.text1').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text1').find('.text1').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText2").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text2').find('.text2').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text2').find('.text2').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText3").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text3').find('.text3').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text3').find('.text3').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText4").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text4').find('.text4').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text4').find('.text4').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText5").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text5').find('.text5').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text5').find('.text5').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText6").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text6').find('.text6').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text6').find('.text6').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText7").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text7').find('.text7').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text7').find('.text7').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText8").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text8').find('.text8').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text8').find('.text8').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText9").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text9').find('.text9').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text9').find('.text9').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText10").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text10').find('.text10').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text10').find('.text10').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText11").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text11').find('.text11').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text11').find('.text11').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText12").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text12').find('.text12').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text12').find('.text12').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText13").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text13').find('.text13').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text13').find('.text13').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText14").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text14').find('.text14').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text14').find('.text14').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText15").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text15').find('.text15').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text15').find('.text15').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText16").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text16').find('.text16').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text16').find('.text16').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText17").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text17').find('.text17').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text17').find('.text17').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText18").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text18').find('.text18').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text18').find('.text18').slideUp();}
  else
  {}});});jQuery(document).ready(function(){jQuery("#toggleText19").click(function(){if($(this).hasClass("arrow-normal"))
  {$(this).removeClass("arrow-normal");$(this).addClass("arrow-inverse");$(this).closest('.read-more-text19').find('.text19').slideDown();}
  else if($(this).hasClass("arrow-inverse"))
  {$(this).removeClass("arrow-inverse");$(this).addClass("arrow-normal");$(this).closest('.read-more-text19').find('.text19').slideUp();}
  else
  {}});});