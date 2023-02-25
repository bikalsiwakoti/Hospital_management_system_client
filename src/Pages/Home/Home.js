import DoctorSlider from '../../Components/doctorSlider/DoctorSlider'
import ProductSlider from '../../Components/productSlider/ProductSlider'
import Testimonial from '../../Components/testimonial/Testimonial'
import OurServices from '../../Components/services/OurServices'
import './home.css'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import heroImg from '../../img/hero.png'

function Home() {
  return (
    <>

      <Navbar />
      {/* hero section */}
      <div className='hero'>
        <div className='leftHero'>
          <div className='heading '>
            <h1>Keep Your Family Healthy</h1>
          </div>
          <p className='mt-3'>Find Right Specialist On Medcare
          </p>
          <form className='mt-3'>
            <input name='search' placeholder='Search For A Doctor'></input>
            <button className='srchBtn'><i class='bx bx-search-alt-2'></i></button>
          </form>
          <button type="button" class="btn btn-danger heroBtn mt-5"> <span>Consult Now &#8594;</span></button>
        </div>
        <div className='rightHero'>
          <img src={heroImg}></img>
        </div>

      </div>

      <DoctorSlider />
      <Testimonial />
      <ProductSlider />
      <OurServices />
      <div className='heathPartner'>
        <h1>Become Our Doctor</h1>
        <button type="button" class="btn btn-danger doctorBtn mt-3"><span>Apply Now</span></button>
      </div>
      <Footer />
    </>
  )
}

export default Home