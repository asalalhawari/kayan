import React from "react";
import { TextField, Button, Typography, Box, Paper } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";


const managementTeam = [
  {
    name: "Islam Hijawi",
    location: "UAE, Dubai",
    contact: "+971561207460",
    position: "General Manager",
    description: `Islam Hijawi is the Owner and Managing Director. An effective leader with excellent management skills that promote productivity towards achieving project and organizational goals. Islam is holding a High Diploma in Management, master’s degree in public health and Strategic Planning, and Bachelor of Physiotherapy. Finally, Islam speaks Arabic and English.`,
    image: "path-to-islam-image.jpg", // Replace with the correct image path
  },
  {
    name: "Kareem Khaleel",
    location: "Palestine, Jenin",
    contact: "+970599879418",
    position: "IT Director",
    description: `I’m a computer systems engineer with a master’s degree in computer science. I’m in the field of IT for about 10 years. I have worked in many positions starting from development, testing and now I’m in the management roles. I have worked as a business analyst for some time and learned the Gulf market experience in the previous years. Since Kayan Healthcare Technologies started, I was always there. And we will continue the journey till we reach our ambitious goals.`,
    image: "path-to-kareem-image.jpg", // Replace with the correct image path
  },
];
const ContactUs = () => {
  return (
    <div id="ContactUs">
{/*   
    <Box sx={{ padding: "6rem", backgroundColor: "#f9f9f9",
      position:"relative",width:"100%",height:"100vh",
      backgroundColor:'#2f2f2f2e'
    }}>
      <Box>
      <Typography variant="h4" align="center" gutterBottom
      
      sx={{
        fontWeight: "bold",
          fontFamily: "Orbitron, sans-serif",
          color: '#464646',
      }}>
        Contact Us
      </Typography>
      </Box>
     
      <Box
        sx={{
        //  position:"relative",
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "2rem",
          marginTop: "2rem",
           width: "100%",
           height: "calc(100vh - 8rem)",
           
        }}
      >
        <Box
          sx={{
            // position:"absolute",
            flex: { xs: "1", md: "65%" },
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
           width:"70%"
            
          }}
        >
          <Paper elevation={3} sx={{ padding: "2rem",
              // backgroundColor:'#2f2f2f2e'

           }}>
      
             <Typography
        variant="h4"
        sx={{
          marginBottom: "2rem",
          textAlign: "center",
          fontWeight: "bold",
          fontFamily: "Orbitron, sans-serif",
          color: '#464646',
        }}
      >
        Management Team
      </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem", 

              }}>
        {managementTeam.map((member, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              gap: "2rem",
              padding: "1rem 0",
            }}
          >
       
            <Box
              sx={{
                width: "3px",
                height: "100%",
                backgroundColor: "#4CAF50",
                position: "absolute",
                left: "21%",
                transform: "translateX(-50%)",
              }}
            />
       
            <Box
              sx={{
                flexShrink: 0,
                width: "150px",
                height: "150px",
                backgroundImage: `url(${member.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "50%",
                border: "4px solid #4CAF50",
              }}
            />
   
            <Box sx={{ flex: 1 }}>
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "#464646" }}
              >
                {member.name}
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#4CAF50" }}>
                {member.position}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  marginTop: "1rem",
                  color: "#606367",
                  // lineHeight: "1.6",
                  fontSize:"0.7rem"
                }}
              >
                {member.description}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
          </Paper>
        </Box>

        {/* Contact Information */}
         {/*
        <Box
          sx={{
            flex: { xs: "1", md: "30%" },
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Paper elevation={3} sx={{ padding: "2rem",
              // backgroundColor:'#2f2f2f2e'

           }}>
            <Typography variant="h5" gutterBottom
             sx={{
              marginBottom: "2rem",
              textAlign: "center",
              fontWeight: "bold",
              fontFamily: "Orbitron, sans-serif",
              color: '#464646',
            }}>
              Contact Information
            </Typography>
            <Box display="flex" alignItems="center" marginBottom="1rem">
              <LocationOnIcon sx={{ marginRight: "0.5rem", color: "#4CAF50" }} />
              <Typography
              style={{
                 fontSize:"0.8rem"
              }} 
              >
              REALOGICS STAR REAL ESTATE L.L.C Y Z BUILDING, Off 323, 3 rd floor floor, Alquoz 3 
              </Typography>
            </Box>
            <Box display="flex" alignItems="center" marginBottom="1rem">
              <PhoneIcon sx={{ marginRight: "0.5rem", color: "#4CAF50" }} />
              <Typography
              style={{
                fontSize:"0.8rem"
             }} 
              >+971 561207460</Typography>
            </Box>
            <Box display="flex" alignItems="center" marginBottom="1rem">
              <EmailIcon sx={{ marginRight: "0.5rem", color: "#4CAF50" }} />
              <Typography
              style={{
                fontSize:"0.8rem"
             }} 
              >contact@ourdomain.com</Typography>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{ padding: "1rem", marginTop: "1rem",
              // backgroundColor:'#2f2f2f2e'

           }}>
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "Orbitron, sans-serif",
        color: '#464646',
      }}
    >
      Our Location
    </Typography>
    <Box textAlign="center" marginTop="1rem">
      <a
        href="https://www.google.com/maps/search/EALOGICS+STAR+REAL+ESTATE+L.L.C+Y+Z+BUILDING/@25.2089173,55.2724983,12z/data=!3m1!4b1?hl=ar&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block", textDecoration: "none" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11587.888832849022!2d55.272498!3d25.208963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434a565324f9%3A0xd6cfbc3e3b62409f!2sAspin%20Commercial%20Tower%20106!5e0!3m2!1sar!2sae!4v1680288315483!5m2!1sar!2sae"
          width="100%"
          height="100px"
          style={{ border: 0, 
            // pointerEvents: "none" 
          }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </a>
    </Box>

  </Paper>

          {/* Google Map
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3..."
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>  */}
        {/* </Box>
      </Box>
    </Box> */}

     
<Box
  sx={{
    padding: { xs: "2rem", sm: "4rem", md: "6rem" },
    backgroundColor: "#f9f9f9",
    position: "relative",
    width: "100%",
    height: { xs: "auto", md: "100vh" },
    backgroundColor: "#2f2f2f2e",
  }}
>
  {/* <Box>
    <Typography
      variant="h4"
      align="center"
      gutterBottom
      sx={{
        fontWeight: "bold",
        fontFamily: "Orbitron, sans-serif",
        color: "#464646",
        fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
      }}
    >
      Contact Us
    </Typography>
  </Box> */}

  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      gap: "2rem",
      marginTop: "2rem",
      width: "100%",
      height: { xs: "auto", md: "calc(100vh - 8rem)" },
    }}
  >
    {/* Contact Form */}
    <Box
      sx={{
        flex: { xs: "1", md: "52%" },
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: { xs: "100%", md: "70%" },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: { xs: "1rem", sm: "2rem" },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            marginBottom: "2rem",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Orbitron, sans-serif",
            color: "#464646",
            fontSize: { xs: "1.2rem", sm: "1.5rem" },
          }}
        >
          Management Team
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {managementTeam.map((member, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                gap: "1rem",
                padding: "1rem 0",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <Box
                sx={{
                  width: "3px",
                  height: "94%",
                  backgroundColor: "#4CAF50",
                  position: "absolute",
                  left: { xs: "3%", sm: "17.5%" },
                  transform: "translateX(-50%)",
                }}
              />
              <Box
                sx={{
                  flexShrink: 0,
                  width: { xs: "80px", sm: "120px" },
                  height: { xs: "80px", sm: "120px" },
                  backgroundImage: `url(${member.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "50%",
                  border: "4px solid #4CAF50",
                }}
              />
              <Box sx={{ flex: 1,
                 maxWidth: { xs: "90%", sm: "70%" },
                 textAlign: { xs: "center", sm: "left" },
               }}>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: "bold", color: "#464646",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    wordWrap: "break-word",
                   }}
                >
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: "#4CAF50",
                  fontSize: { xs: "0.8rem", sm: "0.9rem" }
                 }}>
                  {member.position}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    marginTop: "1rem",
                    color: "#606367",
                    textAlign: 'justify', 
                    fontSize: { xs: "0.65rem", sm: "0.8rem" },
                    wordWrap: "break-word",
                  }}
                >
                  {member.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Paper>
    </Box>

    {/* Contact Information */}
    <Box
      sx={{
        flex: { xs: "1", md: "30%" },
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: { xs: "1rem", sm: "2rem" },
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            marginBottom: "2rem",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Orbitron, sans-serif",
            color: "#464646",
            fontSize: { xs: "1rem", sm: "1.5rem" },
          }}
        >
          Contact Information
        </Typography>
        <Box display="flex" alignItems="center" marginBottom="1rem">
          <LocationOnIcon
            sx={{ marginRight: "0.5rem", color: "#4CAF50" }}
          />
          <Typography style={{ fontSize: { xs: "0.7rem", sm: "0.8rem" } }}>
            REALOGICS STAR REAL ESTATE L.L.C Y Z BUILDING, Off 323, 3 rd floor,
            Alquoz 3
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" marginBottom="1rem">
              <PhoneIcon sx={{ marginRight: "0.5rem", color: "#4CAF50" }} />
              <Typography
              style={{
                fontSize: { xs: "0.7rem", sm: "0.8rem" }
             }} 
              >+971 561207460</Typography>
            </Box>
            <Box display="flex" alignItems="center" marginBottom="1rem">
              <EmailIcon sx={{ marginRight: "0.5rem", color: "#4CAF50" }} />
              <Typography
              style={{
                fontSize: { xs: "0.7rem", sm: "0.8rem" }
             }} 
              >contact@ourdomain.com</Typography>
            </Box>
        {/* Other Contact Information */}
      </Paper>
      <Paper elevation={3} sx={{ padding: "1rem", marginTop: "1rem",
              // backgroundColor:'#2f2f2f2e'

           }}>
    <Typography
      variant="h6"
      gutterBottom
      sx={{
        textAlign: "center",
        fontWeight: "bold",
        fontFamily: "Orbitron, sans-serif",
        color: '#464646',
      }}
    >
      Our Location
    </Typography>
    <Box textAlign="center" marginTop="1rem">
      <a
        href="https://www.google.com/maps/search/EALOGICS+STAR+REAL+ESTATE+L.L.C+Y+Z+BUILDING/@25.2089173,55.2724983,12z/data=!3m1!4b1?hl=ar&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block", textDecoration: "none" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11587.888832849022!2d55.272498!3d25.208963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434a565324f9%3A0xd6cfbc3e3b62409f!2sAspin%20Commercial%20Tower%20106!5e0!3m2!1sar!2sae!4v1680288315483!5m2!1sar!2sae"
          width="100%"
          height="100px"
          style={{ border: 0, 
            // pointerEvents: "none" 
          }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </a>
      {/* <a
        href="https://www.google.com/maps/search/EALOGICS+STAR+REAL+ESTATE+L.L.C+Y+Z+BUILDING/@25.2089173,55.2724983,12z/data=!3m1!4b1?hl=ar&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: "inline-block", textDecoration: "none" }}
      >
-        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11587.888832849022!2d55.272498!3d25.208963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434a565324f9%3A0xd6cfbc3e3b62409f!2sAspin%20Commercial%20Tower%20106!5e0!3m2!1sar!2sae!4v1680288315483!5m2!1sar!2sae"
          width="100%"
          height="100px"
          style={{ border: 0, 
            // pointerEvents: "none" 
          }}
          allowFullScreen=""
          loading="lazy"
          title="Our Location"
        ></iframe>
      </a> */}
    </Box>

  </Paper>
    </Box>
  </Box>
</Box>





        {/* <form>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
                required
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
                required
              />
              <TextField
                fullWidth
                label="Subject"
                variant="outlined"
                margin="normal"
              />
              <TextField
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                required
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ marginTop: "1rem",
                  backgroundColor: "#4CAF50",
                  width: "fit-content"
                 }}
              >
                Submit
              </Button>
            </form> */}

    </div>
   
  );
};



export default ContactUs;
