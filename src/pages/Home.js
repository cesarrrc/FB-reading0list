import BookList from '../components/BookList'
import BookForm from '../components/BookForm'
import { useCollection } from '../hooks/useCollection';

export default function Home() {
  const { documents: books } = useCollection('books')
  
  return (
    <div className="App">
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}









// import { useEffect } from 'react'
// import { db } from '../firebase/config'
// import { collection, getDocs } from 'firebase/firestore'
// useEffect(()=>{
//   const ref = collection(db, 'books')
//   getDocs(ref)
//     .then(snap => {
//       let results = []
//       snap.docs.forEach(doc => {
//         results.push({id: doc.id, ...doc.data()})
//       })
//       setBooks(results)
//     })
// }, [])
