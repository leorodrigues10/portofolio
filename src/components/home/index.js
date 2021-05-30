import './home.css'
import leo from '../../assets/img/leo.png'
function Home() {
  return (
    <div className="home-container">
      <div id="about-me" className="about">


        <section className="social">
          <ul className="social-list">
            <li className="social-item">
              <a href="https://web.facebook.com/leonelove.miranda/" target="_blank" rel="noreferrer" className="social-link">
                <i class="fab fa-facebook-f fa-lg"></i>
              </a>
            </li>
            <li className="social-item">
              <a href="https://github.com/leorodrigues10" target="_blank" rel="noreferrer" className="social-link fa-lg">
                <i class="fab fa-github"></i>
              </a>
            </li>
            <li className="social-item">
              <a href="https://www.linkedin.com/in/leomiradev/" target="_blank" rel="noreferrer" className="social-link ">
                <i class="fab fa-linkedin-in fa-lg"></i>
              </a>
            </li>
          </ul>
        </section>
        <section className="aboutme">
          <div>
            <span className="init">Hi, my name is</span><br /><span className="bold">Américo Silva</span>
            <span className="init">, i'm a </span><br /> <span className="bold">FullStack Developer</span>
            <p className="more">&lt;If you need good energies and good vibes, count on me _&gt;
            I'm always looking for new challenges. I always try to grow,
            to improve myself and to be better than I was yesterday.
            I am a problem-solver who takes pride in creating innovative
               solutions to solve problems.</p>
          </div>
        </section>

        <section className="my-image">
          <img className="img" src={leo} alt="my-img" />
        </section>
      </div>
    </div>
  );
}
export default Home