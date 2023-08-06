import React, { useState, useEffect } from "react";

import { ListGroup, ListGroupItem } from "reactstrap";
import Axios from "axios";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const {data} = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(()=>{
    fetchRepos();
});

  return (
    <ListGroup>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div className="text-primary">{repo.name}</div>
          <div className="text-primary">{repo.language}</div>
          <div className="text-primary">{repo.description}</div>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
