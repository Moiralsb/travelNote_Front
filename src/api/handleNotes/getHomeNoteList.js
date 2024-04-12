import request from "../request.js"

export const getHomeNoteList = () => {
  return new Promise((resolve, reject) => {
    request.post("/note/home").then(res => {
      resolve({data: res.data})
    }).catch(err => {
      console.log(err)
      reject({message: err.message})
    })
  })
}