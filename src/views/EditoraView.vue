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
        await editorasApi.atualizareditora(this.editora);
      } else {
        await editorasApi.adicionareditora(this.editora);
      }
      this.editora = {};
      this.editoras = await editorasApi.buscarTodasAseditoras();
    },
    editar(editora) {
      Object.assign(this.editora, editora);
    },
    async excluir(editora) {
      await editorasApi.excluireditora(editora.id);
      this.editoras = await editorasApi.buscarTodasAseditoras();
    },
  },
};
</script>

<template>
  <h1>Editoras</h1>
  <hr />
  <div class="form">
    <input type="text" v-model="editora.nome" placeholder="Descrição" />
    <button @click="salvar">Salvar</button>
  </div>
  <hr />
  <ul>
    <li v-for="editora in editoras" :key="editora.id">
      <span @click="editar(editora)">
        ({{ editora.id }}) - {{ editora.nome }} -
      </span>
      <button @click="excluir(editora)">X</button>
    </li>
  </ul>
</template>

<style></style>
