export default function (state) {
  return `
<main>
  <div class="container" style="margin-top: 3rem;">

    <section class="columns">
      <div class="column">
        <img src="assets/avatar.png" width="400">
      </div>
      <div class="column" style="margin-left: 3rem;">
        <h1 class="title">Alexander Rice</h1>
        <h2 class="subtitle">Full-Stack Web Developer</h2>

        <h3>Connect with Me:</h3>
        <ul class="horizontal_list socials_list">
          <li class="socials_item">
            <a class="socials_link" href="https://github.com/ricealexander">
              <img class="socials_icon" src="assets/svg/icon-github.svg" alt="Github">
            </a>
          </li>
          <li class="socials_item">
            <a class="socials_link" href="https://www.linkedin.com/in/rice-alexander/">
              <img class="socials_icon" src="assets/svg/icon-linkedin.svg" alt="LinkedIn">
            </a>
          </li>
        </ul>
  
        <h3>${state.title || 'More Links'}:</h3>
        <ul class="horizontal_list socials_list">
          <li class="socials_item">
            <a class="socials_link" href="https://codepen.io/ricealexander/">
              <img class="socials_icon" src="assets/svg/icon-codepen.svg" alt="Codepen">
            </a>
          </li>
          <li class="socials_item">
            <a class="socials_link" href="https://www.codewars.com/users/ricealexander">
              <img class="socials_icon" src="assets/svg/icon-codewars.svg" alt="Codewars">
            </a>
          </li>
          <li class="socials_item">
            <a class="socials_link" href="https://gist.github.com/ricealexander">
              <img class="socials_icon" src="assets/svg/icon-github-gists.svg" alt="GitHub Gists">
            </a>
          </li>
        </ul>
      </div>
    </section>

  </div>
</main>`;
}