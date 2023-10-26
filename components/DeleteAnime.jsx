    export async function handleDelete(id){
        try {
          const response = await axios.delete(`http://127.0.0.1:8000/api/posts/${id}`)
        const resdata = response.data
        console.log(resdata)
        useRouter().push('/consume')
    
        } catch (error) {
          console.log(error)
        }
      }

