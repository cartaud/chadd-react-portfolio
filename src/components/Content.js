import Footer from './Footer'

const styles = {
    container: {
        backgroundColor: '#252525',
        width: '75%',
        padding: '20px 5px',
    },
};

const Content = (prop) => {
    return (
        <div style={styles.container}>
            {prop.content}
            <Footer />
        </div>
    )
}

export default Content