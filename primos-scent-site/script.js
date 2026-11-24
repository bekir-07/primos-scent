const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
if(menuButton&&nav){menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));}
const filters=document.querySelectorAll('.filter');const cards=document.querySelectorAll('.product-card');
function setFilter(value){filters.forEach(btn=>btn.classList.toggle('active',btn.dataset.filter===value));cards.forEach(card=>card.classList.toggle('is-hidden',value!=='all'&&card.dataset.category!==value));}
filters.forEach(btn=>btn.addEventListener('click',()=>setFilter(btn.dataset.filter)));
document.querySelectorAll('[data-filter-link]').forEach(link=>link.addEventListener('click',()=>setFilter(link.dataset.filterLink)));
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));}
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const CART_KEY='primos_scent_cart_v2';
function readCart(){try{return JSON.parse(localStorage.getItem(CART_KEY)||'[]')}catch{return []}}
function writeCart(cart){localStorage.setItem(CART_KEY,JSON.stringify(cart));updateCartCount()}
function updateCartCount(){const count=readCart().reduce((n,item)=>n+item.qty,0);document.querySelectorAll('.cart-count').forEach(el=>el.textContent=count)}
document.querySelectorAll('.add-cart').forEach(btn=>btn.addEventListener('click',()=>{const card=btn.closest('.product-card');const product={id:card.dataset.id,name:card.dataset.name,price:Number(card.dataset.price),image:card.dataset.image};const cart=readCart();const found=cart.find(x=>x.id===product.id);if(found)found.qty++;else cart.push({...product,qty:1});writeCart(cart);btn.classList.add('added');btn.innerHTML='✓ <span>Eklendi</span>';setTimeout(()=>{btn.innerHTML='＋ <span>Sepete ekle</span>';btn.classList.remove('added')},1200)}));
updateCartCount();
const form=document.getElementById('contact-form');if(form)form.addEventListener('submit',e=>{e.preventDefault();alert('Bu demo sitede mesaj gönderilmedi ve hiçbir veri paylaşılmadı. Yayına almadan önce iletişim kanalınızı ekleyebilirsiniz.');});
