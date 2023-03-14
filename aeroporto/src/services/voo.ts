import axios from "axios";
import { Voo } from "../model/voo";

export async function getVoo(): Promise<Voo[]> {
  const { data } = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://127.0.0.1:8080/cargos');
  return data;
}