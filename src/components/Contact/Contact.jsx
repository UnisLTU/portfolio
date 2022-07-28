import React from 'react'
import styles from "./Contact.module.css"
import { AiOutlineLinkedin } from "react-icons/ai"
import { HiOutlineMailOpen } from "react-icons/hi"
import { RiGithubLine } from 'react-icons/ri'

function Contact() {
    return (
        <>
            <div className={styles.contact_header}> Contact Me!
                <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center" }}>
                    <a href="linkedin.com/in/ugnius-tyla-9083a1132" className={styles.contact_card}>
                        <AiOutlineLinkedin size={32} style={{ padding: 8 }} />
                        <div className={styles.text_container}>
                            <span className={styles.website_name}>LinkedIn</span>
                            <span className={styles.website_url}>linkedin.com/in/ugnius-tyla-9083a1132</span>
                        </div>
                    </a>
                    <a href="mailto: tyla.ugnius@gmail.com" className={styles.contact_card}>
                        <HiOutlineMailOpen size={32} style={{ padding: 8 }} />
                        <div className={styles.text_container}>
                            <span className={styles.website_name}>Email</span>
                            <span className={styles.website_url}>tyla.ugnius@gmail.com</span>
                        </div>
                    </a>
                    <a href="https://github.com/UnisLTU" className={styles.contact_card}>
                        <RiGithubLine size={32} style={{ padding: 8 }} />
                        <div className={styles.text_container}>
                            <span className={styles.website_name}>Github</span>
                            <span className={styles.website_url}>https://github.com/UnisLTU</span>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Contact