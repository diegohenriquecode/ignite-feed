import {Header} from "./components/Header.jsx";
import './global.css';
import styles from './App.module.css';
import {Sidebar} from "./components/Sidebar.jsx";
import {Post} from "./components/Post.jsx";

// author: { avatar_url: "", bane: "", role: "" }
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/diegohenriquecode.png",
      name: "Diego Oliveira",
      role: "Desenvolvedor Web"
    },
    content: [
      {type: 'paragraph', content: 'Fala Galeraaa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-03 20:00:00')
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/diego3g.png",
      name: "Diego Fernandes",
      role: "CTO Rocketseat"
    },
    content: [
      {type: 'paragraph', content: 'Fala Galeraaa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'}
    ],
    publishedAt: new Date('2022-05-10 20:00:00')
  },
]
export default function App() {

  return (
   <>
     <Header />

     <div className={styles.wrapper}>
       <aside>
           <Sidebar />
       </aside>
         <main>
           {
             posts.map((post) => (
               <Post
                 key={post.id}
                 author={post.author}
                 publishedAt={post.publishedAt}
                 content={post.content}
               />
             ))
           }
         </main>
     </div>
   </>
  )
}
