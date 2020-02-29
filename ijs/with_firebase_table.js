window.addEventListener('load', async function () {
  const firebaseConfig = {
  }
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  let key = window.location.search.split('=')[1]

  let table = {}
  await db.collection('redics').get().then(qs => {
    qs.forEach(doc => {
      table[doc.id] = doc.data().target
    })
  })
  .catch(err => {
    console.log(err)
  })
  redic = table[key]
  window.location.replace(redic)
})
