interface ImageProps{
    src: string;
    alt: string;
    className: string;
}
const OptimizedImage:React.FC<ImageProps> = ({src, alt, className}) => {
    const optimizedSrc = `${src}?auto=format&fit=max&w=1200&q=80`;

    return (
        <img
            src={optimizedSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            className={className}
        />
    )
}

export default OptimizedImage
