import { defineStore } from 'pinia'

export interface Message {
  id: number | string;
  text: string;
  type: string;
  time: number;
  active: boolean;
  createdAt: Date;
}

export interface MessageAdd {
  id?: string;
  text: string;
  time?: number;
  type?: 'success' | 'error' | 'warning' | '';
}

export interface MessageState {
  history: Message[] | undefined[],
  message: any
}

const state = (): MessageState => ({
  history: [],
  message: {}
});

const getters = {
  getMessage (): any {
    return this.message
  },
  getById: (state: MessageState) => (id: string) => {
    return state.history.find((item: Message) => item.id === id)
  },
  getOrdernedMessages: (state: MessageState) => {
    return  state.history.sort(
      (a: Message, b: Message) => {
        a.createdAt.getMilliseconds() - b.createdAt.getMilliseconds()
      }
    )
  }
}

const actions = {
  add (partialMessage: MessageAdd) {
    const message = {
      id: this.history.length,
      time: 4,
      type: 'neutral',

      ...partialMessage,
      active: true,
      createdAt: new Date()
    }

    this.message = message
    this.history.push(message)
    
    setTimeout(() => {
      this.remove(message.id)
    }, message.time * 1000)
  },
  remove (id: number) {
    this.history[id].active = false
    this.message = {}
  }
}

export const useConsoleStore = defineStore('consoleStore', {
  state,
  getters,
  actions
})