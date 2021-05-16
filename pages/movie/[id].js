import Head from 'next/head'
import styles from '../../styles/Home.module.css'


export default function MovieItem({ movie }) {

    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.movieContainer}>
                <div className={styles.movieImage}>
                    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width="150"></img> <br />
                </div>

                <h1>{movie.title}</h1>
                <h4>{movie.overview}</h4>
            </div>


        </div>
    )
}

export async function getServerSideProps(context) {
    const req = await fetch(`http://localhost:3000/api/movie/${context.params.id}`);
    const { movie } = await req.json();

    return {
        props: {
            movie
        }
    }
}
