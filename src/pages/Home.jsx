import { useEffect, useState } from "react";
import { Spinner } from "../components/Spinner";
import Product from "../components/Product";

function Home() {
  const API_URL = "https://fakestoreapi.com/products";

  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProductData() {
    setLoading(true);

    try {
      const result = await fetch(API_URL);
      const data = await result.json();

      setPosts(data);
    } catch (error) {
      console.log("Error while fetching product details.");
      setPosts([]);
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center h-screen -mt-14">
          <Spinner />
        </div>
      ) : posts.length > 0 ? (
        <div className="grid max-w-6xl xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-2 mx-auto space-x-5 space-y-10 min-h-[80vh]">
          {posts.map((post) => (
            <Product key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <p>No data found</p>
        </div>
      )}
    </div>
  );
}

export default Home;
