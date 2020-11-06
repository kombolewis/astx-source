import axios from 'axios';
import urls from './imageUrl'




const state = {
  allItems: [],
  neoFeedItems:[],



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

  }).flat(),

//   filtergetAllNeoFeedItems: (getters) => {
//      getters.getAllNeoFeedItems.filter((arr) => {
//           return arr.slice(0,2)
//       })
//   }
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
            // axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-11-02&end_date=2020-11-09&api_key=orANB8DheHxjinik46IeGBb4iIpbBGF1pLfDk7QR')
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
    

    async setCustomerId({commit}, data) {
       
        commit('setCustomerId', data)
    },

    getUserState(context, data) {
        return new Promise((resolve, reject) => {
            axios.post('/getUserState', {id_no:data.id_no})
            .then(response => {
                resolve(response.data)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })

    
  
    },

    setContact(context,data) {
        return new Promise((resolve, reject) => {
            axios.post('/setContact', {
                contact:data.contact,
                id_no:data.id_no
            })
            .then(response => {
                resolve(response.data)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
  
    },

    loginUser({commit},data) {
        return new Promise((resolve, reject) => {
            axios.post('/loginUser', {
                id_no:data.id_no,
                password:data.password
            })
            .then(response => {
                if(response.data.status == '22'){
                    const token = response.data.access_token
                    localStorage.setItem('access_token',token)
                    commit('setToken',token)
                }
                resolve(response.data)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
  
    },

    setUserPassword({commit},data) {
        return new Promise((resolve, reject) => {
            axios.post('/setPassword', {
                id_no:data.id_no,
                password:data.password
            })
            .then(response => {
                const token = response.data.access_token
                localStorage.setItem('access_token', token)
                commit('setToken',token)
                resolve(response.data)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
  
    },
    logoutUser({commit,state,getters}) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
        if(getters.loggedIn){
            return new Promise((resolve, reject) => {
                axios.post('/logout')
                .then(response => {
                    localStorage.removeItem('access_token')
                    commit('removeToken')
                    resolve(response.data)
                }).catch(err => {
                    localStorage.removeItem('access_token')
                    commit('removeToken')
                    reject(err)
                })
            })
        }
    },
    resetUserPassword(context,data) {
        return new Promise((resolve, reject) => {
            axios.post('/setPassword', {
                id_no:data.id_no,
                password:data.password
            })
            .then(response => {
                resolve(response.data)
            }).catch(err => {
                console.log(err)
                reject(err)
            })
        })
  
    },

    async requestUserInfo({commit,state}) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
        const response = await axios.get('/userInfo');  
        
        commit('setUserInfo', response.data)
    },

    fetchTransactions(context,data) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
        return new Promise((resolve, reject) => {
            axios.post('/fetchTransactions', {
                member_no:data.member_no,
                portfolio:data.portfolio
            })
            .then(response => {
                resolve(response.data)
            }).catch(err => {
                reject(err)
            })
        })
    },


    createAccount(context,data) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
        return new Promise((resolve, reject) => {
            axios.post('/register', data)
            .then(response => {
                resolve(response.data)
            }).catch(err => {
                reject(err)
            })
        })
    },

    getNav(context, data) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
        return new Promise((resolve, reject) => {
            axios.post('/fetchNav', {
                portfolio:data.portfolio
            })
            .then(response => {
                resolve(response.data)
            }).catch(err => {
                reject(err)
            })
        })
    },

    getPDFStatement(context, data) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token
        return new Promise((resolve, reject) => {
            axios.post('/getPDFStatement', {
                portfolio:data.portfolio,
                member_no:data.member_no
            })
            .then(response => {
                resolve(response.data)
            }).catch(err => {
                reject(err)
            })
        })
    },

};

const mutations = {
    setCustomerId: (state, data) => (state.id_no = data),
    setToken: (state, data) => (state.token = data),
    setItems: (state, data) => (state.allItems = data),
    setNeoFeedItems: (state, data) => (state.neoFeedItems = data),
    setUserInfo: (state, data) => (state.userInfo = data),
    removeToken: (state) => (state.token = null)


};

export default {
    state,
    getters,
    actions,
    mutations
};
