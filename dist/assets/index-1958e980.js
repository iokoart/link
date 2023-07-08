(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const t of i.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&r(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();const a="/profile.png";document.querySelector("#app").innerHTML=`
  <div class="content">
    <div class="header">
        <div class="profile">
            <img src="${a}" alt=""></img>
        </div>
        <div class="about">
            <h1>Ioko Art</h1>
            <p>Pixel Artist, Playing and Review Pixel Game. Have Fun With Pixel World</p>
        </div>
    </div>
    <div class="section">
        <div class="social">
            <h2>Social</h2>
            <hr noshade>
            <li><a href="https://www.facebook.com/profile.php?id=100094616371778">Facebook</a></li>
            <li><a href="https://www.instagram.com/art.ioko">Instagram</a></li>
            <li><a href="https://www.threads.net/@art.ioko">Threads</a></li>
        </div>
        <div class="portofolio">
            <h2>Portofolio</h2>
            <hr noshade>
            <li><a href="https://id.pinterest.com/iokoart">Pinterest</a></li>
            <li><a href="https://pixabay.com/users/iokoart-38107905/">Pixabay</a></li>
            <li><a href="https://lospec.com/iokoart">Lospec</a></li>
            <li><a href="https://github.com/iokoart">Github</a></li>
        </div>
        <div class="donate">
            <h2>Donate</h2>
            <hr noshade>
            <li><a href="https://ko-fi.com/iokoart">Ko-fi</a></li>
        </div>
    </div>
    <div class="footer">
            <p>Build by Ioko Art</p>
    </div>
</div>
`;
