import React from 'react';
import NavBar from '../navBar/navBar';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import api from '../../api';

const CadDep: React.FC = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = async (data: any) => {
      await api.post('/dependente', {
        nome: data.nome,
        nome_social: data.nomeSocial,
        cpf: data.cpf,
        clienteId: data.clienteId
      });
      navigate('/dependentes');
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
          position: 'relative'
        }}>
            <form action="" onSubmit={handleSubmit(onSubmit)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '25px',
                width: '100%',
                height: '60vh',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "#FFF8F0"
            }}
            >
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '30%',
                    }}>
                        <label htmlFor="nome">Nome</label>
                        <input type="text" required={true} {...register("nome")} />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '30%'
                    }}>
                        <label htmlFor="nomeSocial">Nome Social</label>
                        <input type="text"  required={true}  {...register("nomeSocial")}  />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '30%'
                    }}>
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" required={true}  {...register("cpf")}  />
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '30%'
                    }}>
                        <label htmlFor="clienteId">Id do Titular</label>
                        <input type="text" required={true}  {...register("clienteId")}  />
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
    </>
  );
}

export default CadDep;
