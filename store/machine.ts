import { defineStore } from 'pinia'

export const useMachineStore = defineStore('machine', {
    persist: true,
    state: () => ({
        identifier: null,
        name: null,
        details: {},
        attachments: [],
        innovations: [],
        services: []
    }),

    actions: {
        setMachine(payload) {
            this.identifier = payload.identifier
            this.name = payload.name
            if (payload.details) this.details = payload.details
            if (payload.attachments) this.attachments = payload.attachments
        },
        setAttachments({attachments}) {
            this.attachments = attachments
        },
        setInnovations({innovations}) {
            this.innovations = innovations
        },
        setServices({services}) {
            this.services = services
        },
        resetMachine() {
            this.identifier = null
            this.name = null
            this.details = {}
            this.attachments = []
            this.innovations = []
            this.services = []
        }
    }
})