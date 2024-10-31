function solucao(agenda: string[], cancelamento: string): string | string[] {
  const  corresponde = agenda.indexOf(cancelamento);
  if (corresponde !== -1) {
    agenda.splice(corresponde, 1);
    return agenda;
  }else{
    return "PACIENTE NAO AGENDADO";
  }
}
export default solucao;
