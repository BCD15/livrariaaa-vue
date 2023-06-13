import axios from 'axios';
export default class LivrosApi {
  async buscarTodasOsLivros() {
    const { data } = await axios.get('/livro/');
    return data;
  }
  async adicionarLivro(livro) {
    const { data } = await axios.post('/livro/', livro);
    return data;
  }
  async atualizarLivro(livro) {
    const { data } = await axios.put(`/livro/${livro.id}/`, livro);
    return data;
  }
  async excluirLivro(id) {
    const { data } = await axios.delete(`/livro/${id}/`);
    return data;
  }
}
