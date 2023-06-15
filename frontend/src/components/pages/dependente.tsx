import React, { useEffect, useState } from 'react';
import NavBar from '../navBar/navBar';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import api from '../../api';

const Dependentes: React.FC = () => {
  
  
  const [editModalDependente, setModalEditDependente] = useState(false);

  const [currentId, setCurrentId] = useState();

  const [dependentes, setDependentes] = useState([]);

  useEffect(() => {

      async function loadDependentes() {
          const response = await api.get(`/dependentes`);
          setDependentes(response.data.data);
      }
      loadDependentes();
  }, []);


  const deleteDependente = (id: any) => {
    api.delete(`/dependente/${id}`)
    window.location.reload()
  } 

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const onSubmit = async (data: any) => {
    await api.put(`/dependente/${currentId}`, {
      nome: data.nome,
      nome_social: data.nome_social,
      cpf: data.cpf,
      clienteId: data.clienteId
    });   
    setModalEditDependente(false);
    window.location.reload()
  };

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
            }}>Dependentes</h1>
            <Link to={"/cadDep"}>
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
                {dependentes ? (
                  dependentes.map(item =>
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
                          Nome: {item["nome"]} <br /> Nome Social: {item["nome_social"]} <br /> CPF: {item["cpf"]} <br /> Id do Titular: {item["clienteId"]}
                          <div>
                            <button
                              style={{
                                color: "black",
                                fontSize: "1.5rem",
                                backgroundColor: "white",
                                border: "none",
                                cursor: "pointer",
                                background: "#FFF8F0"
                              }}
                              onClick={() => {
                                setModalEditDependente(true); 
                                setCurrentId(item["id"]);
                              }}
                            >
                              &#9998;
                            </button>

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
                                deleteDependente(item["id"]);
                              }}
                            >
                              &#128465;
                            </button>
                          </div>
                        </li>
                      </React.Fragment>
                  )
                ) : 
                  <p>Não existem dependentes</p>
                }
            </ul>
            {editModalDependente ? 
              <div style={{ 
                marginTop: "10px",
                width: "60%",
                height: "50vh",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                backgroundColor: "#e8e2da",
                border: "1px solid black",
                position: 'absolute'
              }}>
                <div style={{
                  display: "flex",
                  alignItems: 'center',
                  flexDirection: 'column'
                }}>
                  <div style={{
                    display: "flex",
                    alignItems: 'center'
                  }}>
                    <h1>Editar Cliente</h1>
                    <div style={{paddingLeft: "50px"}}>
                      <button onClick={() => setModalEditDependente(false)}
                      style={{

                        width: '30px',
                        height: '30px',
                        borderRadius: '999px',
                        border: 'none',
                        fontSize: '1rem',
                        cursor: 'pointer',
                        backgroundColor: "#8B2635",
                        boxShadow: "#5E5DF0 0 10px 20px -10px;",
                        outline:"0 solid transparent;"
                      }}
                      >X</button>
                    </div>
                  </div>
                  
                  <div>
                    <form action="" onSubmit={handleSubmit(onSubmit)}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '25px',
                        width: '100%',
                        height: '35vh',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                    >
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%',
                            }}>
                                <label htmlFor="nome">Alterar Nome</label>
                                <input type="text" required={true} {...register("nome")} />
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%'
                            }}>
                                <label htmlFor="nome_social">Alterar Nome Social</label>
                                <input type="text"  required={true}  {...register("nome_social")}  />
                            </div>
                            <div style={{
                                display: 'flex',
                                flexDirection: 'column',
                                width: '100%'
                            }}>
                                <label htmlFor="cpf">Alterar CPF</label>
                                <input type="text" required={true}  {...register("cpf")}  />
                            </div>
                            <div>
                                <button type="submit" style={{
                                    width: '100px',
                                    height: '40px',
                                    backgroundColor: 'black',
                                    color: 'white',
                                    fontSize: '1rem',
                                    borderRadius: '10px',
                                    cursor: 'pointer'
                                }}>Enviar</button>
                            </div>
                        </form>
                  </div>
                </div>
              </div> 
              : null
            }


        </div>

    </>
  );
}

export default Dependentes;
