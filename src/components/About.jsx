import styles from './About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <br />
            <h1>Welcome to WeatherAPP!</h1>
            <br />
            <p>Find out how the weather is in your favorite city </p>
            <p>Just type the city name in the search bar and it will show</p>
            <br />

            <div className={styles.LinkedIn}>
                <a href="https://www.linkedin.com/in/federicofleitas/"> 
                    <img src="https://cdn2.iconfinder.com/data/icons/social-media-applications/64/social_media_applications_14-linkedin-512.png" alt="LinkedIn" width='30' />
                </a>
                <p> Connect with me on LinkedIn </p>
            </div>
        </div>

            )
}