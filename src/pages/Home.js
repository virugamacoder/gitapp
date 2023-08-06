import React, { useContext, useState } from "react";
import { Row, Col, Input, InputGroup, Container, Button } from "reactstrap";

// two componets usercard repos
import UserCard from "../Components/UserCard";
import Repos from "../Components/Repos";
import {Redirect} from "react-router-dom"
import {UserContext} from "../context/UserContext"
import {toast}from "react-toastify"
import Axios  from "axios";

const Home = () => {
  const context = useContext(UserContext);
  const [user,setUser] = useState(null);
  const [query,setQuery] = useState('');
    
  const fetchDetalis = async() =>{
      try{
          const {data} = await Axios.get(`https://api.github.com/users/${query}`);
          setUser(data);
      }catch(error){
        toast("Not Able to Locate User",{type:"error"});
        setQuery('');
        setUser(null);
      }
  }
   
  if(!context.user?.uid){
    return <Redirect to="/signin"/>
  }

  return (
    <Container>
      <Row className="mt-3">
        <Col md="5">
          <InputGroup>
            <Input type="text" value={query}   onChange={e=> setQuery(e.target.value)} placeholder="Plase Enter A Username" 
                
            />

            <Button color="primary" onClick={fetchDetalis}>Fetch User</Button>
          </InputGroup>

          {user? <UserCard user={user}/>: null}
        </Col>

        <Col md="7">
        {user? <Repos repos_url={user.repos_url}/>: null}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
