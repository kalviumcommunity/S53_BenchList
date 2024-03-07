import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios"
import "../App.css"

function AddForm() {
  const [data, setData] = useState({
    name: "",
    placename: "",
    location: "",
    image: ""
  })
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://s53-benchlist-server.onrender.com/data", {
        name: data.name,
        placename: data.placename,
        location: data.location,
        image: data.image
      });
      console.log(response);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  }


  // console.log(value);
  return (
    <>
    <div>
      <form>
        <div className="form-container">
          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                name="name"
                onChange={handleChange}
              />
            </label>
          </div>
          <br />

          <div className="form-group">
            <label>
              Place Name:
              <input
                type="text"
                name="placename"
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div className="form-group">
            <label>
              Location:
              <input
                type="text"
                name="location"
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div className="form-group">
            <label>
              Image:
              <input
                type="text"
                name="image"
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div className="form-group">
            <button onClick={handleSubmit} type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div >
    </>
    )
}

export default AddForm