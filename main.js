import './style.css'
import logo from '/profile.png'

document.querySelector('#app').innerHTML = `
  <div class="content">
    <div class="header">
        <div class="profile">
            <img src="${logo}" alt=""></img>
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
`
