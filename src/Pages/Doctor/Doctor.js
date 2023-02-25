import './Doctor.css'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import DoctorCard from '../../Components/doctorCard.js/DoctorCard'

function Doctor() {
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
                  <input type="text" class="form-control form-control-danger" placeholder="Find Doctor..."></input>
                  <button class="btn btn-danger srchBtn" type="button"><i class='bx bx-search-alt-2'></i></button>
                </div>
              </div>

            </div>

            <div className='doctor-right'>
              <span>Find By Specialist:</span>
            </div>
            <select>
              <option selected>Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>

        <div className='doctorCards'>
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>

      </div>

      <Footer />
    </>
  )
}

export default Doctor