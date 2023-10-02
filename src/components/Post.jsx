import {Comment} from './Comment';
import styles from './Post.module.css'
import {Avatar} from "./Avatar.jsx";

// author: { avatar_url: "", bane: "", role: "" }
// publishedAt: Date
// content: String
export function Post({author, publishedAt, content}) {

  const publishedAtFormatted = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    hour: '2-digit',
    minute: '2-digit'
  }).format(publishedAt)

    return (
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar src={author.avatarUrl}/>
            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time title={publishedAtFormatted} dateTime="2022-05-11 08:31:30"> {publishedAtFormatted} </time>
        </header>

        <div className={styles.content}>

        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            placeholder="Deixe um comentário..."
          />

          <footer>
            <button type="submit">Publicar</button>
          </footer>
        </form>

        <div>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </article>
    )
}