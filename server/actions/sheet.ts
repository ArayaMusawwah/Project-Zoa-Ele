export default defineFormActions({
  create: async (event) => {
    // h3 exports a readFormData to obtain a FormData object
    const formData = await readFormData(event)
    const name = formData.get('name')
    const wish = formData.get('wish')
    const kehadiran = formData.get('kehadiran')
    const date = Date.now()

    console.log({ name, wish, kehadiran, date })

    // Respond with the user
    // return actionResponse(event, {
    //   name,
    //   wish,
    //   kehadiran,
    //   date
    // })
  }
})
