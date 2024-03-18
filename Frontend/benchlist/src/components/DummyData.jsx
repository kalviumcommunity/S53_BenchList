
import {
    Text,
    Flex,
    Button,
    Icon,
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Switch,
    HStack,
    Avatar,
    WrapItem,
    Container,
    Input,
    VStack,
    InputGroup,
    InputRightElement,
    IconButton,
    Select,
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import axios from "axios";
  import "../App.css";
  import { useEffect, useState } from "react";
  
  const BenchList = () => {
    const [data, setData] = useState([]);
    const [selectedName, setSelectedName] = useState("");
    const [filteredData, setFilteredData] = useState([]);
  
    useEffect(() => {
      const getData = async () => {
        const response = await axios
          .get("https://s53-benchlist-server.onrender.com/data")
          .then((data) => {
            setData(data.data);
            setFilteredData(data.data);
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      };
      getData();
    }, []);
 
    const handleNameChange = (e) => {
      setSelectedName(e.target.value);
      const filteredImages = data.filter((item) => item.name === e.target.value);
      setFilteredData(e.target.value ? filteredImages : data);
    };
  
    return (
      <>
        <div className="container">
          <div className="searchbar">
            <Container marginTop="50px" maxW="container.lg">
              <Select
                onChange={handleNameChange}
                maxW={"xs"}
                placeholder="Select option"
                value={selectedName}
              >
                {data.map((user) => (
                  <option key={user._id} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </Select>
            </Container>
          </div>
          <div className="cardContainer">
            {filteredData.map((elem) => {
              return (
                <div className="card" key={elem._id}>
                  <div className="img">
                    <img src={elem.img} alt="" />
                  </div>
                  <div className="location">
                    <div className="locationEmoji">
                      <img
                        src="https://e7.pngegg.com/pngimages/457/630/png-clipart-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-thumbnail.png"
                        alt=""
                      />
=======
import { Link } from "react-router-dom"
import axios from 'axios'
import '../App.css'
import { useEffect, useState } from "react"

const benchList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {

            const response = await axios.get("https://s53-benchlist-server.onrender.com/data")
                .then((data) => {
                    setData(data.data);
                    console.log(data);
                }).catch((err) => {
                    console.log(err);
                })
        }
        getData()
    }, [])

    return (
        <>
            <div className="container">
                <div className="cardContainer">
                    {
                        data.map((elem) => {
                            return (

                                <div class="card">
                                    <div className="img">
                                        <img src={elem.img} alt="" />
                                    </div>
                                    <div className="location">
                                        <div className="locationEmoji"><img src="https://e7.pngegg.com/pngimages/457/630/png-clipart-location-logo-location-computer-icons-symbol-location-miscellaneous-angle-thumbnail.png" alt="" /></div>
                                        <div className="text">{elem.placeName}</div>
                                    </div>
                                    <div className="placename">
                                        <p className="text">
                                            {elem.location}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="editcard">
                    <div className="text">
                        <h3>You find any new place?</h3>
                    </div>
                    <div className="addButton">
                        <button><Link to="/7">ADD</Link></button>
                    </div>
                    <div className="editButton">
                        <button><Link to="/8">EDIT</Link></button>
                    </div>
                    <div className="text">{elem.placeName}</div>
                  </div>
                  <div className="placename">
                    <p className="text">{elem.location}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="editcard">
            <div className="text">
              <h3>You find any new place?</h3>
            </div>
            <div className="addButton">
              <button>
                <Link to="/7">ADD</Link>
              </button>
            </div>
            <div className="editButton">
              <button>
                <Link to="/8">EDIT</Link>
              </button>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default BenchList;