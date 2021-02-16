
export const getStaticPaths = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json();

    const paths = data.map(solution => {
        return {
            params: { id: solution.id.toString() }
        }
    })

    return {
        paths, 
        fallback: false
    }
}

export const getStaticProps = async (context) => {
     const id = context.params.id;

     const res = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`);

     const data = await res.json();

     return {
         props: {solution: data }
     }
}

const Details = ({solution}) => {
    return ( 
        <div>
            <h1>
                {solution.name}
            </h1>
            <h5>Posted By: {solution.email}</h5>
            <p>{solution.body}</p>
        </div>
     );
}
 
export default Details;