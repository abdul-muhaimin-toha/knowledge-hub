import { useEffect, useState } from "react";
import Blogs from "./Blogs";
import Bookmarks from "./Bookmarks";
import Header from "./Header";
import SpendTime from "./SpendTime";

function App() {
  const [posts, setPosts] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const [bookMarked, setBookMarked] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  const handleAddToBookMarked = (title) => {
    const isBookMarkedYet = bookMarked.find((item) => item === title);
    if (!isBookMarkedYet) {
      setBookMarked([...bookMarked, title]);
    } else {
      const afterRemoved = bookMarked.filter((item) => item !== title);
      setBookMarked(afterRemoved);
    }
  };

  const handleTotalReadingTime = (time) => {
    setReadingTime(readingTime + time);
  };

  return (
    <>
      <Header></Header>
      <main>
        <div className="mx-auto max-w-screen-xl px-2  md:px-6">
          <div className="grid grid-cols-3 gap-6">
            <Blogs
              posts={posts}
              handleAddToBookMarked={handleAddToBookMarked}
              handleTotalReadingTime={handleTotalReadingTime}
            ></Blogs>
            <aside className="col-span-1 flex flex-col gap-6">
              <SpendTime readingTime={readingTime}></SpendTime>
              <Bookmarks bookMarked={bookMarked}></Bookmarks>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
