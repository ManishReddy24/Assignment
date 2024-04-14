import { useCallback, useEffect, useState } from "react";
import Land from "./Land";
import "./Lands.css";

function Lands() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [index, setIndex] = useState(2);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://prod-be.1acre.in/lands/?ordering=-updated_at&page=1&page_size=10"
        );
        const body = await response.json();
        console.log("body", body);
        setItems(body.results);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    getData();
  }, []);

  const fetchData = useCallback(async () => {
    if (isLoading) return;

    setIsLoading(true);

    fetch(
      `https://prod-be.1acre.in/lands/?ordering=-updated_at&page=${index}&page_size=10`
    )
      .then((data) => data.json())
      .then((res) => {
        setItems((prevItems) => [...prevItems, ...res.results]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
    setIndex((prevIndex) => prevIndex + 1);
  }, [index, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        fetchData();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [fetchData]);

  return (
    <div className="main-container">
      <div className="land-container">
        {items.map((item) => (
          <Land data={item} key={item.id} />
        ))}
      </div>
      <p style={{ textAlign: "center" }}>
        {isLoading && <span className="loader"></span>}
      </p>
    </div>
  );
}

export default Lands;
