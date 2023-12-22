import { defineStore } from 'pinia'

export const useSettingsStore = defineStore('settings', {
    persist: true,
    state: () => ({
        currentLocale: 'fr',
        event: null,
        country: null,
        units: [
            {
                code: 'imperial',
                label: 'Imperial'
            },
            {
                code: 'metric',
                label: 'Metric'
            }
        ],
        unit: 'metric',
        locked: false,
        modal: {
            open: false,
            title: '',
            template: null,
            content: null,
            hasImage: false,
            isFullWidth: false,
            isFullHeight: false,
        }
    }),

    actions: {
        changeUnit(code) {
            this.unit = code
        },
        changeLocale(code) {
            this.currentLocale = code
        },
        setModalProps(payload) {
            this.modal = payload
        },
        closeModal() {
            this.modal = {
                open: false,
                title: '',
                template: null,
                content: null,
                hasImage: false,
                isFullWidth: false,
                isFullHeight: false,
            }
        },
        setEvent(event) {
            this.event = event
        }
    }
})