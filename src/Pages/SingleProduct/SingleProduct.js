import './SingleProduct.css'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'
import { useState } from 'react';

function SingleProduct() {
  const [count, setCount] = useState(1);

  return (
    <>
      <Navbar />
      <section class='container sproduct my-5 pt-5'>
        <div class='row'>
          <div class='col-lg-5 col-md-12 col-12'>
            <img class='img-fluid w-75' src='https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop'></img>

          </div>

          <div class='col-lg-6 col-md-12 col-12'>
            <h6>Home | Product | Medicine</h6>
            <h3>Medicine</h3>
            <h3>NRS. 200</h3>
            <div className="d-flex counter">
              <button onClick={() => count > 1 && setCount(count - 1)} className="btn fw-700">-</button>
              <input value={count} onChange={(e) => setCount(e.target.value)} className="form-control text-center fw-500 text-secondary" type="text" />
              <button onClick={() => setCount(count + 1)} className="btn fw-700">+</button>
            </div>
            <h4>Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to relieve pain, reduce fever, and decrease inflammation. It is commonly used to treat headaches, menstrual cramps, muscle aches, and arthritis. Ibuprofen works by blocking the production of prostaglandins, which are chemicals that cause pain, inflammation, and fever. It is available over-the-counter and by prescription.</h4>
          </div>

        </div>

      </section>
      <Footer />
    </>
  )
}

export default SingleProduct