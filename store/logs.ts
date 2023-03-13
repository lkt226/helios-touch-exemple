import { defineStore } from 'pinia'

export interface logObject {
  error?: [],
  warn?: []
}

export interface LogState {
  id: string,

  logs: logObject,
  sitemap: string[]
}

const state = (): LogState => ({
  id: useCookie('gatID').value || '',

  logs: {
    error: [],
    warn: []
  },
  
  sitemap: []
});

const getters = {
}

const actions = {
  addSiteMap () {
    this.sitemap.push(window.location.pathname)
  },
  addLogs (args: any, type: string) {
    this.logs[type].push(args)
  },
}

export const useLogStore = defineStore('logStore', {
  state,
  getters,
  actions
})