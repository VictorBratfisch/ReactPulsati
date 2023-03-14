import axios from "axios";
import { Aeroporto } from "../model/aeroporto";

export async function getAllAeroporto(): Promise<Aeroporto[]> {
  const {data} = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8000/aeroporto');
  return data;
}

export async function getAeroporto(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .get(`http://localhost:8000/aeroporto/${id}`);  
}

export async function postAeroporto(dados: Aeroporto) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .post('http://localhost:8000/aeroporto', dados);
}

export function deleteAeroporto(id: number) {
  return axios.create({ headers: { 'Content-Type': 'application/json' }})
    .delete(`http://localhost:8000/aeroporto/${id}`);
}

export async function putAeroporto(dados: Aeroporto){
  return axios.create({headers:{'Content-Type':'application/json'}})
    .put(`http://localhost:8000/aeroporto/${dados.codigo}`,dados);
}