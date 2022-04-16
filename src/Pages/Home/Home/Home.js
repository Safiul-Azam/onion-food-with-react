import React from 'react';
import { Button, FormControl, InputGroup } from 'react-bootstrap';

const Home = () => {
    return (
        <div>
           <h2>Best Food waiting For your belly</h2>
           <InputGroup className="mb-3">
    <FormControl
      placeholder="Recipient's username"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
    />
    <Button variant="outline-secondary" id="button-addon2">
      Button
    </Button>
  </InputGroup>
        </div>
    );
};

export default Home;