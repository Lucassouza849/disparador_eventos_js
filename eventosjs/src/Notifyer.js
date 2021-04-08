const Notifyer = {
    async init() {
        const permissison = await Notification.requestPermission()
        if (permissison != "granted") {
            throw new Error('permissão negada')
        }

    },

    notify({ title, body, icon }) {
        return () => new Notification(title, {
            body,
            icon
        })
    }
}

export { Notifyer }
