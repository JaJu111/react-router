import './LoaderComponent.css';

export default function LoaderComponent() {
    return (
        <>
            <div className="loading-overlay">
                <div className="loading">
                    <div className="loader-box">
                        <div className="loader"></div>
                    </div>
                </div>
            </div>
        </>
    )
}