function PdfViewer(props: { pdf: string }) {

    const pdf = props.pdf;
    
    return(
        <embed src={pdf} height={screen.height} width={screen.width}/>
    )
}

export default PdfViewer;