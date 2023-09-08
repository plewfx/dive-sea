import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const FAQ = () => {
  return (
    <section>
        <div className="container flex flex-col gap-[5vw] items-center">
            <h3 className='text-[3.38vw] text-black-18 text-center'>Frequently Asked <br /><span className='text-grey-C5'>Questions</span></h3>
            <div className="flex flex-col w-full">
                <Accordion style={{backgroundColor: '#F9F9F9'}}>
                    <AccordionSummary
                    expandIcon={<div className='flex items-center justify-center w-[1.5vw] h-[1.5vw] bg-black-14 rounded-1.2 text-white text-15'>+</div>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography style={{fontFamily: 'Poppins', fontWeight: '600', lineHeight: '260%'}}>What is an NFT?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{fontFamily: 'Poppins'}}>
                            You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br /> What’s The Difference Between Free And Paid Plan ?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor: '#F9F9F9'}}>
                    <AccordionSummary
                    expandIcon={<div className='flex items-center justify-center w-[1.5vw] h-[1.5vw] bg-black-14 rounded-1.2 text-white text-15'>+</div>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography style={{fontFamily: 'Poppins', fontWeight: '600', lineHeight: '260%'}} >What can I use NFTs for?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{fontFamily: 'Poppins'}}>
                            You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br /> What’s The Difference Between Free And Paid Plan ?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor: '#F9F9F9'}}>
                    <AccordionSummary
                    expandIcon={<div className='flex items-center justify-center w-[1.5vw] h-[1.5vw] bg-black-14 rounded-1.2 text-white text-15'>+</div>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography style={{fontFamily: 'Poppins', fontWeight: '600', lineHeight: '260%'}} >What is the difference between an NFT and cryptocurrency?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{fontFamily: 'Poppins'}}>
                            You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br /> What’s The Difference Between Free And Paid Plan ?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor: '#F9F9F9'}}>
                    <AccordionSummary
                    expandIcon={<div className='flex items-center justify-center w-[1.5vw] h-[1.5vw] bg-black-14 rounded-1.2 text-white text-15'>+</div>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography style={{fontFamily: 'Poppins', fontWeight: '600', lineHeight: '260%'}} >How much is an NFT worth?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{fontFamily: 'Poppins'}}>
                            You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br /> What’s The Difference Between Free And Paid Plan ?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{backgroundColor: '#F9F9F9'}}>
                    <AccordionSummary
                    expandIcon={<div className='flex items-center justify-center w-[1.5vw] h-[1.5vw] bg-black-14 rounded-1.2 text-white text-15'>+</div>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography style={{fontFamily: 'Poppins', fontWeight: '600', lineHeight: '260%'}} >How do I purchase an NFT on your platform ?</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography style={{fontFamily: 'Poppins'}}>
                            You Can Get Information By Contacting Our Support Team Have 24/7 Service. <br /> What’s The Difference Between Free And Paid Plan ?
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </section>
  )
}

export default FAQ