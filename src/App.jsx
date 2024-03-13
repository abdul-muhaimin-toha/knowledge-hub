import Blogs from "./Blogs";
import Bookmarks from "./Bookmarks";
import Header from "./Header";
import SpendTime from "./SpendTime";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <div className="mx-auto max-w-screen-xl px-2  md:px-6">
          <div className="grid grid-cols-3 gap-6">
            <Blogs></Blogs>
            <aside className="col-span-1 flex flex-col gap-6">
              <SpendTime></SpendTime>
              <Bookmarks></Bookmarks>
            </aside>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
