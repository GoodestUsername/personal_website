interface InfoSectioInterface {
    title: string,
    sectionId: string,
    children: React.ReactNode,
}

const InfoSection: React.FC<InfoSectioInterface> = ({title, sectionId, children}) => {
  return (
    <section id={sectionId} className='my-5'>
    <h1 className='py-2'>{title}</h1>
    <div className="d-flex flex-row align-content-center flex-wrap">
        {children}
    </div>
  </section>
  );
}

export default InfoSection