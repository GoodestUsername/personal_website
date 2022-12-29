interface IconHyperlinkInterface {
    link: string,
    icon: string
}

const IconHyperlink: React.FC<IconHyperlinkInterface> = ({link, icon}) => {
  return (
    <p className='text-center m-1'><a href={link}><i className={`bi bi-${icon} text-white h1`}></i></a></p>
  );
}

export default IconHyperlink