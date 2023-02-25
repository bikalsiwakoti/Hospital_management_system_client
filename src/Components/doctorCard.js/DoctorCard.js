import './DoctorCard.css'

function doctorCard() {
  return (
    <>
      <div className="doctor mt-5">
        <div className='doctorLeft'>
          <div className='doctorDecs'>
            <img className="img-fluid rounded-2" src="https://images.unsplash.com/photo-1622902046580-2b47f47f5471?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="img" />
            <div className='mt-3'>
              <h5 className="px-3">Dr Ram baran Yadav</h5>
              <p className=" text-secondary-emphasis mb-2 px-3">Neurologist</p>
            </div>
          </div>
          <div className='btnDoc'>
          <button className="btn btn-lg py-3 btn-outline-dark"><span>Profile</span></button>
          <button className="btn btn-lg py-3 btn-outline-dark"><span>Appointment</span> <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>

        <div className='doctorRight'>

        </div>
      </div>

    </>
  )
}

export default doctorCard