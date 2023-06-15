import React from 'react';

function NavBar() {
  return (
    <>
        <div style={{
            margin: "50px",
            display: "flex",
            justifyContent: 'space-around',
            fontSize: "1.5rem",
        }}>
            <a href="/" style={{color:"black"}}>Clientes</a>
            <a href="/dependentes" style={{color:"black"}}>Dependentes</a>
            <a href="/acomodacoes" style={{color:"black"}}>Acomodações</a>
            <a href="/hospedagens" style={{color:"black"}}>Hospedagens</a>
        </div>
    </>
  );
}

export default NavBar;
