import React from "react";
import { Card } from "./components/Card";
import contacts from "./contacts";

function App(props) {
  return (
    <div>
      <h1 className="heading">Meus Contatos</h1>

      {contacts.map((contact) => (
        <Card
          key={contact.id}
          id={contact.id}
          name={contact.name}
          imgURL={contact.imgURL}
          tel={contact.phone}
          email={contact.email}
        />
      ))}
    </div>
  );
}

export default App;
