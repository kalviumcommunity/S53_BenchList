import { useParams,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

function EditForm() {
  const navigate=useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    name: "",
    placename: "",
    location: "",
    image: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://s53-benchlist-server.onrender.com/data/${id}`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:7000/data/${id}`, data);
      console.log(response);
      navigate("/8")
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <div>
      <form>
        <div className="form-container">
          <div className="form-group">
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={data.name}
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
                value={data.placename}
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
                value={data.location}
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
                value={data.image}
                onChange={handleChange}
              />
            </label>
          </div>
          <br />
          <div className="form-group">
            <button onClick={handleSubmit} type="submit">Update</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditForm;
