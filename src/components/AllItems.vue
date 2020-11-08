<template lang="pug">
  div
    h3.title Browse
    v-row 
      v-col(
        v-if="renderNewView == 'standardFilter'"
        sm="6"
        md="4"
        v-for="item in $store.getters.getAllItems.slice(0,10)"
        :key="item.id"
      )
        Vertical(:item="item")
    div(v-if="renderNewView == 'dateFilter'")
      v-row(
        v-for="(item,index) in filteredData"
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
    div(v-if="renderNewView == 'idFilter'")
      v-row
        v-col(
          sm="12"
          md="12"
        )
          VerticalStacked(:item="check")    
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
      console.log(arr)
      const newArr = arr.sort((a,b) => {
       return a.close_approach_data[0].epoch_date_close_approach - b.close_approach_data[0].epoch_date_close_approach

      })
      if(sliceEle)
        return newArr.slice(0,(arr.length-(sliceEle)))
      return newArr
    },
    dateSort(dates){

      return dates.sort( (a,b) => { 
        return new Date(a.val).getTime() - new Date(b.val).getTime() 
      });

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

       data.forEach((arr,arrIndex) => {
        Dates.push({index:arrIndex,val:arr[0]})
        if(arrIndex == (data.length-1)){
          sortedDates = this.dateSort(Dates)
          // console.log(sortedDates)

          sortedDates.forEach((item,ind) => {
            data.forEach((arr2, arrIndex2) => {
              if(item.index == arrIndex2){
                sortedArr.push(arr2)
              }
              if(ind == (sortedDates.length -1)){
                //finally sorted our data
                //end of the  both filters above
                sortedArr.forEach((elmObj) =>{
                  if (count > 0){
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
                        // console.log(Math.abs(elmObj[1].length))
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

                  }else{
                    return 
                  }
                })

              }
            })
          })


        }
      })


      return filteredArr.flat()
    },
    check(){
      let data = this.$store.getters.getItem
      console.log(data)
      return data
    }
  }

}
</script>