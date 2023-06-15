import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/navBar';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import api from '../../api';

const Hospedagens: React.FC = () => {

  const [currentId, setCurrentId] = useState();

  const [hospedagens, setHospedagens] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {

      async function loadHospedagens() {
          const response = await api.get(`/acomodacao`);
          setHospedagens(response.data.data);
      }
      loadHospedagens();
  }, []);


  const deleteCliente = (id: any) => {
    api.delete(`/acomodacao/${id}`)
    window.location.reload()
    navigate('/hospedagens');
  }

  const getClientName = (id: any) => {
    api.get(`/cliente/${id}`).then(item => {
      return item.data.data["nome"]
    })
  }

  const getAcomodName = (id: any) => {
    api.get(`/acomodacoes/${id}`)
  }

  return (
    <>
        <NavBar />

        <div style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: 'relative',
          backgroundColor: "#FFF8F0"
        }}>
            <h1 style={{
              textAlign: 'center'
            }}>Hospedagens</h1>
            
            <Link to={"/cadHosp"}>
            <input type="button" value="Cadastrar!" style={{     
              width: '150px',
              height: '50px',
              borderRadius: '999px',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              backgroundColor: "#5E5DF0",
              boxShadow: "#5E5DF0 0 10px 20px -10px;",
              outline:"0 solid transparent;"
              }}/>
            </Link>
            <ul style={{
              width: "50%"
            }}>
                {hospedagens ? (
                  hospedagens.map(item =>
                      <React.Fragment key={item}>
                        <li
                          style={{
                            borderBottom: "5px solid black",
                            fontSize: "1.7rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                          }}
                        >
                          Acomodação:<br/>
                          Id do Cliente: {item["clienteId"]} <br /> 
                          Id da Acomodação: {item["acomodacoIdAcomodacao"]}

                          <div>
                            <button
                              style={{
                                color: "red",
                                fontSize: "1.5rem",
                                backgroundColor: "white",
                                border: "none",
                                cursor: "pointer",
                                background: "#FFF8F0"
                              }}
                              onClick={() => {
                                deleteCliente(item["id"]);
                              }}
                            >
                              &#128465;
                            </button>
                          </div>
                        </li>
                      </React.Fragment>
                  )
                ) : (
                  <p>Não existem usuários</p>
                )}
            </ul>

        </div>

    </>
  );
}

export default Hospedagens;
