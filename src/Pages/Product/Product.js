import './Product.css'
import ProductCard from '../../Components/productCard/ProductCard'
import Footer from '../../Components/footer/Footer'
import Navbar from '../../Components/navbar/Navbar'

function Product() {
  return (
    <>
      <Navbar />
      <div className='container mt-5'>
        <div className='product-top'>
          <span className='breadcrums'>MEDCARE &#8827; PRODUCTS</span>
          <h1>Products</h1>
          <p>Explore the products of medicine in medcare</p>
          <div className='product-menu mt-3'>
            <div className='product-left'>
              <div class="col-md-6 w-100">
                <div class="input-group leftInput">
                  <input type="text" class="form-control form-control-danger productSrch" placeholder="Find Product..."></input>
                  <button class="btn btn-danger srchBtn" type="button"><i class='bx bx-search-alt-2'></i></button>
                </div>
              </div>

            </div>

            <div className='product-right'>
              <span>Find By Genre:</span>
            </div>
            <select>
              <option selected>Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>

        <div className='productsCard'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

      </div>
      {/* <div className='srchBox mt-5 mb-5'>
      <div class="row">
        <div class="col-md-6 selectCenter">
          <div class="input-group">
            <div>Find By Genre: </div>
            <select class="form-select form-select-danger">
              <option selected>Select an option</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
        </div>
        <div class="col-md-6">
          <div class="input-group srchDoctor">
            <input type="text" class="form-control form-control-danger" placeholder="Find Product..."></input>
            <button class="btn btn-danger" type="button"><i class='bx bx-search-alt-2'></i></button>
          </div>
        </div>
      </div>
    </div> */}



      <Footer />
    </>
  )
}

export default Product