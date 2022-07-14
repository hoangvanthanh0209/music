import songRoute from './song.js'

const routes = (app) => {
    app.use('/', songRoute)
}

export default routes
