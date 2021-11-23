import pic from '../../assets/images/logo192.png'
import '../../assets/css/style.css'

export default function Footer() {
  return (
    <div>
      <section className="row justify-center">
        <div className="project-column">
          <figure className="project box-project" >
            <h2>A Passion for Coding </h2>
            <h3 className="justify-center">Made with <span role="img" aria-label="heart">❤️</span> and React
              <img src={pic} alt="Laura" ></img>
            </h3>
          </figure>
        </div>
      </section >
    </div>
  )
}
