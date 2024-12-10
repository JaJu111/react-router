import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoaderComponent from '../components/loader/LoaderComponent';

export default function BlogPage() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))

    }, []);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return (
        <>
            { loading && <LoaderComponent /> }

            { !loading &&
                <div>
                    <h1 style={{textAlign: 'center', marginBottom: '20px'}}>Blog Page</h1>

                    {
                        posts.map(post => (
                            <Link key={post.id} to={`/posts/${post.id}`}>
                                <li style={{listStyle: 'none'}}>
                                    <span className="mr-2" style={{color: 'black', fontWeight: '500'}}>{post.id}</span> 
                                    { post.title }
                                </li>
                            </Link>
                        ))
                    }
                </div>
            }
        </>
    )
}