import data from "../data/products.json";
//const axios = require('axios').default;


let filteredData = data.filter((i) => i.home === true);

function Home() {
/*
    axios.get('http://www.mariomontero.es/test/products.json')
    .then(function (response) {
        // handle success
        console.log(response);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
*/
    function manageCart(e) {
    let cart = JSON.parse(localStorage.getItem("ES_items"));
    if (!cart) {
      cart = [];
    } else {
    }
    cart.push(e.target.id);
    localStorage.setItem("ES_items", JSON.stringify(cart));
  }

  return (
    <div>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder"> E I M Y S A M A </h1>
            <p className="lead fw-normal text-white-50 mb-0">エイミサマ</p>
          </div>
        </div>
      </header>
      <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src={filteredData[0].picture} className="d-block w-100" alt={filteredData[0].name}  />
      <div className="carousel-caption d-none d-md-block">
        <h5>{filteredData[0].name}</h5>
        <p>{filteredData[0].size}</p>
      </div>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src={filteredData[1].picture} className="d-block w-100" alt={filteredData[1].name} />
      <div className="carousel-caption d-none d-md-block">
        <h5>{filteredData[1].name}</h5>
        <p>{filteredData[1].size}</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={filteredData[2].picture} className="d-block w-100" alt={filteredData[2].name} />
      <div className="carousel-caption d-none d-md-block">
        <h5>{filteredData[2].name}</h5>
        <p>{filteredData[2].size}</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <section className="py-5">
        <p className="h1 ml-4">Featured products</p>
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {filteredData.map((product) => (
              <div className="col mb-5" id={product.id} key={product.id}>
                <div className="card h-100">
                  <div className="badge bg-dark text-white position-absolute">
                    {product.top ? "Top" : ""}
                  </div>
                  <div className="badge bg-success text-white position-absolute">
                    {product.new ? "New" : ""}
                  </div>
                  <div className="badge bg-danger text-white position-absolute">
                    {product.sale ? "Sale" : ""}
                  </div>
                  <img
                    className="card-img-top"
                    src={product.picture}
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{product.name}</h5>
                      <span className="text-muted text-decoration-line-through">
                        {product.price_old ? product.price_old + "€ " : ""}
                      </span>
                      {product.price_range
                        ? product.price_range
                        : product.price + "€"}
                      {product.size ? (
                        <div className="m-1 fw-light">{product.size}</div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                  <div
                    className="card-footer p-4 pt-0 border-top-0 bg-transparent"
                    id={product.id}
                  >
                    <div className="text-center" id={product.id}>
                      {product.size ? (
                        <a
                          className="btn btn-outline-dark mt-auto"
                          href="/"
                          id={product.id}
                          onClick={(e) => manageCart(e)}
                        >
                          Add to cart
                        </a>
                      ) : (
                        <span className="mt-auto text-danger">Sold out</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <a className="btn btn-outline-dark" href="/shop">
            View all products
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
