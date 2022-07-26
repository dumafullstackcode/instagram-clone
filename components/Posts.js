import Post from "./Post";
import {
  searchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";

const posts = [
  {
    id: "123",
    username: "Doffy13",
    userImg:
      "https://64.media.tumblr.com/037727960ba7fd9f2d4b646375fc97de/tumblr_pd3v47X4yS1xcq06po8_540.jpg",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/18cef78d-8d34-4cfb-b9c7-662588f56c7a/de8o3jb-bb7600a4-a0ba-4657-ae8a-5af2cd540d02.jpg/v1/fill/w_1280,h_948,q_75,strp/doffy__color_version__by_stephane_piovan_draw_de8o3jb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTQ4IiwicGF0aCI6IlwvZlwvMThjZWY3OGQtOGQzNC00Y2ZiLWI5YzctNjYyNTg4ZjU2YzdhXC9kZThvM2piLWJiNzYwMGE0LWEwYmEtNDY1Ny1hZThhLTVhZjJjZDU0MGQwMi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.1QmdT7JB1ajoF64U-RnAkFVUFj_pVz0WioTdWFyIcjo",
    caption: "this is DOPE!",
  },
  {
    id: "1234",
    username: "monsterking23",
    userImg:
      "https://i.pinimg.com/originals/bc/39/bc/bc39bc06ef60b795e77bf4f4b517aa32.jpg",
    img: "https://comicversatiloficial.com/wp-content/uploads/2022/05/One-Piece-Luffy-Versus-Kaido.jpg",
    caption: "this is DOPE!",
  },
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
