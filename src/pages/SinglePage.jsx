import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import LoaderComponent from '../components/loader/LoaderComponent';

export default function SinglePage() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useEffect(() => {
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id]);

    setTimeout(() => {
        setLoading(false);
    }, 1000);

    return (
        <>
            { loading && <LoaderComponent /> }
            
            { !loading &&
                <div>
                    <button onClick={goBack} className="btn btn-primary">Go back</button>

                    {post && (
                        <>
                            <h1>{post.title}</h1>
                            <p>{post.body}</p>

                            <Link to={`/posts/${id}/edit`} state={post}>Edit this posts</Link>
                        </>
                    )}
                </div>
            }
        </>
    )
}