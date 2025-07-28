import { useEffect, useState } from "react";
import Card from '../components/Card';

const CreateConnection = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/todos');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let nuovaToDo = {
        id: todo.id + 1,
        descrizione: todo.descrizione,
        date: todo.date
    } 
      const response = await fetch('', {
        method: "POST",
        body: JSON.stringify(nuovaToDo)
      })
      .then
    }
  })

  if (!data) return null;

  return (
    <>
      <div>
        {data.map((element) => (
          <Card
            key={element.id}
            descrizione={element.descrizione}
            id={element.id}
            date={element.date}

          >

          </Card>
        ))}
        {/* {JSON.stringify(data)} */}
      </div>
    </>
  );
};

export default CreateConnection;








// import { useEffect, useState } from "react";

// const CreateConnection = () => {
//   const [data, setData] = useState(null);
// //  const [loading, setLoading] = useState(true);
// //  const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos');
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
//         const result = await response.json();
//         setData(result);
//       } catch (error) {
//        // setError(error);
//        console.log(error);
//       } 
//     };

//     fetchData();
//   }, []); // Empty dependency array means the effect runs only once after initial render

// //  if (loading) return <p>Loading...</p>;
// //  if (error) return <p>Error: {error.message}</p>;
//   if (!data) return null; // or initial state handling

//   return (
//     <>
//     {/* //<div>
//     //   <h1>Data from API:</h1>
//     //   <pre>{JSON.stringify(data, null, 2)}</pre>
//     // </div> */}
//     <div>
//       <p>{JSON.stringify(data)}</p>
//     </div>
//   </>
//   );
// };

// export default CreateConnection;





