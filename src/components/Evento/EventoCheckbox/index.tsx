import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../../interfaces/IEvento';
import { listaDeEventosState } from '../../../state/atom';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {
  
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState)

  function alterarStatus() {
    const eventoAlterado = {...evento}
    eventoAlterado.completo = !eventoAlterado.completo

    setListaDeEventos(listaAntiga => {
      const index = listaAntiga.findIndex(evt => evt.id === evento.id)
      return [...listaAntiga.slice(0, index), eventoAlterado, ...listaAntiga.slice(index + 1)]
    })
  }

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  return (<i className={estilos.join(' ')} onClick={alterarStatus}></i>)
}

export default EventoCheckbox