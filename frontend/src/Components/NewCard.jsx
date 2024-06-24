import Card from 'react-bootstrap/Card';
import '../ComponentCss/NewCard.css'
function TextExample() {
    return (
        <>
            <div className='d-flex gap-4 p-4 flex-wrap'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title> <p className='one'>1</p> </Card.Title>
                        <Card.Subtitle className="mb-2 fw-bold">Book a test</Card.Subtitle>
                        <Card.Text>
                            Use search or package selector to book a test
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title> <p className='one'>2</p> </Card.Title>
                        <Card.Subtitle className="mb-2 fw-bold">Sample Collection from Home</Card.Subtitle>
                        <Card.Text>
                            Choose a convenient time slot and address for smooth sample collection
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title> <p className='one'>3</p> </Card.Title>
                        <Card.Subtitle className="mb-2 fw-bold">Download Reports</Card.Subtitle>
                        <Card.Text>
                        Download test reports from WhatsApp, email, website or sms with one click
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title> <p className='one'>4</p> </Card.Title>
                        <Card.Subtitle className="mb-2 fw-bold">Free Report Consultation</Card.Subtitle>
                        <Card.Text>
                        Avail report consultation once your reports are ready
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}

export default TextExample;