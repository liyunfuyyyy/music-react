import { Map } from 'immutable'

const defaultState = Map({
  topBanners: []
})
function reducer(state = defaultState, action) {
  switch (action.type) {
    default:
      return state
  }
}
export default reducer