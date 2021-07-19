/* eslint-disable no-restricted-syntax */
/* eslint-disable react/button-has-type */
// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { FaUserPlus } from 'react-icons/fa';
// import { toast } from 'react-toastify';
// import { Container, Form } from '../../styles/global';

// import ConfirmDialog from '../../components/confirmDialog/confirmDialogComponent';
// import Filter from '../../components/filter/filterComponent';
// import { SearchArea, AddRelation } from './residenceEditStyle';
// import InputSearch from '../../components/inputSearch/inputComponent';
// import List from '../../components/list/listComponent';
// import actions from '../../store/modules/application/actions';
// import useClientsFiltered from '../../hooks/useClientsFiltered';
// import useFilterSearch from '../../hooks/useFilterSearch';
// import useClientsToAdd from '../../hooks/useClientsToAdd';

// function Register() {
//   const formRef = useRef(null);
//   const type = ['domicilio', 'comercio', 'outro'];
//   const [confirmSubmit, setConfirmSubmit] = useState(false);
//   const {
//     clientsSelected,
//     setClientsSelected,

//     handleAddClient,
//     cancelAddClient,
//   } = useClientsToAdd([]);

//   const [clientsFiltered, setClientsFiltered] = useClientsFiltered();
//   const { filterSearch, handleSelectFilter, inputRef } = useFilterSearch({
//     name: 'nome',
//   });

//   const clients = useSelector((state) => state.application.clients);
//   const dispatch = useDispatch();

//   function openDialogSubmit(e) {
//     e.preventDefault();
//     setConfirmSubmit(true);
//   }

//   function handleSubmit() {
//     setConfirmSubmit(false);
//     const data = {};
//     const form = formRef.current;
//     for (const i of form) {
//       switch (i.type) {
//         case 'radio':
//           if (i.checked) data[i.name] = i.value;
//           break;
//         default:
//           data[i.id] = i.value.trim();
//           break;
//       }
//     }

//     dispatch(
//       actions.createResidence({
//         data,
//         form,
//         clientsSelected,
//         setClientsSelected,
//       })
//     );
//   }

//   function handleSearch(e) {
//     const { value } = e.target;
//     setClientsFiltered(
//       clients
//         .filter((item) => item[[Object.keys(filterSearch)]].includes(value))
//         .slice(0, 3)
//     );
//   }

//   useEffect(() => {
//     setClientsFiltered(clients.slice(0, 3));
//   }, [clients, setClientsFiltered, clientsSelected]);

//   return (
//     <>
//       <ConfirmDialog
//         confirm={handleSubmit}
//         cancel={() => setConfirmSubmit(false)}
//         visible={confirmSubmit}
//         title="deseja cadastrar?"
//       />
//       <Container>
//         <h1> Ficha de Cadastro Residencial</h1>

//         <Form ref={formRef} onSubmit={openDialogSubmit}>
//           <div className="titleSection">Identificação</div>
//           <div className="identification">
//             <label htmlFor="neighborhood">
//               Bairro
//               <input
//                 type="text"
//                 size={30}
//                 name="neighborhood"
//                 id="neighborhood"
//               />
//             </label>

//             <label htmlFor="streetName">
//               Rua
//               <input
//                 maxLength={70}
//                 size={30}
//                 type="text"
//                 name="streetName"
//                 id="streetName"
//                 className="streetName"
//               />
//             </label>

//             <label htmlFor="number">
//               Nº
//               <input type="text" size={17} name="number" id="number" />
//             </label>

//             <label htmlFor="type">
//               Tipo de imóvel
//               <select name="type" id="type">
//                 {type.map((e) => (
//                   <option key={e}>{e}</option>
//                 ))}
//               </select>
//             </label>

//             <div className="radioArea">
//               <span>Situação de moradia/Posse de terra</span>
//               <label htmlFor="proprio">
//                 <input
//                   type="radio"
//                   name="situation"
//                   id="proprio"
//                   value="proprio"
//                 />
//                 Próprio
//               </label>
//               <label htmlFor="financiado">
//                 <input
//                   type="radio"
//                   name="situation"
//                   id="financiado"
//                   value="financiado"
//                 />
//                 Financiado
//               </label>
//               <label htmlFor="alugado">
//                 <input
//                   type="radio"
//                   name="situation"
//                   id="alugado"
//                   value="alugado"
//                 />
//                 Alugado
//               </label>
//               <label htmlFor="arrendado">
//                 <input
//                   type="radio"
//                   name="situation"
//                   id="arrendado"
//                   value="arrendado"
//                 />
//                 Arrendado
//               </label>
//               <label htmlFor="cedido">
//                 <input
//                   type="radio"
//                   name="situation"
//                   id="cedido"
//                   value="cedido"
//                 />
//                 Cedido
//               </label>
//               <label htmlFor="ocupacao">
//                 <input
//                   type="radio"
//                   name="situation"
//                   id="ocupacao"
//                   value="ocupacao"
//                 />
//                 Ocupacao
//               </label>
//               <label htmlFor="outra">
//                 <input type="radio" name="situation" id="outra" value="outra" />
//                 Outra
//               </label>
//             </div>
//           </div>

//           <div className="titleSection">Moradores</div>
//           <div className="identification">
//             {clientsSelected.length <= 0 ? (
//               <span>Ainda não há moradores adicionados</span>
//             ) : (
//               <List
//                 pageList={false}
//                 add={false}
//                 data={clientsSelected}
//                 indexData={{
//                   updated_at: 'data',
//                   name: 'nome do cidadão',
//                   cns: 'cns',
//                   birthDate: 'data de nascimento',
//                 }}
//                 handlers={cancelAddClient}
//               />
//             )}
//           </div>

//           <div className="titleSection">Adicionar moradores cadastrados</div>
//           <AddRelation>
//             <SearchArea>
//               <span className="title">buscar cidadão</span>
//               <InputSearch
//                 innerRef={inputRef}
//                 width="300px"
//                 placeholder={[Object.values(filterSearch)]}
//                 onChange={handleSearch}
//               />
//               <Filter
//                 onChange={handleSelectFilter}
//                 data={{
//                   name: 'nome',
//                   cns: 'cns',
//                   birthDate: 'data de nascimento',
//                 }}
//               />
//             </SearchArea>
//             <List
//               pageList={false}
//               add
//               data={clientsFiltered}
//               indexData={{
//                 updated_at: 'data',
//                 name: 'nome do cidadão',
//                 cns: 'cns',
//                 birthDate: 'data de nascimento',
//               }}
//               handlers={handleAddClient}
//             />
//           </AddRelation>
//           <button type="submit">Cadastrar</button>
//           <button id="btnReset" type="reset">
//             cancelar
//           </button>
//         </Form>
//       </Container>
//     </>
//   );
// }

// export default Register;
