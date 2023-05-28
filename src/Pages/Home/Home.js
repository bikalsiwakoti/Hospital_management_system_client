import DoctorSlider from '../../Components/doctorSlider/DoctorSlider'
import ProductSlider from '../../Components/productSlider/ProductSlider'
import Testimonial from '../../Components/testimonial/Testimonial'
import OurServices from '../../Components/services/OurServices'
import './home.css'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import heroImg from '../../img/hero.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from '../../Redux/Slices.js/ProductSlice'
import { useNavigate } from 'react-router-dom'

function Home() {
  const [doctorData, setDoctorData] = useState([])
  const [input, setInput] = useState([])
  const dispatch = useDispatch()
  const productData = useSelector(state => state?.product)

  const navigate = useNavigate() 

  useEffect(() => {
    axios.get(`/doctor/getAllDoctor?name=${""}`).then(res => setDoctorData(res.data)).catch(err => console.log(err))
    dispatch(fetchData({ srch: "" }))
  }, [])


  const handleDoctorClick=()=>{
    navigate('/doctors')
  }

  const handleSrch=()=>{
    navigate(`/doctors/${input}`)
  }


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
          <form className='mt-3' onClick={(e)=> e.preventDefault()}>
            <input placeholder='Search For A Doctor' onChange={(e)=>setInput(e.target.value)}></input>
            <button className='srchBtn'><i class='bx bx-search-alt-2' onClick={handleSrch}></i></button>
          </form>
          <button type="button" class="btn btn-danger heroBtn mt-5"> <span onClick={handleDoctorClick}>Consult Now &#8594;</span></button>
        </div>
        <div className='rightHero'>
          <img src={heroImg}></img>
        </div>

      </div>

      <DoctorSlider doctor={doctorData} />
      {/* <Testimonial /> */}
      <ProductSlider product={productData}/>
      <OurServices />
      {/* <div className='heathPartner'>
        <h1>Become Our Doctor</h1>
        <button type="button" class="btn btn-danger doctorBtn mt-3"><span>Apply Now</span></button>
      </div> */}
      <Footer />
    </>
  )
}

export default Home