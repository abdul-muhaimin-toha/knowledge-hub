import Blogs from "./Blogs";
import Bookmarks from "./Bookmarks";
import Header from "./Header";
import SpendTime from "./SpendTime";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Blogs></Blogs>
        <aside>
          <SpendTime></SpendTime>
          <Bookmarks></Bookmarks>
        </aside>
      </main>
    </>
  );
}

export default App;
