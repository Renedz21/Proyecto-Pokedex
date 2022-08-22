import React from 'react'
import Stats from './Stats'

const Detail = ({ pokemonDetails }) => {
    const styles = {
        itemContainer: 'w-full flex items-center',
        itemTitle: 'flex-auto w-full font-semibold text-gray-900',
        item: 'flex-auto w-full text-gray-700 capitalize',
    }
    return (
        <div>
            <div className='mx-auto grid grid-flow-row'>
                {/* <div className={styles.itemContainer}>
                    <h2 className={styles.itemTitle}>Species</h2>
                    <span className={styles.item}>7</span>
                </div> */}
                <div className={styles.itemContainer}>
                    <h2 className={styles.itemTitle}>Height</h2>
                    <span className={styles.item}>{pokemonDetails.height}</span>
                </div>
                <div className={styles.itemContainer}>
                    <h2 className={styles.itemTitle}>Weight</h2>
                    <span className={styles.item}>{pokemonDetails.weight}</span>
                </div>
                <div className={styles.itemContainer}>
                    <h2 className={styles.itemTitle}>Abilities</h2>
                    <span className={styles.item}>7</span>
                </div>
            </div>
            <div className='mx-auto grid grid-flow-row'>
                <div className={styles.itemContainer}>
                    <h2 className={styles.itemTitle}>Gender</h2>
                    <span className={styles.item}>7</span>
                </div>

                <div className={styles.itemContainer}>
                    <h2 className={styles.itemTitle}>Egg Cycle</h2>
                    <span className={styles.item}>7</span>
                </div>

                <div>
                    <Stats pokemonStats={pokemonDetails.stats} />
                </div>
            </div>
        </div>
    )
}

export default Detail