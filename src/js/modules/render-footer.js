const footer = document.getElementById("footer");

export const renderFooter = () =>
{
  let year = new Date().getFullYear();
  footer.innerHTML = `
  
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill-opacity="1"
    d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,181.3C672,171,768,181,864,165.3C960,149,1056,107,1152,101.3C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
  </path>
</svg>
  <div class="conten-info-footer">
  <div class="container-copyright">
    <span>Zaguisoft &copy; </span>
    <span id="date">${year}</span>
    <span>Ibague Colombia</span>
  </div>
  
  <div class="social-media" style="display: flex; column-gap: 20px">
    <a href="./pqr.html">
      <img
        src="../assets/icon-page/email.svg"
        alt=""
        style="width: 30px; height: 30px"
      />
    </a>
    <a href="https://www.youtube.com/watch?v=I5c-RPgu0pQ" target="_blank">
      <img
        src="../assets/icon-page/youtube.svg"
        alt=""
        style="width: 30px; height: 30px"
      />
    </a>
  </div>
  
  <div class="container-msg">
    <a href="./questions.html" style="color: #fff">Frequent questions</a>
  </div>
</div>
  
  
  
  `;
}