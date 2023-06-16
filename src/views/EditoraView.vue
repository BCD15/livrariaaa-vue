<script>
import EditorasApi from "@/api/editoras";
const editorasApi = new EditorasApi();
export default {
  data() {
    return {
      editoras: [],
      editora: {},
    };
  },
  async created() {
    this.editoras = await editorasApi.buscarTodasAsEditoras();
  },
  methods: {
    async salvar() {
      if (this.editora.id) {
        await editorasApi.atualizarEditora(this.editora);
      } else {
        await editorasApi.adicionarEditora(this.editora);
      }
      this.editora = {};
      this.editoras = await editorasApi.buscarTodasAsEditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora);
    },
    async excluir(editora) {
      await editorasApi.excluirEditora(editora.id);
      this.editoras = await editorasApi.buscarTodasAsEditoras();
    },
  },
};
</script>

<template>
  <h1>Editoras</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="editora.nome" placeholder="Nome" />
    <input type="text" v-model="editora.site" placeholder="site" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="editora in editoras" :key="editora.id">
      <span @click="editar(editora)">
        ({{ editora.id }}) - {{ editora.nome }} - {{ editora.site }}
      </span>
      <button @click="excluir(editora)">X</button>
    </li>
  </ul>
</template>

<style></style>
