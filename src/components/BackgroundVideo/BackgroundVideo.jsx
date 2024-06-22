import videoSrc from '../../../public/marvel-spiderman-miles-morales.960x540.mp4'


const BackgroundVideo = () => {
    return (
        <div className="background-video">
            <video autoPlay muted loop id="bgVideo">
                <source src={videoSrc} type="video/mp4" />
                Your browser does not support HTML5 video.
            </video>
        </div>
    );
};

export default BackgroundVideo;