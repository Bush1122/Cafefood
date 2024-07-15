
import Footer from './Footer';

const Confirmation = () => {

    return(
       <div>
          <div className="text-dark">
                <div className="container-fluid about-page text-dark main-session-about py-5">
                    <header className="h-100 min-vh-80 d-flex align-text-center text-light shadow py-5">
                        <div className="container">
                            <div className="row py-5">
                                <div className="d-flex d-sm-block flex-column align-item-center">
                                    <h1 className="text-light fw-bold mb-4 text-center mt-3">Confirmation</h1>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            </div>
            <div className="container my-5 py-4">
        <div className="row">
          <div className="col d-flex flex-column justify-content-center align-items-center h-100">
            <h2 className="fs-1 fw-bold  text-danger text-center ">Thank You</h2>
            <h2 className="fs-3 fw-bold  text-info text-center ">For Your Reservation</h2>
            <h4 className="mt-1 text-center">Your order hasn’t shipped yet but we will send <br></br>you an email when it does.</h4>
           
          </div>
        </div>
      </div>
      <Footer/>
       </div>
    );

}

export default Confirmation