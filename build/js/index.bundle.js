!function(){"use strict";const t=document.querySelector(".burger"),e=document.querySelector(".navbar");t&&t.addEventListener("click",(function(o){document.body.classList.toggle("_lock"),t.classList.toggle("_active"),e.classList.toggle("_active")}));const o=document.querySelectorAll(".btn[data-goto]");if(o.length>0){function c(o){const c=o.target;if(c.dataset.goto&&document.querySelector(c.dataset.goto)){const s=document.querySelector(c.dataset.goto).getBoundingClientRect().top+pageYOffset-document.querySelector("header").offsetHeight;t.classList.contains("_active")&&(document.body.classList.remove("_lock"),t.classList.remove("_active"),e.classList.remove("_active")),window.scrollTo({top:s,behavior:"smooth"}),o.preventDefault()}}o.forEach((t=>{t.addEventListener("click",c)}))}}();