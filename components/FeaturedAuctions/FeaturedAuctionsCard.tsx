import React from "react"
import { useState } from "react"
import Image from "next/image";
import styles from "./FeaturedAuctionsCard.module.scss"

export default function FeaturedAuctionsCard() {
    



return(
    <div className={styles.root}>
        <span className={styles.span}>
            <div className={styles.left}>
                <Image className={styles.Image} />
            </div>

            <div className={styles.right}>
                
            </div>
        </span>
    </div>
    );
}