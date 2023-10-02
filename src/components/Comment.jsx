import styles from './Comment.module.css';
import {ThumbsUp, Trash} from "phosphor-react";
import {Avatar} from "./Avatar.jsx";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/66555063?v=4"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Diego Henrique</strong>

                <time title="11 de Maio às 8:13" dateTime="2022-05-11 08:31:30">
                  Cerca de 1h atrás
                </time>
              </div>

              <button title="Deletar comentário">
                <Trash size={24}/>
              </button>
            </header>

            <p>Nossa, adorei amigo! Parabéns!!</p>
        </div>

        <footer>
         <button>
           <ThumbsUp />
           Aplaudir <span>20</span>
         </button>
        </footer>
      </div>
    </div>
  )
}