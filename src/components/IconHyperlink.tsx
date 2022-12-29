interface IconHyperlinkInterface {
    link: string,
    icon: string
}

const IconHyperlink: React.FC<IconHyperlinkInterface> = ({link, icon}) => {
  return (
    <p className='text-center'><a href={link}><i className={`bi bi-${icon} text-white h2`}></i></a></p>
  );
}

export default IconHyperlink