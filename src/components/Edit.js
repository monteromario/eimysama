import React, { useState } from 'react';

const axios = require('axios').default;

function Edit() {
  
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(null);
  const [pictures, setPictures] = useState(null);
  const [sale, setSale] = useState(false);
  const [top, setTop] = useState(false);
  const [isNew, setIsNew] = useState(false);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [type, setType] = useState(null);
  const [home, setHome] = useState(false);  
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [canSave, setCanSave] = useState(false);

  function getRandom() {
    return Math.ceil(Math.random() * (9999));
  }

  const uploadCloudinary = files => {
    let fileList = []
    const upload = (file) => {
      const formData = new FormData();
       formData.append("name", file.name); 
        formData.append("file", file);
        formData.append("upload_preset", process.env.REACT_APP_CLOUD_UPLOAD_PRESET);
        setLoading(true);
      axios
        .post(process.env.REACT_APP_CLOUD_URL, formData)
        .then((res) => {
          fileList.push(res.data.secure_url);
          setPictures(fileList);
          setLoading(false)
        })
        .catch((err) => {
          console.log(err);
          setLoading(false)
        });
      }

    for (let i=0;i<files.length;i++)
    {
      upload(files[i])
    }
}

  const handlePicture = (e) => {
    uploadCloudinary(e.target.files)
    checkPicturesLength(e.target.files)
  }

  const checkPicturesLength = (items) => {
    if (items.length > 2) {
      setCanSave(true)
    }
  }

  const handleChange = (e) => {
    switch (e.target.id) {
      case 'name':
        setName(e.target.value);
        break;
      case 'price':
        setPrice(e.target.value);
        break;
      case 'pictures':
        setPictures(e.target.value);
        checkPicturesLength();
        break;
      case 'sale':
        if (e.target.checked) {
          setSale(true)
        } else {
          setSale(false);
        }
        break;
      case 'top':
        if (e.target.checked) {
          setTop(true)
        } else {
          setTop(false);
        }
        break;
      case 'new':
        if (e.target.checked) {
          setIsNew(true)
        } else {
          setIsNew(false);
        }
        break;
      case 'size':
        setSize(e.target.value);
        break;
      case 'color':
        setColor(e.target.value);
        break;
      case 'type':
        setType(e.target.value);
        break;
      case 'home':
        if (e.target.checked) {
          setHome(true)
        } else {
          setHome(false);
        }
        break;
      default:
        break;
    }
}

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    let data = {
      'id': getRandom(),
      'name': name,
      'price': price,
      'pictures': pictures,
      'sale': sale,
      'top': top,
      'new': isNew,
      'size': size,
      'color': color,
      'type': type,
      'home': home
    }

    axios
        .post(process.env.REACT_APP_API_URL+'/add', data)
        .then((res) => {
          setLoading(false)
          setMessageTimer('Product '+ res.data.name +' added')
        })
        .catch((err) => {
          console.log(err);
          setLoading(false)
        });

  }

  function cleanMessage() {
    setMessage(null)
  }
  
  function setMessageTimer(text) {
    setMessage(text)
    setTimeout(cleanMessage, 5000);
  }

    return (
      <div className="m-3">
      {message ? <div className="alert alert-success" role="alert">
      {message}
      </div> : ''}
        <div className="card">
          <h5 className="card-header"><i className="fa-solid fa-circle-plus"></i> Add</h5>
          <div className="card-body">
            <h5 className="card-title">Add product</h5>
            <p className="card-text">Fill all required data and save</p>
          <form className="justify-content-center row p-2" onSubmit={handleSubmit}>
            <div className="mb-3 col-12">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" aria-describedby="nameHelp" onChange={handleChange} required/>
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="price" className="form-label">Price</label>
              <input type="number" className="form-control" id="price" aria-describedby="priceHelp" onChange={handleChange} required/>
            </div>
            <div className="mb-3 col-8">
              <label htmlFor="pictures" className="form-label">Pictures</label>
              <input type="file" multiple className="form-control" id="pictures" aria-describedby="PicturesHelp" accept="image/*" onChange={handlePicture} required/>
              {canSave ? '' : <small className="text-danger font-italic">Min. 3 pictures required</small>}
            </div>
            <div className="mb-3 col-3 form-check">
              <input type="checkbox" className="form-check-input" id="sale" onChange={handleChange}/>
              <label className="form-check-label" htmlFor="sale">Sale</label>
            </div>
            <div className="mb-3 col-3 form-check">
              <input type="checkbox" className="form-check-input" id="top" onChange={handleChange}/>
              <label className="form-check-label" htmlFor="top">Top</label>
            </div>
            <div className="mb-3 col-3 form-check">
              <input type="checkbox" className="form-check-input" id="new" onChange={handleChange}/>
              <label className="form-check-label" htmlFor="new">New</label>
            </div>
            <div className="mb-3 col-3 form-check">
              <input type="checkbox" className="form-check-input" id="home" onChange={handleChange}/>
              <label className="form-check-label" htmlFor="home">Home</label>
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="size" className="form-label">Size</label>
              <input type="text" className="form-control" id="size" aria-describedby="sizeHelp" onChange={handleChange} required/>
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="size" className="form-label">Color</label>
              <input type="text" className="form-control" id="color" aria-describedby="colorHelp" onChange={handleChange} required/>
            </div>
            <div className="mb-3 col-4">
              <label htmlFor="type" className="form-label">Type</label>
              <input type="text" className="form-control" id="type" aria-describedby="typeHelp" onChange={handleChange} required/>
            </div>
            {loading ? <button type="submit" className="btn btn-secondary" disabled >Loading...</button> : canSave ? <button type="submit" className="btn btn-primary" >Save</button> : <button type="submit" className="btn btn-secondary" disabled >Save</button>}
          </form>
          </div>
        </div>
      </div>
    );
  }
  
  export default Edit;