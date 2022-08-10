import Footer from './Footer'

const Content = (prop) => {
    return (
        <div className="content-container">
            {prop.content}
            <Footer />
        </div>
    )
}

export default Content