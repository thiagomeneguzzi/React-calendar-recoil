import { selector } from "recoil";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
  key: 'eventosFiltradosState',
  get: ({ get }) => {
    const filtro = get(filtroDeEventos)
    const todosEventos = get(listaDeEventosState)
    
    const eventos = todosEventos.filter(evento => {
      if(!filtro.data) {
        return true
      }
      
      const ehMesmoDia = filtro.data.toISOString().slice(0, 10) === evento.inicio.toISOString().slice(0, 10)
      return ehMesmoDia
    })

    return eventos
  }
})