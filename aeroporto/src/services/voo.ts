import axios from "axios";
import { Voo } from "../model/voo";

export async function getVoo(): Promise<Voo[]> {
  const { data } = await axios
    .create({ headers: { 'Content-Type': 'application/json' }})
    .get('http://localhost:8000/voos');
  return data;
}