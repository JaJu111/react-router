import { useParams, useNavigate, useLocation  } from "react-router-dom";

export default function EditPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const post = location.state;

    return (
        <> 
            <h1 style={{textAlign: 'center'}}>Edit Post Page, id: {id}</h1>
            <p>{post.body}</p>

            <button onClick={() => navigate(-1)} className="btn btn-primary">Go back</button>
        </>
    )
}