import './Doctor.css'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import DoctorCard from '../../Components/doctorCard.js/DoctorCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Doctor() {
  const [doctorData, setDoctorData] = useState([])

const handleChng=(e)=>{
  axios.get(`/doctor/getAllDoctor?name=${e.target.value}`).then(res => setDoctorData(res.data)).catch(err => console.log(err))
}

const srchname = window.location.pathname.split('/')[2]

  useEffect(() => {
    axios.get(`/doctor/getAllDoctor?name=${srchname===undefined ? "" : srchname}`).then(res => setDoctorData(res.data)).catch(err => console.log(err))
  }, [])


  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <div className='doctor-top'>
          <span className='breadcrums'>MEDCARE &#8827; DOCTORS</span>
          <h1>Doctors</h1>
          <p>Explore the doctors in medcare</p>
          <div className='doctor-menu mt-3'>
            <div className='doctor-left'>
              <div class="col-md-6 w-100">
                <div class="input-group leftInput">
                  <input type="text" class="form-control form-control-danger" placeholder="Find Doctor..." onChange={handleChng}></input>
                  <button class="btn btn-danger srchBtn" type="button"><i class='bx bx-search-alt-2'></i></button>
                </div>
              </div>

            </div>

            <div className='doctor-right'>
              <span>Find By Specialist:</span>
            </div>
            <select>
              <option selected>Select an option</option>
              <option value="1">Nose</option>
              <option value="2">Eye</option>
              <option value="3">Toungue</option>
            </select>
          </div>
        </div>

        <div className='doctorCards'>
          {
            doctorData?.map(doctor => {
             return <DoctorCard doctor={doctor}/>
            })
          }
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Doctor