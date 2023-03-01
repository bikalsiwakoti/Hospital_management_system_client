import './DoctorCard.css'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

function DoctorCard() {
  const navigate = useNavigate()
  const handleButton = (e) => {
    console.log(e.target.name)
    navigate('/doctor/123')
  }
  return (
    <>
      <div className="doctor-card mt-5">
        <div className='doctor-cardLeft'>
          <div className='doctor-cardDecs'>
            <div className='doctorSchedule'>
              <div className="doctorScheduleLeft">
                <img className="img-fluid rounded-2" src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" />
              </div>
              <div className='doctorScheduleRight'>

                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">Date</th>
                      <th scope="col">Available Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">2023-02-27</th>
                      <td class='d-flex'>
                        <button name="2:00" onClick={handleButton}>2:00</button>
                        <button name="3:00" onClick={handleButton}>3:00</button>
                        <button name="4:00" onClick={handleButton}>4:00</button>
                        <button name="5:00" onClick={handleButton}>5:00</button>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">2023-02-28</th>
                      <td class='d-flex'>

                        <button onClick={handleButton}>2:00</button>
                        <button onClick={handleButton}>3:00</button>
                        <button onClick={handleButton}>4:00</button>
                        <button onClick={handleButton}>5:00</button>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">2023-02-29</th>
                      <td class='d-flex'>

                        <button onClick={handleButton}>2:00</button>
                        <button onClick={handleButton}>3:00</button>
                        <button onClick={handleButton}>4:00</button>
                        <button onClick={handleButton}>5:00</button>
                      </td>
                    </tr>

                    <tr>
                      <th scope="row">2023-02-30</th>
                      <td class='d-flex'>

                        <button onClick={handleButton}>2:00</button>
                        <button onClick={handleButton}>3:00</button>
                        <button onClick={handleButton}>4:00</button>
                        <button onClick={handleButton}>5:00</button>
                      </td>
                    </tr>

                  </tbody>
                </table>

              </div>

            </div>
            <div className='mt-3'>
              <div className='detailsFlex'>
                <div>
                  <div className='detailsDoctor'>
                    <span><i class='bx bxs-right-arrow'></i></span><h5 class='mt-2'>Dr Ram baran Yadav</h5>
                  </div>
                  <div className='detailsDoctor'>

                    <span><i class='bx bxs-right-arrow'></i></span><p className=" text-secondary-emphasis mt-2">Neurologist</p>
                  </div>
                </div>
                <div>

                  <div className='detailsDoctor'>
                    <span><i class='bx bxs-right-arrow'></i></span><p className=" text-secondary-emphasis mt-2">Experience : 10 years</p>
                  </div>
                  <div className='star doctorCardStar'>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <i class='bx bxs-star'></i>
                    <span>5</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div className='btnDoc'>
            <button className="btn btn-lg py-3 btn-outline-dark"><span>Profile</span></button>
            <button className="btn btn-lg py-3 btn-outline-dark"><span>Appointment</span> <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>

        <div className='doctor-cardRight'>

        </div>
      </div>

    </>
  )
}

export default DoctorCard