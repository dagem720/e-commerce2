import * as firebase from 'firebase'

export default {
  state: {
    loadedMeetups: [
      
    ]
  },
  mutations: {
    setLoadedMeetups (state, payload) {
      state.loadedMeetups = payload
    },
    createMeetup (state, payload) {
      state.loadedMeetups.push(payload)
    },
    
  },
  actions: {
    loadMeetups ({commit}) {
     
      firebase.database().ref('items/allItems').once('value')
        .then((data) => {
          const item = []
          const obj = data.val()
          for (let key in obj) {
              console.log(key)
            item.push({
              id: key,
              title: obj[key].title,
              description: obj[key].description,
              imageUrl: obj[key].imageUrl,
              date: obj[key].date,
              location: obj[key].location,
             
            })
          }
          commit('setLoadedMeetups', item)
        
        })
        .catch(
          (error) => {
            console.log(error)
           
          }
        )
    },
    createMeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        description: payload.description,
        date: payload.date.toISOString(),
        
      }
      let imageUrl
      let key
      firebase.database().ref('items/allItems').push(meetup)
        .then((data) => {
          key = data.key
          return key
        })
        .then(key => {
          const filename = payload.image.name
          const ext = filename.slice(filename.lastIndexOf('.'))
          return firebase.storage().ref('item/' + key + '.' + ext).put(payload.image)
        })
        .then(fileData => {
          imageUrl = fileData.metadata.downloadURLs[0]
          console.log(imageUrl)
          return firebase.database().ref('items/allItems').child(key).update({imageUrl: imageUrl})
        })
        .then(() => {
          commit('createMeetup', {
            ...meetup,
            imageUrl: imageUrl,
            id: key
          })
        })
        .catch((error) => {
          console.log(error)
        })
      // Reach out to firebase and store it
    },
    
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups
     
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
   
  }
}
