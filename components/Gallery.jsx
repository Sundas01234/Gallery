// pages/index.js

import useSWR from "swr";

//Write a fetcher function to wrap the native fetch function and return the result of a call to url in json format
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Gallery(props) {
  const { data, error } = useSWR("/api/gallerydata", fetcher);

  //Handle the error state
  if (error) return <div>Failed to load</div>;
  //Handle the loading state
  if (!data) return <div>Loading...</div>;
  const galleryData = JSON.parse(data)

  console.log("Data ",galleryData)
  //Handle the ready state and display the result contained in the data object mapped to the structure of the json file
  // return (
  //   <div>
  //     <h1>My Framework from file</h1>
  //     <ul>
  //       <li>Name: {galleryData.posts[0].id}</li>
  //       {/* <li>Language: {galleryData}</li> */}
  //     </ul>
  //   </div>
  // );

  return (
    <div style={{ padding: 30 }}>
      {/* <div>
        {galleryData.posts.map((post) => (
          <div
            key={post.id}
            style={{ padding: 20, borderBottom: "1px solid #ccc" }}
          >
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div> */}
      <div className="text-gray-400 body-font ">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg w-590">
              
        {galleryData.posts.map((post) => (
          <div
            key={post.id}
            style={{ padding: 20, borderBottom: "1px solid #ccc" }}
          >
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
                  
                </div>
              </div>
              
            </div>
          </div>
        </div>
    </div>

  );
}
