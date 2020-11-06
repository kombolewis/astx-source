<template lang="pug">
  div
    h3.title Browse
    v-row 
      v-col(
        v-if="renderNewView"
        sm="6"
        md="4"
        v-for="item in $store.getters.getAllItems.slice(0,9)"
        :key="item.id"
      )
        Vertical(:item="item")
    div(v-if="!renderNewView")
      v-row(
        v-for="(item,index) in $store.getters.getAllNeoFeedItems"
        :key="item.index"
      )
        div(v-if="typeof(item)== 'string'")
          VerticalStacked(:item="{year:item}")
        v-col(
          sm="6"
          md="4"
          v-else
          v-for="i in item" 
          :key="i.id"
        )
          VerticalStacked(:item="i")
      
</template>

<script>
import Vertical from './cards/Vertical'
import VerticalStacked from './cards/VerticalStacked'

export default {
  name:'AllItems',
  props:['renderNewView'],
  components:{
    Vertical,VerticalStacked

  },

  methods:{
    arrSort(arr, sliceEle=0){
      console.log(sliceEle)
      return arr
    },
    dateSort(dates){
      let newDates = []
      const testdata = dates.filter((date,index) => {
        if(index == 0){
          console.log(date)
          newDates.push(date)

        }else{
          
          let recentDat = new Date(date.val)
          console.log(date.val)
          return newDates.filter((item, loc) => {
            let storageDat = new Date(item.val)
              // console.log(item.val)
              // 23
            if(recentDat < storageDat){

              return newDates.splice(loc,0,date)

            }
            else if(loc == (newDates.length-1)){
                
              return newDates.push(date)

            }


          })
        }



      })
      console.log(testdata)

      return dates
    }
  },
  computed:{
    filteredData(){
      const data = this.$store.getters.getAllNeoFeedItems
      const filteredArr = [];
      const Dates = []
      const sortedArr = []
      let sortedDates = []
      let count = 10

      //sort the dates
      //create an array of objects of the dates and their indexes
      //sort the dates
      //create a new array with elements  from sm -lg
      //we need 10 items
      //so for each day before we call a sort function we determine the elements that will 
      //be returned 

      const testing = data.filter((arr,arrIndex) => {
        Dates.push({index:arrIndex,val:arr[0]})
        if(arrIndex == (data.length-1)){
          sortedDates = this.dateSort(Dates)
          // console.log(sortedDates)

          return sortedDates.filter((item,ind) => {
            return data.filter((arr2, arrIndex2) => {
              if(item.index == arrIndex2){
                sortedArr.push(arr2)
              }
              if(ind == (sortedDates.length -1)){
                //finally sorted our data
                return sortedArr.filter((elmObj) =>{
                  let res = elmObj[1].length - count

  
                  switch (Math.sign(res)) {
                    case -1:
                      //convert to pos number and set as new count
                      // it will return everything
                      count = Math.abs(res)
                      filteredArr.push( [elmObj[0],this.arrSort(elmObj[1])] )

                      break;
                    case 1:
                      //need to slice some elements
                      count = 0
                      filteredArr.push( [elmObj[0],this.arrSort(elmObj[1], Math.abs(res))])

                      break;
                    case 0:
                      //elements fit ten exact
                      count = 0;
                      filteredArr.push( [elmObj[0],this.arrSort(elmObj[1])] )
                      break;

                    default:
                      break;
                  }
                  if(!count)
                    return filteredArr

                })

              }
            })
          })


        }
      })
      console.log(testing)

      


      return data.flat()
    }
  }

}
</script>