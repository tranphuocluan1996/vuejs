import axiosInstance from "../../plugins/axios";

export default {
  // ở phần actions bắt đầu gọi Api của đường dẫn getListNewHasPaging

  async getListPostHasPaging({ commit }, { pagesize = 3, currPage = 1 }) {
    console.log("getListPostHasPaging");
    try {
      var resultPost = await axiosInstance.get(
        `/post/getListPagination.php?pagesize=${pagesize}&currPage=${currPage}`
      );
      if (resultPost.data.status === 200) {
        commit("GET_LIST_POST", resultPost.data.posts);
      }
      console.log("resultPost = ", resultPost);
    } catch (error) {
      console.log("error", error);
    }
  },

  //Lấy dữ liệu List new trong category
  async getListNewByCategory({ commit }, { pagesize = 3, currPage = 1, tagIndex= 7 }) {
      try {
          var resultPost = await axiosInstance.get(
            `/post/getListByCategory.php?pagesize=${pagesize}&currPage=${currPage}&tagIndex=${tagIndex}`
          );
          if (resultPost.data.status === 200) {
              commit("GET_LIST_POST", resultPost.data.posts);
          }
      } catch (error) {
          console.log("error", error);
      }
  }
};