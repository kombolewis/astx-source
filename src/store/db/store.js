import axios from 'axios';
import urls from './imageUrl'




const state = {
  allItems: [],
  neoFeedItems:[],
  item:[]



};

const getters = {
  getAllItems: () => state.allItems.near_earth_objects.filter((obj,i) => {
    if(i < 10){
      obj["url"] = urls[i]
      return obj
    }
    return obj
  }),

  getAllNeoFeedItems: () => Object.entries(state.neoFeedItems.near_earth_objects).filter((arr, index) => {
    if(index < 10){
      return arr[1].filter((obj,i) => {
        if(i < 10){
          obj["url"] = urls[i]
          return obj

        }
        return obj
      })
    }
    return arr

  }),
  getItem: (state) => {
      state.item['url'] = urls[0]
      return state.item
  }


};

const actions = {


    fetchAllItems({commit}) {
        return new Promise((resolve, reject) => {
            axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=orANB8DheHxjinik46IeGBb4iIpbBGF1pLfDk7QR') 
            .then(response => {
                commit('setItems', response.data)
                resolve(response.data)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
        
    },


    fetchFromNeoFeed({commit}, dates) {
        return new Promise((resolve, reject) => {
            axios.get(`https://api.nasa.gov/neo/rest/v1/feed?start_date=${dates[0]}&end_date=${dates[1]}&api_key=orANB8DheHxjinik46IeGBb4iIpbBGF1pLfDk7QR`) 
            .then(response => {
                commit('setNeoFeedItems', response.data)
                resolve(response.data)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
        
    },
    fetchItem({commit},id) {
        return new Promise((resolve, reject) => {
            axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=orANB8DheHxjinik46IeGBb4iIpbBGF1pLfDk7QR`) 
            .then(response => {
                commit('setItem', response.data)
                resolve(response.data)
            })
            .catch(err => {
                console.log(err)
                reject(err)
            })
        })
        
    },


};

const mutations = {
    setItems: (state, data) => (state.allItems = data),
    setItem: (state, data) => (state.item = data),
    setNeoFeedItems: (state, data) => (state.neoFeedItems = data),


};

export default {
    state,
    getters,
    actions,
    mutations
};
