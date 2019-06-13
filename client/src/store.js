import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from './router'

Vue.use(Vuex)

//Allows axios to work locally or live
let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let auth = Axios.create({
  baseURL: base + "auth/",
  timeout: 3000,
  withCredentials: true
})

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    tasks: {}
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    },
    setBoards(state, boards) {
      state.boards = boards
    },
    setLists(state, lists) {
      state.lists = lists
    },
    setTasks(state, data) {
      Vue.set(state.tasks, data.listId, data.tasks)
      console.log(state.tasks)

    }
  },
  actions: {
    //#region -- AUTH STUFF --
    register({ commit, dispatch }, newUser) {
      auth.post('register', newUser)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    authenticate({ commit, dispatch }) {
      auth.get('authenticate')
        .then(res => {
          commit('setUser', res.data)
          // router.push({ name: 'boards' })
        })
        .catch(res => {
          router.push({ name: 'login' })
        })
    },
    login({ commit, dispatch }, creds) {
      auth.post('login', creds)
        .then(res => {
          commit('setUser', res.data)
          router.push({ name: 'boards' })
        })
    },
    logout({ commit, dispatch }) {
      auth.delete('logout')
        .then(res => {
          router.push({ name: 'login' })
        })
    },
    //#endregion


    //#region -- BOARDS --
    async getBoards({ commit, dispatch }) {
      await api.get('boards')
        .then(res => {
          commit('setBoards', res.data)

        })
    },
    addBoard({ commit, dispatch }, boardData) {
      api.post('boards', boardData)
        .then(serverBoard => {
          dispatch('getBoards')
        })
    },
    deleteBoard({ commit, dispatch }, boardId) {
      api.delete('boards/' + boardId)
        .then(res => {
          dispatch('getBoards')
        })
    },
    //#endregion


    //#region -- LISTS --
    async getLists({ commit, dispatch }, id) {
      await api.get('boards/' + id + '/lists')
        .then(res => {
          commit('setLists', res.data)
        })
    },
    addList({ commit, dispatch }, listData) {
      api.post('lists', listData)
        .then(serverList => {

          dispatch('getLists', listData.boardId)
        })
    },
    deleteList({ commit, dispatch }, list) {
      api.delete('lists/' + list._id)
        .then(res => {
          dispatch('getLists', list.boardId)
        })
    },
    async createTask({ commit, dispatch }, payload) {
      await api.post('tasks', payload)
        .then(res => {
          dispatch('getTasks', payload.listId)
        })
    },
    async getTasks({ commit, dispatch }, listId) {

      await api.get('lists/' + listId + '/tasks')
        .then(res => {
          commit('setTasks', { listId, tasks: res.data })

        })
    },
    async moveTask({ commit, dispatch }, data) {

      let res = await api.put('tasks/' + data.task._id, data.task)
        .then(res => {
          dispatch('getTasks', data.task.listId)
          dispatch('getTasks', data.oldId)
        })
    },
    deleteTask({ commit, dispatch }, data) {
      api.delete('tasks/' + data.taskId)
        .then(res => {
          dispatch('getTasks', data.listId)
        })
    },
    async updateTask({ commit, dispatch }, task) {
      let res = await api.put('tasks/' + task._id, task)
        .then(res => {
          dispatch('getTasks', task.listId)
        })
    },


  }
})
