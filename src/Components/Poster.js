function Poster() {
  return (
    <header className="bg-green-200 h-3 w-full">
      Hello
      <img
        style={{
          backgroundImage: `url(https://scontent-bos5-1.xx.fbcdn.net/v/t1.6435-9/101074825_3125502980804415_7541619665882054656_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=oRulGnNCZCkAX9m-nsn&_nc_oc=AdgCsxaeRRujA-Bncpbl3hcJDdOQnjBe-9G2bjMvTww55UuQI9yrlfASW2dNBGBmVfk&_nc_ht=scontent-bos5-1.xx&oh=00_AfDtw0GpOpfnzB3mSX4ziKTndYL22PuI9Yy1njHyHeH8Kw&oe=66286AF9)`,
        }}
        className="h-96 w-full bg-no-repeat"
        alt=""
      />
      <div
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1589308078059-be1415eab4c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`,
        }}
      >
        Hello World!
      </div>
    </header>
  );
}

export default Poster;
