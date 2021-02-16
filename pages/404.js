
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const NoFound = () => {

    const router = useRouter();

    useEffect(() => {

        const timeOut = setTimeout(() => {
            //router.go(-1) This redirect to the last page history
            //router.go(+1) This redirect to the next page history
            router.push('/')
        }, 3000);

        return () => {
            clearTimeout(timeOut)
        };

    }, []); //Empty is to fire the company once

    return ( 
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a>HomePage</a></Link></p>
        </div>
     );
}
 
export default NoFound;