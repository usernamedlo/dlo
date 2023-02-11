type MyMusicsProps = {
    id : string
}

export const MyMusics : React.FC<MyMusicsProps> = ({id}) => {
    return (
        <div>
            <iframe width="500" height="300" src={"https://www.youtube.com/embed/"+ id} 
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}