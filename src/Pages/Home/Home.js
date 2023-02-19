import DoctorSlider from '../../Components/doctorSlider/DoctorSlider'
import Footer from '../../Components/footer/Footer'
import ProductSlider from '../../Components/productSlider/ProductSlider'
import Testimonial from '../../Components/testimonial/Testimonial'
import './home.css'

function Home() {
  return (
    <>
      <ProductSlider />
      <Testimonial />
      <DoctorSlider />

      <Footer />
    </>
  )
}

export default Home