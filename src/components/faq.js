import {Typography,Container,Button,Stack,styled,Grid,} from '@mui/material'
  import Box from '@mui/material/Box'
  import Accordion from '@mui/material/Accordion'
  import AccordionSummary from '@mui/material/AccordionSummary'
  import AccordionDetails from '@mui/material/AccordionDetails'
  import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
  import { accordionSummaryClasses } from '@mui/material'
  
  const StyledAccordion = styled(Accordion)(
    ({ theme, active }) => `
  font-size:1rem;
  font-weight:semi-bold;
  border-radius:25px;
  // background:none;
  background-image:linear-gradient(90deg, #CB3694 -0.73%, #5133D5 100.85%);
  &:enabled {
      // background-image:linear-gradient(90deg, #CB3694 -0.73%, #5133D5 100.85%);
  }
  ${accordionSummaryClasses.expanded}:{
  }
  `
  )
  
  export default function Faqs() {
    return (
      <>
        
          <Box
          className='faq'
          
           
            sx={{
                
              // bacgroundColor: 'black',
            paddingBottom:'415px',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <Box sx={{paddingTop:"12rem"}}>
              <Box>
                <Typography variant="h3" fontFamily={'syne'} textAlign="center">
                  FREQUENTLY ASKED QUESTONS
                </Typography>
              </Box>
  
              <Box py={3}>
                <Container>
                  <Box py={1} borderBottom=".3px solid #8b7f7f">
                    <StyledAccordion style={{ borderRadius: '25px' }}>
                      <AccordionSummary
                        expandIcon={<ArrowDownwardIcon sx={{ color: '#fff' }} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography
                          variant="h5"
                          fontSize="1.4rem"
                          sx={{ color: '#fff', fontWeight: 'bold' }}
                        >
                          What is Astronaut?
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails
                        sx={{
                          backgroundColor: '#080C48',
                          borderBottomLeftRadius: '10px',
                          borderBottomRightRadius: '10px',
                          color: '#fff',
                          fontWeight: 'bold',
                        }}
                      >
                        <Typography variant="subtitle1">
                          Astronaut is a protocol built for decentralizing the way
                          which new projects and ideas coming to the BNB ecosystem
                          raise capital. With Astronaut, decentralized projects
                          will be able to raise and exchange capital cheap and
                          fast. Users will be able to participate in a secure and
                          interoperable environment on the Binance Smart Chain.
                        </Typography>
                      </AccordionDetails>
                    </StyledAccordion>
                  </Box>
                </Container>
              </Box>
            </Box>
          </Box>
        
      </>
    )
  }