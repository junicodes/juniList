
import styles from '../../styles/Solution.module.css'
import Link from 'next/link';

export const getStaticProps = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();

    return {
        props: {solutions: data}
    }
}

const Solution = ({ solutions }) => {
    return ( 
        <div>
            <h1>Solution List</h1>
            {solutions.map(solution => (
                <Link href={`/solutions/${solution.id}`} key={solution.id}>
                    <a className={styles.single}>
                        <h3>
                            {solution.name}
                        </h3>
                        <h5>Posted By: {solution.email}</h5>
                    </a>
                </Link>
            ))}
        </div>
     );
}
 
export default Solution;