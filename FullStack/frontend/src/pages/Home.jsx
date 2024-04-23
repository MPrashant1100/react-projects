import  { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react";


const Home = () => {
  const [books, setBooks] = useState([]);
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
   // setLoading(true);
    axios
      .get("http://localhost:8000/book")
      .then((response) => {
        setBooks(response.data.data);
        console.log(response.data)
       // setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Book List</h1>
        {/* <Link to="/book/create">
          {'+'}
        </Link> */}
      </div>
      <table className="w-full border-separate border-sapcing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">No</th>
            <th className="border border-slate-600 rounded-md">Title</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Author
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Publish Year
            </th>
            <th className="border border-slate-600 rounded-md">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={book._id} className="h-8">
              <td className="border border-slate-700 rounded-md text-center">
                {index + 1}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
                {book.title}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.author}
              </td>
              <td className="border border-slate-700 rounded-md text-center max-md:hidden">
                {book.publishYear}
              </td>
              <td className="border border-slate-700 rounded-md text-center">
               {/* <div>
                <Link to= {`/book/deatils/${book._id}`}>
                  Details
                </Link>
                <Link to= {`/book/edit/${book._id}`}>
                  Edit
                </Link>
               </div> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
