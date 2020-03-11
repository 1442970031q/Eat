export default {
    getHomeData(state, page) {
        state.home.data = page.data.Data
        state.home.isLoadding = false
    }
}