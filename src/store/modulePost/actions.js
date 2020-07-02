import axiosInstance from "../../plugins/axios";

export default {
  // ở phần actions bắt đầu gọi Api của đường dẫn getListNewHasPaging

  async getListPostHasPaging({ commit }, { pagesize = 3, currPage = 1,tagIndex= null }) {
    commit("SET_LOADING",true);
    try {
      var config = {
       params:{
          pagesize,
         currPage,
         tagIndex
       }
        
      }
      if(tagIndex){
        config.params.tagIndex = tagIndex;
        var resultPost = await axiosInstance.get('/post/getListByCategory.php',config);
      }else{
         var resultPost = await axiosInstance.get('/post/getListPagination.php',config);
      }
      commit("SET_LOADING",false);
      if (resultPost.data.status === 200) {
        commit("GET_LIST_POST", resultPost.data.posts);
      }
      
    } catch (error) {
      console.log("error", error);
    }
  },

  // //Lấy dữ liệu List new trong category
  // async getListNewByCategory({ commit }, { pagesize = 3, currPage = 1, tagIndex= 7 }) {
  //     try {
  //         var resultPost = await axiosInstance.get(
  //           `/post/getListByCategory.php?pagesize=${pagesize}&currPage=${currPage}&tagIndex=${tagIndex}`
  //         );
  //         if (resultPost.data.status === 200) {
  //             commit("GET_LIST_POST", resultPost.data.posts);
  //         }
  //     } catch (error) {
  //         console.log("error", error);
  //     }
  // }
};